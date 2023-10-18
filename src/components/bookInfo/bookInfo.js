import Image from 'next/image'
import React from 'react'

const bookInfo = [
  {
    imageUrl: '/bookImg.png',
    title: 'Algorithms to Live By',
    text: 'The Computer Science of Human Decisions',
    ISBN: '28912617672367',
    author: 'Brian Christian',
    sellerNote:
      '“Book is in good condition, used once. Great for any cognitive psychology classes.”',
    buyPrice: '$48',
    location: 'Gainesville,FL',
  },
]
const BookInfo = () => {
  return (
    <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] w-full mx-auto">
      {bookInfo?.map((d) => (
        <div>
          <div className=" text-zinc-900 text-3xl font-bold mb-4">
            {d?.title}
          </div>
          <div className="text-neutral-500 text-md font-medium mb-4 ">
            {d?.text}
          </div>
          <div className="text-neutral-500 text-sm font-mormal ">{`Authors: ${d?.author} | 1st Edition | ISBN: ${d?.ISBN}`}</div>
          <div className="mt-32 flex justify-between">
            <div>
              <Image
                src="/bookImg.png"
                height={10}
                width={300}
                className=" shadow-lg mb-3"
                alt="Your Company"
              />
            </div>
            <div className="flex justify-between">
              <div className="w-[320px] border-r-2 border-indigo-300">
                <div className="flex  justify-between mb-6">
                  <p className="text-zinc-800 font-bold">Book Condition:</p>
                  <p className="w-[150px]">
                    <span className="text-zinc-800 font-bold">Like New</span>{' '}
                    <span className="text-neutral-500 text-sm">
                      (Very slight signs of usage: no bent pages, handwriting,
                      or stains)
                    </span>
                  </p>
                </div>
                <div className="text-neutral-500">Note From seller:</div>
                <div className="text-neutral-500 text-sm">{d?.sellerNote}</div>
                <div className="flex justify-between mt-8">
                  <p className="font-semibold">Buy(Used):</p>
                  <p className="font-semibold">{d?.buyPrice}</p>
                </div>
                <div className="text-green-700 text-center text-sm">
                  You’re saving 20% compared to buying brand new (usually $60)!
                </div>
                <div className="flex justify-between mt-8 mb-8">
                  <p className="text-zinc-800 font-bold">Pickup:</p>
                  <p className="text-zinc-800 font-bold">FREE</p>
                </div>
                <div className="flex justify-between  mb-8">
                  <p className="text-zinc-800 font-bold">Location:</p>
                  <p className="text-zinc-800 font-bold">{d?.location}</p>
                </div>
              </div>
              <div>
                <p className="w-[320px]">Sold by:</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default BookInfo
