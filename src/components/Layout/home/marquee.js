import Image from 'next/image'
import React from 'react'
import Marquee from 'react-fast-marquee'

const leftMarquee1 = [
  {
    imageUrl: '/image1.png',
  },
  {
    imageUrl: '/image2.png',
  },
  {
    imageUrl: '/image3.png',
  },
]

const leftMarquee2 = [
  {
    imageUrl: '/image4.png',
  },
  {
    imageUrl: '/image5.png',
  },
  {
    imageUrl: '/image6.png',
  },
]

const rightMarquee1 = [
  {
    imageUrl: '/image7.png',
  },
  {
    imageUrl: '/image8.png',
  },
  {
    imageUrl: '/image9.png',
  },
]

const rightMarquee2 = [
  {
    imageUrl: '/image10.png',
  },
  {
    imageUrl: '/image8.png',
  },
  {
    imageUrl: '/image9.png',
  },
]

const VerticalMarquees = () => {
  return (
    <div class="mx-auto max-w-7xl px-6  bg-[#E5F0EA]  lg:h-[600px] overflow-hidden">
      <ul
        role="list"
        class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3"
      >
        <li class="flex">
          <marquee width="60%" direction="up" class="h-full">
            {leftMarquee1.map((d) => (
              <div className="rounded-lg m-4">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={220}
                  className="rounded-lg"
                  alt=""
                />
              </div>
            ))}
          </marquee>
          <marquee width="60%" direction="down" class="h-full">
            {leftMarquee2.map((d) => (
              <div className="m-4">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={220}
                  className=""
                  alt=""
                />
              </div>
            ))}
          </marquee>
        </li>
        <li>
          <div class="flex  items-center h-full">
            <div>
              <div className="text-center text-green-700 text-[30px] lg:text-[50px] font-bold">
                Ready to find your textbooks?
              </div>
              <div className="mb-8 flex items-center p-2 text-center bg-white w-[210px] rounded-xl mx-auto text-green-700 text-[15px] lg:text-[20px] font-bold">
                Start your search
                <span>
                  <Image
                    src="./gridTraingle.svg"
                    height={10}
                    width={18}
                    className="mx-auto ml-2"
                    alt="Your Company"
                  />
                </span>
              </div>
            </div>
          </div>
        </li>
        <li class="flex">
          <marquee width="60%" direction="up" class="h-full">
            {rightMarquee1.map((d) => (
              <div className="m-4">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={220}
                  className="rounded-xl"
                  alt=""
                />
              </div>
            ))}
          </marquee>
          <marquee width="60%" direction="down" class="h-full">
            {rightMarquee2.map((d) => (
              <div className="m-4">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={200}
                  className=""
                  alt=""
                />
              </div>
            ))}
          </marquee>
        </li>
      </ul>
    </div>
  )
}

export default VerticalMarquees

// className=" overflow-hidden  md:flex flex-grow flex-shrink-0 hidden "
// style={{ flexBasis: '30%' }}
// >
// {/* First marquee (down to top) */}
// <Marquee direction="down" speed={50} className="mr-10 " loop={0}>

// </Marquee>

// {/* Second marquee (down to top) */}
// <Marquee direction="up" speed={50} className=" " loop={0}>
//
// </Marquee>
// </div>
// <div
// className=" mt-8 flex-grow flex-shrink-0"
// style={{ flexBasis: '40%' }}
// >
//
// </div>
// {/* Container for the next two marquees (right side) */}
// <div
// className="overflow-hidden  md:flex  h-[600px] flex-grow flex-shrink-0 hidden"
// style={{ flexBasis: '30%' }}
// >
// {/* Third marquee (top to down) */}
//
// </Marquee>

// {/* Fourth marquee (top to down) */}
// <Marquee direction="down" speed={50} className="">
//
// </Marquee>
// </div>
