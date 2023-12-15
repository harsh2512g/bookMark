'use client'
import React, { useEffect, useState } from 'react'
import {
  Gear,
  BookmarkSimple,
  Chat,
  CalendarBlank,
} from '@phosphor-icons/react'
import MyListing from './myListing'
import MyOrders from './myOrders'
import { firebaseGetDoc, firebaseGetDocs } from '@/firebase/utils'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie'
import withAuth from '@/utils/withAuth'
const profileOptions = [
  {
    icon: <Gear size={24} color="green" />,
    name: 'Account',
    redirectTo: '#',
  },
  {
    icon: <Chat size={24} color="green" />,
    name: 'Inbox',
    redirectTo: '/inbox',
  },
  {
    icon: <BookmarkSimple size={24} color="green" />,
    name: 'Bookmarks',
    redirectTo: '/bookMark',
  },
  {
    icon: <CalendarBlank size={24} color="green" />,
    name: 'Reservations',
    redirectTo: '#',
  },
]

const Profile = () => {
  const router = useRouter()
  const uid = Cookies.get('bookMarkUid')
  const [user, setUser] = useState()
  const [myListingBooks, setMyListingBooks] = useState()
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await firebaseGetDocs('books', 'user_id', uid)
      setMyListingBooks(data)
      console.log({ data })
    }
    fetchBooks()
  }, [])
console.log({uid,user})
  useEffect(() => {
    const fetchUser = async () => {
      const data = await firebaseGetDoc('users', uid)
      setUser(data)
      console.log({ data })
    }
    fetchUser()
  }, [uid])
  return (
    <div className=" max-w-7xl   w-full mx-auto mt-32">
      <div className="text-center text-zinc-800 text-[50px] font-bold">
        Welcome {user?.displayName}!
      </div>
      <p className="text-center text-zinc-800 text-lg font-normal mb-10">
        This is your dashboard where you can find textbook listings, orders, and
        more.{' '}
      </p>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div>
          <div className="rounded-[20px] border border-stone-300 px-8 py-10 mb-8">
            <div className="mb-6">
              <p className="text-zinc-800 text-xl font-bold">
                {user?.displayName}
              </p>
              <p className="text-zinc-800 text-lg font-normal">
                University of Florida{' '}
              </p>
              <p className="text-zinc-800 text-lg font-normal">Class of '24</p>
            </div>
            {profileOptions.map((d) => (
              <div
                className="flex items-center mb-6 cursor-pointer"
                onClick={() => router.push(d?.redirectTo)}
              >
                <div className="mr-6">{d?.icon}</div>
                <div className="text-zinc-800 text-lg font-bold ">
                  {d?.name}
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-[20px] border border-stone-300 px-8 py-10">
            <div className="mb-6">
              <p className="text-zinc-800 text-xl font-bold">My Classes</p>
              <p className="text-zinc-800 text-lg font-normal">
                University of Florida{' '}
              </p>
            </div>

            <div className="mb-6">
              <p className="text-zinc-800 text-xl font-bold">COS1234</p>
              <p className="text-zinc-800 text-lg font-normal">
                Computer Science
              </p>
            </div>
            <div className="mb-6">
              <p className="text-zinc-800 text-xl font-bold">BIO5678</p>
              <p className="text-zinc-800 text-lg font-normal">Biology</p>
            </div>
          </div>
        </div>
        <div className="rounded-[20px] border border-stone-300 mt-6 md:mt-0">
          <MyListing myListingBooks={myListingBooks} />
        </div>
        <div className="relative rounded-[20px] border border-stone-300 mt-6 md:mt-0">
          <MyOrders />
        </div>
      </div>
    </div>
  )
}

export default withAuth(Profile)
