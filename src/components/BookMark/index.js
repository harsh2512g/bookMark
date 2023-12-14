'use client'
import { firebaseGetDoc } from '@/firebase/utils'
import { Spinner } from 'flowbite-react'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const BookMark = () => {
  const router = useRouter()
  const uid = Cookies.get('bookMarkUid')
  const [books, setBooks] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true)
      const data = await firebaseGetDoc('users', uid)
      if (data?.bookMark) {
        const bookInfoPromises = data.bookMark.map((d) =>
          firebaseGetDoc('books', d),
        )
        const bookInfo = await Promise.all(bookInfoPromises)
        setBooks(bookInfo)
        console.log({ data, bookInfo })
      } else {
        console.log({ data })
      }
      setLoading(false)
    }
    fetchUser()
  }, [])

  console.log({ books })

  return (
    <>
      {loading ? (
        <div className="text-center mt-36">
          <Spinner />
        </div>
      ) : (
        <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] w-full mx-auto">
          <div className='font-bold text-2xl mb-8'>BookMarks</div>
          {books?.length > 0 ? (
            <>
              {books?.map((data) => {
                return (
                  <div
                    className="cursor-pointer mb-6 mt-6 max-w-7xl  justify-start items-center gap-10 inline-flex"
                    onClick={() => router.push(`/marketplace/${data?.id}`)}
                  >
                    <Image
                      src={data?.urls[0]}
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
                    {/* <div
              className="mt-10 mr-8 text-zinc-500 text-sm font-bold cursor-pointer  "
              // onClick={onRemove}
            >
              Remove
            </div> */}
                  </div>
                )
              })}
            </>
          ) : (
            <div className="font-bold text-lg text-center">No Books added</div>
          )}
        </div>
      )}
    </>
  )
}

export default BookMark
