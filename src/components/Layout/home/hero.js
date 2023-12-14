'use client'
import { MagnifyingGlass, PaperPlaneRight } from '@phosphor-icons/react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
const leftMarquee1 = [
  {
    imageUrl: '/image1.png',
    title: 'Algorithms to Live By',
    author: ' Brian Christian',
    price: '$50',
  },
  {
    imageUrl: '/image2.png',
    title: 'Algorithms to Live By',
    author: ' Brian Christian',
    price: '$50',
  },
  {
    imageUrl: '/image3.png',
    title: 'Algorithms to Live By',
    author: ' Brian Christian',
    price: '$50',
  },
]

export function Hero() {
  return (
    <main className="mt-24 ">
      <div className="relative flex flex-col items-center">
        <div className="flex items-center justify-center  max-w-7xl  bg-[url('/landingPageBanner.svg')] bg-center bg-no-repeat w-full h-[400px] mx-auto">
          <div className="text-shadow-md w-[300px] sm:w-[400px] lg:w-[773px] mx-auto text-center  text-white text-2xl sm:text-3xl lg:text-4xl leading-[40px] lg:leading-[55px] font-bold ">
            You’re only 3 steps closer to a better college experience
          </div>
        </div>

        {/* grids */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid lg:grid-cols-2 lg:grid-rows-3 ">
          {/* grid1 */}
          <div className="h-[630px] mx-auto grid place-content-center pl-5">
            <p className=" text-green-700 text-3xl font-bold mb-6">1. Browse</p>
            <p className=" text-zinc-800 text-lg font-normal pr-5">
              Start by browsing through our extensive collection of college
              materials. From textbooks to study guides, you'll find everything
              you need for your courses.
            </p>
            <div className="flex items-center mt-6">
              <span className="text-green-700 text-lg font-bold mr-4">
                Start your search
              </span>
              <span>
                <Image
                  src="./gridTraingle.svg"
                  height={10}
                  width={20}
                  className="mx-auto"
                  alt="Your Company"
                />
              </span>
            </div>
          </div>
          {/* grid2 */}
          <div className="bg-[#E5F0EA] ">
            <div className="pt-16">
              <div className="relative bg-white rounded-full ml-8 mr-8 p-2 flex ">
                <p className=" text-sm font-medium flex justify-center flex-grow flex-shrink-0 lg:w-2/5 pl-2 ">
                  Gainesville,FL
                </p>
                <p className="text-sm font-medium flex flex-grow flex-shrink-0 lg:w-3/5  border-l-2 border-[#808080] pl-4">
                  Computer Science
                </p>
                <div className="absolute top-2 right-2">
                  <MagnifyingGlass size={24} color="#128848" />
                </div>
              </div>
              <div className="h-[630px] mx-auto grid place-content-center">
                <Marquee className="">
                  {leftMarquee1.map((d) => {
                    return (
                      <div className="mb-11 ml-11">
                        <Image
                          src={d?.imageUrl}
                          height={70}
                          width={250}
                          className=""
                          alt=""
                        />
                        <div className="flex justify-between items-center mt-2 ml-1">
                          <div className="text-zinc-800 text-lg font-medium ">
                            {d?.title}
                          </div>
                          <Image
                            src="/addToCart.png"
                            height={70}
                            width={30}
                            className=""
                            alt=""
                          />
                        </div>
                        <div className="text-zinc-800 text-sm font-normal ml-1">
                          {d?.author}
                        </div>
                        <div className="text-zinc-800 text-sm font-normal ml-1">
                          {d?.price}
                        </div>
                      </div>
                    )
                  })}
                </Marquee>
              </div>
            </div>
          </div>
          {/* grid3 */}
          <div className="bg-[#E5F0EA]">
            <div className="h-[630px] mx-auto grid place-content-center">
              {/* <Image
                src="./grid3Frame.svg"
                height={90}
                width={470}
                className="mx-auto"
                alt="Your Company"
              /> */}
              <div className="bg-white shadow-lg w-[350px] md:w-[470px] h-[350px] rounded-[20px] p-[20px] md:p-[50px]">
                <div className="flex mx-auto ">
                  <Image
                    src="./gridImage.svg"
                    height={48}
                    width={48}
                    className=""
                    alt="Your Company"
                  />
                  <div className="pl-4">
                    <p>Sold by Megan(Class of '22)</p>
                    <p>5.0</p>
                  </div>
                </div>
                <div className="text-center ext-zinc-800 text-lg font-bold mt-6">
                  Have questions?
                </div>

                <div className="relative h-[40px] rounded-3xl border border-[#C4C4C4] mt-6 py-2 w-[310px] md:w-[370px] outline-none px-6 ">
                  <span className="typewriter">
                    Is the textbook in good condition?
                  </span>
                  <PaperPlaneRight
                    size={22}
                    weight="fill"
                    color="green"
                    className="absolute top-2 right-3"
                  />
                </div>
                <div className="mt-8 w-[290px] md:w-[366px] text-center text-neutral-500 text-xs font-normal ">
                  *Note: supplemental materials (e.g. CDs, DVDs, access codes,
                  or lab manuals) might not be included. Message the seller for
                  questions.
                </div>
              </div>
            </div>
          </div>
          {/* grid4 */}
          <div className="">
            <div className="h-[630px] mx-auto grid place-content-center pl-5">
              <p className=" text-green-700 text-3xl font-bold mb-6">
                2. Reserve
              </p>
              <p className="text-zinc-800 text-lg font-normal pr-5 ">
                Once you've found the perfect materials, simply click to reserve
                them. You'll be able to chat with the seller for the
                availability and choose the most convenient option for you.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-green-700 text-lg font-bold mr-4">
                  Reserve books now
                </span>
                <span>
                  <Image
                    src="./gridTraingle.svg"
                    height={10}
                    width={20}
                    className="mx-auto"
                    alt="Your Company"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* grid5 */}
          <div className="">
            <div className="h-[630px] mx-auto grid place-content-center pl-5">
              <p className=" text-green-700 text-3xl font-bold mb-6">3. Meet</p>
              <p className="text-zinc-800 text-lg font-normal pr-5 ">
                Arrange a convenient meeting with the seller to pick up your
                materials. This is a chance to connect with fellow students on
                your campus.
              </p>
              <div className="flex items-center mt-6">
                <span className="text-green-700 text-lg font-bold mr-4">
                  Start connecting
                </span>
                <span>
                  <Image
                    src="./gridTraingle.svg"
                    height={10}
                    width={20}
                    className="mx-auto"
                    alt="Your Company"
                  />
                </span>
              </div>
            </div>
          </div>
          {/* grid6 */}
          <div className="bg-[#E5F0EA]">
            <div className="h-[630px] mx-auto grid place-content-center">
              <Image
                src="./grid6Frame.svg"
                height={90}
                width={470}
                className="mx-auto"
                alt="Your Company"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
