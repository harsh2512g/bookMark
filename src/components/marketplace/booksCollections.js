import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const books = [
  {
    imageUrl: './bookImage.svg',
    title: 'Algorithms to Live By',
    author: 'Brian Christian',
    description: '100+ listings from $10 and up',
  },
  {
    imageUrl: './bookImage.svg',
    title: 'Algorithms to Live By',
    author: 'Brian Christian',
    description: '100+ listings from $10 and up',
  },
  {
    imageUrl: './bookImage.svg',
    title: 'Algorithms to Live By',
    author: 'Brian Christian',
    description: '100+ listings from $10 and up',
  },
  {
    imageUrl: './bookImage.svg',
    title: 'Algorithms to Live By',
    author: 'Brian Christian',
    description: '100+ listings from $10 and up',
  },
  {
    imageUrl: './bookImage.svg',
    title: 'Algorithms to Live By',
    author: 'Brian Christian',
    description: '100+ listings from $10 and up',
  },
]
const BookCollection = ({ selectedCategory }) => {
  return (
    <div class="p-6 grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {books.map((d) => (
        <div className="mb-8">
          <Image
            src="/bookImg.png"
            height={10}
            width={250}
            className=" shadow-lg mb-3"
            alt="Your Company"
          />
          <div className="flex justify-between ml-2">
            <div className="text-zinc-800 text-lg font-bold leading-snug mt-2 mb-2">
              {d?.title}
            </div>
            <div className="w-[25px] lg:w-[30px]">
              <Image
                src="/addToCart.png"
                height={5}
                width={30}
                className=" mt-2"
                alt="Your Company"
              />
            </div>
          </div>
          <div className="text-zinc-800 text-sm font-normal mb-2 ml-2">
            {d?.author}
          </div>
          <div className="ml-2 text-zinc-500 text-sm font-bold underline leading-tight">
            {d?.description}
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookCollection
