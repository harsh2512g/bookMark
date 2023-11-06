'use client'
import { firebaseGetDocs } from '@/firebase/utils'
import createdDate from '@/utils/common'
import Cookies from 'js-cookie'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import SortDropdown from '../sort'
import { DotsThreeOutline, MagnifyingGlass } from '@phosphor-icons/react'
import UploadBook from '../UploadBook'
import ThreeDots from './onThreeDots'
const MyListing = ({ activeIndex, setActiveIndex }) => {
  const uid = Cookies.get('bookMarkUid')
  const router = useRouter()
  const [books, setBooks] = useState()
  const [displayBooks, setDisplayBooks] = useState()
  const [searchText, setSearchText] = useState()
  const [onCreateList, setOnCreateList] = useState(false)
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await firebaseGetDocs('books', 'user_id', uid)

      setBooks(data)
      setDisplayBooks(data)
      console.log({ data })
    }
    fetchOrders()
  }, [uid])

  const onSearch = () => {
    function searchBooks() {
      const lowerCaseQuery = searchText?.toLowerCase()

      return books?.filter((book) => {
        return book?.title.toLowerCase().includes(lowerCaseQuery)
      })
    }
    const result = searchBooks()
    console.log({ result })
    setDisplayBooks(result)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onSearch()
    }
  }

  return (
    <div className="mt-11 mx-auto max-w-7xl ">
      {onCreateList ? (
        <UploadBook />
      ) : (
        <div>
          <div className="flex justify-between">
            <div className="flex items-center">
              <SortDropdown />
              <div className="ml-4 shadow-lg flex justify-center items-center rounded-full bg-white w-[170px]  ">
                <div className="">
                  <input
                    // id={label}
                    placeholder="Search "
                    className="  px-4 py-2 w-[120px] outline-none text-neutral-500 text-sm font-normal"
                    onChange={(e) => setSearchText(e.target.value)}
                    onKeyDown={handleKeyPress}
                  />
                </div>

                <MagnifyingGlass
                  size={20}
                  color="green"
                  onClick={onSearch}
                  className="cursor-pointer"
                />
              </div>
            </div>
            <div>
              <div className=" w-full">
                <div
                  //onClick={onSave}
                  className={` bg-green-700 mt-4 cursor-pointer w-[194px] h-[40px] px-3 py-2 rounded-xl justify-center items-center gap-2.5 inline-flex`}
                >
                  <div
                    className={`text-white text-lg font-bold flex items-center `}
                    onClick={() => setOnCreateList(true)}
                  >
                    <div>+ Create a listing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="font-bold text-2xl mb-6 "></div>
          {displayBooks?.map((d) => {
            return (
              <div className="mb-6 mt-6 max-w-7xl  justify-start items-center gap-14 md:inline-flex">
                <Image
                  src={d?.urls[0]}
                  height={10}
                  width={150}
                  className=" shadow-lg mb-3 cursor-pointer"
                  alt="Your Company"
                  onClick={() => router.push(`marketplace/${d?.id}`)}
                />
                <div
                  onClick={() => router.push(`marketplace/${d?.id}`)}
                  className="cursor-pointer self-stretch w-[0px] sm:w-[200px] md:w-[350px] lg:w-[900px]  h-[117px] justify-start items-center gap-10 flex"
                >
                  <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                    <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                      {d?.title}
                    </div>
                    <div className="justify-start items-start gap-5 inline-flex">
                      <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                        {d?.author}
                      </div>
                    </div>
                    <div className=" text-zinc-800 text-lg font-bold font-['DM Sans']">
                      $ {d?.price}
                    </div>
                  </div>
                </div>
                <div className=" flex flex-col mr-4 self-stretch items-end ">
                  <ThreeDots />
                  <div className="ml-auto text-zinc-800 text-sm font-medium  ">
                    Listed on {createdDate(d?.created_at)}
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default MyListing
