import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const HeroElement = () => {
  const router = useRouter()
  const [items, setItems] = useState()
  const [location, setLocation] = useState()
  const [course, setCourse] = useState()

  const onSearch = () => {
    console.log({ items, location, course })
    router.push(
      `/alltextbooks?items=${items}&location=${location}&course=${course}`,
    )
  }
  return (
    <div className=" max-w-7xl  bg-[url('/marketPlacebg.png')] bg-center  bg-no-repeat w-full mx-auto">
      <div className="flex flex-col items-center justify-center  max-w-7xl   w-full h-[550px] mx-auto">
        <div className="w-[300px] sm:w-[400px] lg:w-[773px] mx-auto text-center  text-white text-2xl sm:text-3xl lg:text-4xl leading-[40px] lg:leading-[55px] font-bold ">
          Peer-To-Peer College Textbook Marketplace
        </div>

        <div className="text-white text-center mt-4">
          Buy and sell your textbook materials right on your college campus
        </div>
        <div className="hidden md:flex justify-between mx-auto rounded-full bg-white w-[626px] mt-4 px-11 py-1">
          <div className="border-r-2 border-neutral-300">
            <p className="text-zinc-800 text-sm ml-3 mt-3">Items</p>
            <input
              // id={label}
              placeholder="text"
              className="  px-4 py-2 w-[130px] outline-none"
              onChange={(e) => setItems(e.target.value)}
            />
          </div>
          <div className="border-r-2 border-stone-300 ">
            <p className="text-zinc-800 text-sm ml-3 mt-3">Location</p>
            <input
              // id={label}
              placeholder="text"
              className=" px-4 py-2 w-[130px] outline-none"
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div>
            <p className="text-zinc-800 text-sm ml-3 mt-3">Course</p>
            <input
              // id={label}
              placeholder="text"
              className="  px-4 py-2 w-[130px] outline-none"
              onChange={(e) => setCourse(e.target.value)}
            />
          </div>
          <Image
            src="./searchIcon.svg"
            height={5}
            width={46}
            className=" cursor-pointer"
            alt=""
            onClick={onSearch}
          />
        </div>
      </div>
    </div>
  )
}

export default HeroElement
