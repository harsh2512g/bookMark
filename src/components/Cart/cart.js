import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import SpinnerComponent from '../Common/Spinner'
import {
  firebaseGetDoc,
  firebaseRemoveFromDoc,
  firebaseUpdateDoc,
} from '@/firebase/utils'
import Cookies from 'js-cookie'

const CartDashboard = ({ bookId, loading, setOnRemoveClick }) => {
  const [data, setData] = useState()
  const uid = Cookies.get('bookMarkUid')
  useEffect(() => {
    const fetchData = async () => {
      const d = await firebaseGetDoc('books', bookId)
      console.log({ d }, 'checking')
      setData(d)
    }
    fetchData()
  }, [])
  const onRemove = async () => {
    const removeData = await firebaseRemoveFromDoc('users', uid, bookId)
    
    setOnRemoveClick(true)
  }
  return (
    <div className="mt-11">
      {loading && <SpinnerComponent />}

      <>
        <div className="mb-6 mt-6 max-w-7xl  justify-start items-center gap-10 inline-flex">
          <Image
            src="/bookImg.png"
            height={10}
            width={120}
            className=" shadow-lg mb-3"
            alt="Your Company"
          />
          <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[600px]  grow shrink basis-0 h-[117px] justify-start items-center gap-10 flex">
            <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
              <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                {data?.title}
              </div>
              <div className="justify-start items-start gap-5 md:inline-flex">
                <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                  {data?.author} |
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                  1st Edition |
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                  ISBN: {data?.isbn}
                </div>
              </div>

              <div className="justify-start items-center gap-1 inline-flex font-bold text-lg">
                ${data?.price}
              </div>
            </div>
          </div>
          <div
            className="mt-10 mr-8 text-zinc-500 text-sm font-bold cursor-pointer  "
            onClick={onRemove}
          >
            Remove
          </div>
        </div>
      </>
    </div>
  )
}

export default CartDashboard
