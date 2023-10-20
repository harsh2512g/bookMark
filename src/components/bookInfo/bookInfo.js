'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { BiCheck } from 'react-icons/bi'
import LoginSignUpModal from '../loginSignUpModal'
const bookInfo = [
  {
    imageUrl: '/bookImg.png',
    title: 'Algorithms to Live By',
    text: 'The Computer Science of Human Decisions',
    ISBN: '28912617672367',
    author: 'Brian Christian',
    sellerNote:
      '“Book is in good condition, used once. Great for any cognitive psychology classes.”',
    buyPrice: '$48',
    location: 'Gainesville,FL',
  },
]
const BookInfo = () => {
  const [addTocart, setAddToCart] = useState(false)
  const [makeOffer, setMakeOffer] = useState(false)
  const [onCheckout, setOnCheckout] = useState(false)
  return (
    <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] w-full mx-auto">
      {bookInfo?.map((d) => (
        <div>
          <div className=" text-zinc-900 text-3xl font-bold mb-4">
            {d?.title}
          </div>
          <div className="text-neutral-500 text-md font-medium mb-4 ">
            {d?.text}
          </div>
          <div className="text-neutral-500 text-sm font-mormal ">{`Authors: ${d?.author} | 1st Edition | ISBN: ${d?.ISBN}`}</div>
          <div className="mt-32 flex justify-between">
            <div>
              <Image
                src="/bookImg.png"
                height={10}
                width={300}
                className=" shadow-lg mb-3"
                alt="Your Company"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[390px] border-r-2 pr-8 border-[#C4C4C4]">
                <div className="flex  justify-between mb-6">
                  <p className="text-zinc-800 font-bold">Book Condition:</p>
                  <p className="w-[150px]">
                    <span className="text-zinc-800 font-bold">Like New</span>{' '}
                    <span className="text-neutral-500 text-sm">
                      (Very slight signs of usage: no bent pages, handwriting,
                      or stains)
                    </span>
                  </p>
                </div>
                <div className="text-neutral-500">Note From seller:</div>
                <div className="text-neutral-500 text-sm">{d?.sellerNote}</div>
                <div className="flex justify-between mt-8">
                  <p className="font-semibold">Buy(Used):</p>
                  <p className="font-semibold">{d?.buyPrice}</p>
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
                  <p className="text-zinc-800 font-bold">{d?.location}</p>
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
                      onClick={() => setAddToCart(true)}
                      className={`${
                        addTocart ? 'bg-green-200' : 'bg-green-700'
                      } cursor-pointer w-[350px] h-[47px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
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
                          addTocart ? setOnCheckout(true) : setMakeOffer(true)
                        }
                      >
                        {addTocart ? 'Checkout >' : 'Make an offer'}
                      </div>
                    </div>
                  </>
                )}
              </div>
              <div className="pl-8">
                <p className="w-[320px] text-zinc-900 text-xl font-bold mb-5">
                  Sold by:
                </p>
                <p className="text-zinc-900 text-lg font-bold">
                  Megan(Class of '22)
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
      ))}
      {onCheckout && (
        <LoginSignUpModal
          open={onCheckout}
          setOpen={(val) => setOnCheckout(val)}
        />
      )}
    </div>
  )
}

export default BookInfo
