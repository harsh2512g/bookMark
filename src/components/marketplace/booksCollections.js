import { firebaseGetAllDoc } from '@/firebase/auth/signup'
import {
  firebaseAddBookInCart,
  firebaseGetDoc,
  firebaseUpdateBookMarkDoc,
} from '@/firebase/utils'
import { BookmarkSimple } from '@phosphor-icons/react'
import { Spinner } from 'flowbite-react'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { v4 as uuidv4 } from 'uuid'

// const books = [
//   {
//     id: '12345',
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: './bookImage.svg',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
// ]
const BookCollection = ({
  selectedCategory,
  filterValues,
  setFilterValues,
  bookCondition,
  setBookCondition,
}) => {
  const [books, setBooks] = useState()
  const [loading, setLoading] = useState(false)
  const [bookMarks, setBookMarks] = useState()

  const uid = Cookies.get('bookMarkUid')
  useEffect(() => {
    const fetchBooks = async () => {
      setLoading(true)
      let data = await firebaseGetAllDoc('books')
      const data1 = data?.filter((d) => d?.category === selectedCategory)
      const updData = data1.filter(
        (book) =>
          parseInt(book?.price) <= filterValues?.range &&
          bookCondition.includes(book?.bookCondition),
      )
      setBooks(updData)
      setLoading(false)
    }
    fetchBooks()
  }, [selectedCategory, filterValues, bookCondition])

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
  console.log({ books, bookMarks,bookCondition })
  return (
    <>
      {loading && (
        <div className="text-center mt-8">
          <Spinner />
        </div>
      )}
      {books?.length > 0 ? (
        <div className="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {books?.map((d, index) => (
            <div>
              <div className="mb-8">
                <Image
                  src={d?.urls[0]}
                  height={10}
                  width={250}
                  className=" shadow-lg mb-3 mx-auto"
                  alt="Your Company"
                />
                <div className="w-[250px] mx-auto flex justify-between">
                  <Link href={`/marketplace/${d?.id}`} className="">
                    <div className="flex justify-between ml-2">
                      <div className="text-zinc-800 text-lg font-bold leading-snug mt-2 mb-2">
                        {d?.title}
                      </div>
                    </div>

                    <div className="text-zinc-800 text-sm font-normal mb-2 ml-2 mx-auto">
                      {d?.author}
                    </div>
                    <div className="mx-auto ml-2 text-zinc-500 text-sm font-bold underline leading-tight">
                      {'100+ listings from $10 and up'}
                    </div>
                  </Link>
                  <div
                    className="w-[25px] lg:w-[30px] cursor-pointer"
                    onClick={() => addToBookMark(d)}
                  >
                    <BookmarkSimple
                      size={24}
                      color="#128848"
                      weight={bookMarks?.includes(d?.id) ? 'fill' : 'regular'}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-zinc-800 text-lg font-bold text-center mt-8 mx-auto flex justify-center">
          No Book Available
        </div>
      )}
    </>
  )
}

export default BookCollection
