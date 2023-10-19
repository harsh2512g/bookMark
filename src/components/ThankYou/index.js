'use client'
import { useRouter } from 'next/navigation'
import React from 'react'

const ThankYou = () => {
  const router = useRouter()
  return (
    <div className="  max-w-7xl  mt-[5%] w-full mx-auto h-[calc(100vh-590px)]">
      <div className=" text-zinc-900 text-3xl font-bold mb-10 pl-8">
        Checkout
      </div>
      <div className="text-center text-zinc-800 text-2xl font-bold">
        Thank you for your purchase!
      </div>
      <div className="w-[300px] sm:w-[500px] lg:w-[958px] mx-auto mt-5 text-center text-zinc-800 text-lg">
        You will receive a confirmation email with your purchase details. We
        will notify your seller about your purchase so they can contact you to
        arrange pick-up details. We encourage that you also reach out to your
        seller to ensure pick-up arrangements are scheduled.
      </div>
      <div className="text-center mx-auto flex flex-col lg:flex-row items-center justify-center mt-10">
        <div
          onClick={() => router.push('/marketplace')}
          className="flex items-center text-green-600 pr-11 cursor-pointer p-5"
        >
          <p>{'< '}</p>
          <p>Back to Marketplace</p>
        </div>

        <div
          // onClick={onClick}
          className={` bg-green-700 cursor-pointer w-[310px] h-[30px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
        >
          <div
            className={`text-white text-lg font-bold flex items-center justify-center`}
          >
            <div>Inbox</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThankYou
