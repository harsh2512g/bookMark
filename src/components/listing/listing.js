'use client'
import { Book, Cube, Notepad } from '@phosphor-icons/react'
import React, { useState } from 'react'
import MyListing from './myListing'
import MyClasses from './myClasses'
import MyOrders from './myOrders'
import UploadBook from '../UploadBook'

const tabs = [
  {
    index: 0,
    name: 'My Listing',
    href: '#',
    icon: <Notepad size={22} color="green" />,
  },
  {
    index: 1,
    name: 'My classes',
    href: '#',
    icon: <Book size={22} weight="fill" color="green" />,
  },
  {
    index: 2,
    name: 'Orders',
    href: '#',
    icon: <Cube size={22} color="green" />,
  },
]
const Listing = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className=" max-w-7xl   w-full mx-auto mt-32">
      <div className="flex justify-evenly border-b-2 border-stone-300">
        {tabs.map((d) => {
          return (
            <div
              className="cursor-pointer "
              onClick={() => setActiveIndex(d?.index)}
            >
              <p className="flex justify-center mb-3">{d?.icon}</p>
              <p
                className={`${
                  activeIndex == d?.index
                    ? 'font-bold border-b-2 border-green-900'
                    : ''
                } `}
              >
                {d?.name}
              </p>
            </div>
          )
        })}
      </div>
      {activeIndex == 0 && (
        <MyListing activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      )}
      {activeIndex == 1 && <MyClasses />}
      {activeIndex == 2 && <MyOrders />}
      {activeIndex == 3 && <UploadBook />}
    </div>
  )
}

export default Listing
