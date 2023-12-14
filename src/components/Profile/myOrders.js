import { firebaseGetDoc, firebaseGetDocs } from '@/firebase/utils'
import createdDate from '@/utils/common'
import Cookies from 'js-cookie'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
const MyOrders = () => {
  const uid = Cookies.get('bookMarkUid')
  const router = useRouter()
  const [books, setBooks] = useState()
  useEffect(() => {
    const fetchOrders = async () => {
      const data = await firebaseGetDocs('orders', 'user_id', uid)

      const booksPromise = data?.map(async (d) => {
        return {
          book: await firebaseGetDoc('books', d?.bookId),
          orderedDate: d?.created_at,
        }
      })
      const books1 = await Promise.all(booksPromise)
      setBooks(books1.slice(0, 3))
      console.log({ data, books1 })
    }
    fetchOrders()
  }, [uid])

  return (
    <div className="p-8">
      <p className="text-zinc-800 text-xl font-bold">My Orders</p>
      <div className="mt-8">
        {books?.length <= 0 ? (
          <div className="text-md text-center">No book listed yet</div>
        ) : (
          books?.map((d) => (
            <div
              className="flex border-b-2 border-stone-300 pb-6 pt-6 cursor-pointer"
              onClick={() => router.push(`/marketplace/${d?.book?.id}`)}
            >
              <Image
                src={d?.book?.urls[0]}
                height={5}
                width={110}
                className=" mr-5"
                alt=""
              />
              <div>
                <p className="text-zinc-800 text-lg font-bold ">
                  {d?.book?.title}
                </p>
                <p className="text-zinc-800 text-sm font-normal mt-2">
                  {d?.book?.author}
                </p>
                <p className="text-zinc-800 text-sm font-medium mt-2">
                  Listed on {createdDate(d?.orderedDate)}
                </p>
              </div>
            </div>
          ))
        )}
      </div>
      {books?.length < 3 && (
        <Link
          href="/myOrders"
          className="absolute bottom-6 right-6 underline text-green-700 text-sm font-bold"
        >
          See all {'>'}
        </Link>
      )}
    </div>
  )
}

export default MyOrders
