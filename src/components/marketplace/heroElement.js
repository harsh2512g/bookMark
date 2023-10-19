import Image from 'next/image'
import React from 'react'

const HeroElement = () => {
  return (
    <div className=" max-w-7xl py-18 sm:py-40 lg:py-15 bg-[url('/marketPlacebg.png')] bg-center bg-no-repeat w-full mx-auto">
      <div className="mt-[-40px] w-[552px] mx-auto text-white text-center text-4xl font-bold">
        Peer-To-Peer College Textbook Marketplace
      </div>
      <div className="text-white text-center mt-4">
        Buy and sell your textbook materials right on your college campus
      </div>
      <div className="flex justify-between mx-auto rounded-full bg-white w-[626px] mt-4 px-11 py-1">
        <div className="border-r-2 border-neutral-300">
          <p className="text-zinc-800 text-sm ml-3 mt-3">Items</p>
          <input
            // id={label}
            placeholder="text"
            className="  px-4 py-2 w-[130px] "
          />
        </div>
        <div className="border-r-2 border-stone-300 ">
          <p className="text-zinc-800 text-sm ml-3 mt-3">Location</p>
          <input
            // id={label}
            placeholder="text"
            className=" px-4 py-2 w-[130px]"
          />
        </div>
        <div>
          <p className="text-zinc-800 text-sm ml-3 mt-3">Course</p>
          <input
            // id={label}
            placeholder="text"
            className="  px-4 py-2 w-[130px]"
          />
        </div>
        <Image
          src="./searchIcon.svg"
          height={5}
          width={46}
          className=" "
          alt=""
        />
      </div>
    </div>
  )
}

export default HeroElement
