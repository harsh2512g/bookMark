import Image from 'next/image'
import React from 'react'
import SpinnerComponent from '../Common/Spinner'
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
]
const CartDashboard = ({ cartData, loading }) => {
  return (
    <div className="mt-11">
      {loading && <SpinnerComponent />}
      {cartData?.map((d) => (
        <>
          <div className="mb-6 mt-6 max-w-7xl  justify-start items-center gap-10 inline-flex">
            <Image
              src="/bookImg.png"
              height={10}
              width={120}
              className=" shadow-lg mb-3"
              alt="Your Company"
            />
            <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[600px]  grow shrink basis-0 h-[117px] justify-start items-center gap-10 flex">
              <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                  {d?.bookData?.title}
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    {d?.bookData?.author} |
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    1st Edition |
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    ISBN: {d?.bookData?.isbn}
                  </div>
                </div>

                <div className="justify-start items-center gap-1 inline-flex font-bold text-lg">
                  ${d?.unit_price}
                </div>
              </div>
            </div>
          </div>
        </>
      ))}
    </div>
  )
}

export default CartDashboard
