import Image from 'next/image'
import React from 'react'
// const collection = [
//   {
//     imageUrl: '/bookImg.png',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
//   {
//     imageUrl: '/bookImg.png',
//     title: 'Algorithms to Live By',
//     author: 'Brian Christian',
//     description: '100+ listings from $10 and up',
//   },
// ]
const BooksContent = ({ collection }) => {
  console.log({ collection })
  return (
    <div className="mt-11">
      {collection?.map((d) => (
        <>
          <div className="mb-6 mt-6 max-w-7xl  justify-start items-center gap-10 inline-flex">
            <Image
              src="/bookImg.png"
              height={10}
              width={150}
              className=" shadow-lg mb-3"
              alt="Your Company"
            />
            <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[900px]  grow shrink basis-0 h-[117px] justify-start items-center gap-10 flex">
              <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
                <div className=" text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
                  {d?.title}
                </div>
                <div className="justify-start items-start gap-5 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    {d?.author}
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    1st Edition |
                  </div>
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    ISBN: 2983520357035
                  </div>
                </div>
                <div>
                  <span className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    Condition:
                  </span>
                  <span className="text-zinc-800 text-sm font-medium font-['DM Sans']">
                    {' '}
                    Like New
                  </span>
                </div>
                <div className="justify-start items-center gap-1 inline-flex">
                  <div className="text-zinc-800 text-sm font-normal font-['DM Sans']">
                    Seller rating:
                  </div>
                  <div className="w-6 h-[17px] text-zinc-800 text-sm font-medium font-['DM Sans']">
                    5.0
                  </div>
                </div>
              </div>
            </div>
            <div className="p-5 flex flex-col justify-between mr-4 self-stretch items-end ">
              <Image
                src="/addToCart.png"
                height={10}
                width={40}
                className="  mb-3"
                alt="Your Company"
              />
              <div className="ml-auto text-zinc-800 text-3xl font-bold font-['DM Sans']">
                $50
              </div>
            </div>
          </div>
          <div className=" h-[0px] border border-stone-300"></div>
        </>
      ))}
    </div>
  )
}

export default BooksContent
