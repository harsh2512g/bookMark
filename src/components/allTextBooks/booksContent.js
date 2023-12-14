import { firebaseGetDoc, firebaseUpdateBookMarkDoc } from '@/firebase/utils'
import { BookmarkSimple } from '@phosphor-icons/react'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

const BooksContent = ({ collection }) => {
  const uid = Cookies.get('bookMarkUid')
  const [loading, setLoading] = useState(false)
  const [bookMarks, setBookMarks] = useState()
  const addToBookMark = async (d) => {
    setLoading(true)

    const data = await firebaseUpdateBookMarkDoc('users', uid, d?.id)
    setBookMarks(data)
    console.log({ data })
    if (!data) {
      toast.error('Error in adding to bookmark', {
        position: 'bottom-left',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } else {
      console.log('successfully added to bookmark')
    }
    setLoading(false)
  }
  useEffect(() => {
    const fetchuserData = async () => {
      setLoading(true)
      const data = await firebaseGetDoc('users', uid)
      setBookMarks(data?.bookMark)
      setLoading(false)
    }

    fetchuserData()
  }, [])
  return (
    <div className="mt-11">
      {collection?.map((d) => (
        <>
          <div className="mb-6 mt-6 max-w-7xl  justify-start items-center gap-10 md:inline-flex">
            <Image
              src={d?.urls[0]}
              height={10}
              width={150}
              className=" shadow-lg mb-3"
              alt="Your Company"
            />
            <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[900px] mt-10 h-[117px] justify-start items-center gap-10 flex">
              <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                  {d?.title}
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    {d?.author}
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    1st Edition |
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    ISBN: 2983520357035
                  </div>
                </div>
                <div>
                  <span className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    Condition:
                  </span>
                  <span className="text-zinc-800 text-sm font-medium font-['DM Sans']">
                    {' '}
                    Like New
                  </span>
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    Seller rating:
                  </div>
                  <div className="w-6 h-[17px] text-zinc-800 text-sm font-medium font-['DM Sans']">
                    5.0
                  </div>
                </div>
              </div>
            </div>
            <div
              onClick={() => addToBookMark(d)}
              className="cursor-pointer flex flex-col justify-between mr-4 self-stretch items-end "
            >
              <BookmarkSimple
                size={28}
                color="#128848"
                weight={bookMarks?.includes(d?.id) ? 'fill' : 'regular'}
              />
              <div className="ml-auto text-zinc-800 text-3xl font-bold font-['DM Sans']">
                $50
              </div>
            </div>
          </div>
          <div className=" h-[0px] border border-stone-300"></div>
        </>
      ))}
    </div>
  )
}

export default BooksContent
