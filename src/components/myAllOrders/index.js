'use client'
import { firebaseGetDoc, firebaseGetDocs } from '@/firebase/utils'
import createdDate from '@/utils/common'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const MyAllOrders = () => {
  const uid = Cookies.get('bookMarkUid')
  const router = useRouter()
  const [books, setBooks] = useState()
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await firebaseGetDocs('orders', 'user_id', uid)

      const booksPromise = data.map(async (d) => {
        return {
          book: await firebaseGetDoc('books', d?.bookId),
          orderedDate: d?.created_at,
        }
      })
      const books1 = await Promise.all(booksPromise)
      setBooks(books1)
      console.log({ data, books1 })
    }
    fetchOrders()
  }, [uid])

  console.log({ books })
  return (
    <div className="mt-36 mx-auto max-w-7xl ">
      <div className="font-bold text-2xl mb-6 ">My Orders</div>
      {books?.map((d) => {
        return (
          <div
            onClick={() => router.push(`marketplace/${d?.book?.id}`)}
            className="mb-6 mt-6 max-w-7xl cursor-pointer justify-start items-center gap-14 md:inline-flex"
          >
            <Image
              src={d?.book.urls[0]}
              height={10}
              width={150}
              className=" shadow-lg mb-3"
              alt="Your Company"
            />
            <div className="self-stretch w-[0px] sm:w-[200px] md:w-[350px] lg:w-[900px]  h-[117px] justify-start items-center gap-10 flex">
              <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                  {d?.book?.title}
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    {d?.book?.author}
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    1st Edition |
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    ISBN: 2983520357035
                  </div>
                </div>
                <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                  {createdDate(d?.orderedDate)}
                </div>
              </div>
            </div>
            <div className="cursor-pointer flex flex-col justify-between mr-4 self-stretch items-end ">
              <div className="ml-auto text-zinc-800 text-3xl font-bold font-['DM Sans']">
                $ {d?.book?.price}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default MyAllOrders
