'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ListingSuccessfully = ({activeIndex,setActiveIndex}) => {
  const router = useRouter()
  return (
    <div className="  max-w-7xl  flex flex-col justify-center w-full mx-auto ">
      {/* <div className=" text-zinc-900 text-3xl font-bold mb-10 pl-8">
        Checkout
      </div> */}
      <div className='text-center text-green-700 text-3xl font-bold'>Thank You</div>
      <div className="text-center text-zinc-800 text-2xl font-bold mt-6">
      Your listing has been submitted and is under review.
      </div>
      <div className="w-[300px] sm:w-[500px] lg:w-[958px] mx-auto mt-5 text-center text-zinc-800 text-lg">
      Our system is reviewing your listing for accuracy. Once approved, it will be automatically published to the marketplace. Please keep an eye on your notifications and Inbox to see when the listing is published, and if you receive any purchase requests.  
      </div>
      <div className="text-center mx-auto flex flex-col lg:flex-row items-center justify-center mt-10">
        <div
          onClick={() => setActiveIndex(0)}
          className="flex items-center text-green-600 pr-11 cursor-pointer p-5"
        >
          <p>{'< '}</p>
          <p>Back to My Listing</p>
        </div>

        <div
          // onClick={onClick}
          className={` bg-green-700 cursor-pointer w-[310px] h-[30px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
        >
          <div
            className={`text-white text-lg font-bold flex items-center justify-center`}
          >
            <div>Create another listing</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ListingSuccessfully
