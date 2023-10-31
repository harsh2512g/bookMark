'use client'
import React from 'react'
import {
  Gear,
  BookmarkSimple,
  Chat,
  CalendarBlank,
} from '@phosphor-icons/react'
const profileOptions = [
  {
    icon: <Gear size={24} color="green" />,
    name: 'Account',
    redirectTo: '#',
  },
  {
    icon: <Chat size={24} color="green" />,
    name: 'Inbox',
    redirectTo: '#',
  },
  {
    icon: <BookmarkSimple size={24} color="green" />,
    name: 'Bookmarks',
    redirectTo: '#',
  },
  {
    icon: <CalendarBlank size={24} color="green" />,
    name: 'Reservations',
    redirectTo: '#',
  },
]

const Profile = () => {
  return (
    <div className=" max-w-7xl   w-full mx-auto mt-32">
      <div className="text-center text-zinc-800 text-[50px] font-bold">
        Welcome Ana!
      </div>
      <p className="text-center text-zinc-800 text-lg font-normal mb-10">
        This is your dashboard where you can find textbook listings, orders, and
        more.{' '}
      </p>
      <div className="grid grid-cols-3 gap-4">
        <div>
          <div className="rounded-[20px] border border-stone-300 px-8 py-10 mb-8">
            <div className="mb-6">
              <p className="text-zinc-800 text-xl font-bold">Harsh Gupta</p>
              <p className="text-zinc-800 text-lg font-normal">
                University of Florida{' '}
              </p>
              <p className="text-zinc-800 text-lg font-normal">Class of '24</p>
            </div>
            {profileOptions.map((d) => (
              <div className="flex items-center mb-6">
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
              <p className="text-zinc-800 text-lg font-normal">
                Biology
              </p>
              
            </div>
          </div>
        </div>
        <div className="rounded-[20px] border border-stone-300">harsh</div>
        <div className="rounded-[20px] border border-stone-300">harsh</div>
      </div>
    </div>
  )
}

export default Profile
