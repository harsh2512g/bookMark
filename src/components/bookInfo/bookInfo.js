'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import LoginSignUpModal from '../loginSignUpModal'
import { firebaseGetDoc } from '@/firebase/auth/signup'
import { v4 as uuidv4 } from 'uuid'
import Cookies from 'js-cookie'
import {
  firebaseAddBookInCart,
  firebaseGetDocs,
  firebaseUpdateDoc,
} from '@/firebase/utils'
import { toast } from 'react-toastify'

import { useRouter } from 'next/navigation'
import SpinnerComponent from '../Common/Spinner'

const BookInfo = ({ pathname }) => {
  const [addTocart, setAddToCart] = useState(false)
  const [makeOffer, setMakeOffer] = useState(false)
  const [onCheckout, setOnCheckout] = useState(false)

  const [bookData, setBookData] = useState()
  const [sellerData, setSellerData] = useState()
  const [loading, setLoading] = useState(false)
  const uid = Cookies.get('bookMarkUid')
  const router = useRouter()

 
  // Ensure there are at least 3 segments and "marketplace" is the second to last segment.

  const pathSegments = pathname.split('/')
  const bookId = pathSegments[2]
  useEffect(() => {
    const fetchBook = async () => {
      let data = await firebaseGetDoc('books', bookId)
      console.log({ data })
      setBookData(data)
    }
    fetchBook()
  }, [bookId])

  useEffect(() => {
    const fetchData = async () => {
      const data = await firebaseGetDoc('users', uid)
      const upd = data?.cart.find((d) => d == bookId)
      console.log({ upd })
      if (upd) {
        setAddToCart(true)
      }
    }

    fetchData()
  }, [bookId])

  const addToCartFunc = async () => {
    setLoading(true)

    const data = await firebaseUpdateDoc('users', uid, bookId)
    if (!data) {
      console.log('Error in adding in cart')
    } else {
      toast.success('Added to cart', {
        position: 'bottom-left',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      setAddToCart(true)
    }
    // {
    //   const submitInfo = {
    //     id: uuidv4(),
    //     book_id: bookData?.id,
    //     quantity: 1,
    //     unit_price: bookData?.price,
    //     total_price: parseInt(bookData?.price) * 1,
    //     created_at: new Date(),
    //     update_at: new Date(),
    //     bookData: bookData,
    //   }
    //   console.log({ submitInfo })
    //   const data = await firebaseAddBookInCart(submitInfo, submitInfo?.id)
    //   if (!data) {
    //     console.log('Error in adding in cart')
    //   } else {
    //     toast.success('Added to cart', {
    //       position: 'bottom-left',
    //       autoClose: 10000,
    //       hideProgressBar: false,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true,
    //     })
    //     setAddToCart(true)
    //   }
    // }
    setLoading(false)
  }

  useEffect(() => {
    const fetchSellerData = async () => {
      let data = await firebaseGetDoc('users', bookData?.user_id)
      console.log({ data })
      setSellerData(data)
    }
    fetchSellerData()
  }, [bookData])
  console.log({ sellerData })
  return (
    <>
      {loading && <SpinnerComponent />}
      <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] w-full mx-auto">
        <div>
          <div className="mt-24 lg:mt-0 text-zinc-900 text-3xl font-bold mb-4">
            {bookData?.title}
          </div>
          <div className="text-neutral-500 text-md font-medium mb-4 ">
            {/* {d?.text} */}
          </div>
          <div className="text-neutral-500 text-sm font-mormal ">{`Authors: ${bookData?.author} | 1st Edition | ISBN: ${bookData?.isbn}`}</div>
          <div className="mt-32 flex flex-col lg:flex-row justify-between">
            <div className="mx-auto">
              <Image
                src="/bookImg.png"
                height={10}
                width={300}
                className=" shadow-lg mb-3"
                alt="Your Company"
              />
            </div>
            <div className="flex flex-col lg:flex-row mt-10 lg:mt-0 justify-between">
              <div className="w-[390px] border-r-2 pr-8 border-[#C4C4C4]">
                <div className="flex  justify-between mb-6">
                  <p className="text-zinc-800 font-bold">Book Condition:</p>
                  <p className="w-[150px]">
                    {/* <span className="text-zinc-800 font-bold">Like New</span>{' '}
                  <span className="text-neutral-500 text-sm">
                    (Very slight signs of usage: no bent pages, handwriting, or
                    stains)
                  </span> */}
                    <span className="text-zinc-800 font-bold">
                      {bookData?.bookCondition}
                    </span>{' '}
                  </p>
                </div>
                <div className="text-neutral-500">Note From seller:</div>
                <div className="text-neutral-500 text-sm">
                  {bookData?.notes}
                </div>
                <div className="flex justify-between mt-8">
                  <p className="font-semibold">Buy(Used):</p>
                  <p className="font-semibold">{bookData?.price}</p>
                </div>
                <div className="text-green-700 text-center text-sm">
                  You’re saving 20% compared to buying brand new (usually $60)!
                </div>
                <div className="flex justify-between mt-8 mb-8">
                  <p className="text-zinc-800 font-bold">Pickup:</p>
                  <p className="text-zinc-800 font-bold">FREE</p>
                </div>
                <div className="flex justify-between  mb-8">
                  <p className="text-zinc-800 font-bold">Location:</p>
                  <p className="text-zinc-800 font-bold">Noida </p>
                </div>

                {makeOffer && (
                  <div className="mt-5">
                    <p className="text-zinc-900 text-xl font-bold">
                      Make an offer:
                    </p>
                    <div className="flex justify-between items-center">
                      <p>$40</p>
                      <input
                        type="checkbox"
                        className="rounded-full transform scale-100 mr-2 mb-3 mt-3"
                      />
                    </div>
                    <div
                      className={`cursor-pointer mt-4 w-[350px] h-[47px] p-3
                         rounded-xl border border-green-900 bg-green-700
                     justify-center items-center gap-2.5 inline-flex`}
                    >
                      <div className="text-white text-lg font-bold ">
                        Send offer
                      </div>
                    </div>
                  </div>
                )}
                {!makeOffer && (
                  <>
                    {' '}
                    <div
                      onClick={() => {
                        !addTocart && addToCartFunc()
                      }}
                      className={`${
                        addTocart
                          ? 'bg-green-200'
                          : 'bg-green-700 cursor-pointer'
                      }  w-[350px] h-[47px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
                    >
                      <div
                        className={`${
                          addTocart ? 'text-green-900 ' : 'text-white '
                        }text-lg font-bold flex items-center`}
                      >
                        {addTocart && (
                          <div className="mr-3">
                            <BiCheck size={26} />
                          </div>
                        )}
                        <div>{addTocart ? 'Added to cart' : 'Add to cart'}</div>
                      </div>
                    </div>
                    <div
                      className={`cursor-pointer mt-4 w-[350px] h-[47px] p-3 ${
                        addTocart
                          ? 'ml-3'
                          : 'rounded-xl border border-green-900'
                      } justify-center items-center gap-2.5 inline-flex`}
                    >
                      <div
                        className="text-green-700 text-lg font-bold "
                        onClick={() =>
                          addTocart
                            ? router.push('/checkout')
                            : setMakeOffer(true)
                        }
                      >
                        {addTocart ? 'Checkout >' : 'Make an offer'}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="pl-8 mt-8 lg:mt-0">
                <p className="w-[320px] text-zinc-900 text-xl font-bold mb-5">
                  Sold by:
                </p>
                <p className="text-zinc-900 text-lg font-bold">
                  {sellerData?.displayName}
                </p>
                <div className="flex items-center">
                  <span className="text-green-800">★</span>
                  <p className="text-zinc-900 text-sm font-medium">5.0</p>
                </div>
                <div className="text-zinc-900 text-sm font-medium mt-3">
                  Have questions?
                </div>
                <input
                  // id={label}
                  className="rounded-3xl border border-[#C4C4C4] mt-3 px-4 py-2"
                />
                <div className="mt-5 w-[320px] text-zinc-500 text-sm font-normal">
                  *Note: supplemental materials (e.g. CDs, DVDs, access codes,
                  or lab manuals) might not be included. Message the seller for
                  questions.
                </div>
              </div>
            </div>
          </div>
        </div>

        {onCheckout && (
          <LoginSignUpModal
            open={onCheckout}
            setOpen={(val) => setOnCheckout(val)}
          />
        )}
      </div>
    </>
  )
}

export default BookInfo
