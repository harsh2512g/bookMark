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
    <div className="flex items-center max-w-7xl  bg-[#E5F0EA] mx-auto  justify-between">
      {/* Wrapper for all marquees */}

      {/* Container for the first two marquees (left side) */}
      <div
        className=" overflow-hidden h-[600px] md:flex flex-grow flex-shrink-0 hidden "
        style={{ flexBasis: '30%' }}
      >
        {/* First marquee (down to top) */}
        <Marquee
          direction="down"
          speed={50}
          className="rfm-marquee-container1"
          // play={false}
        >
          <div className="space-y-4">
            {leftMarquee1.map((d) => (
              <div className="rounded-lg ">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={200}
                  className=""
                  alt=""
                />
              </div>
            ))}
          </div>
        </Marquee>

        {/* Second marquee (down to top) */}
        <Marquee direction="up" speed={50} className="rfm-marquee-container1">
          <div className="space-y-4 ml-11">
            {leftMarquee2.map((d) => (
              <div className="">
                <Image
                  src={d?.imageUrl}
                  height={70}
                  width={200}
                  className=""
                  alt=""
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
      <div
        className=" mt-8 flex-grow flex-shrink-0"
        style={{ flexBasis: '40%' }}
      >
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
      {/* Container for the next two marquees (right side) */}
      <div
        className="overflow-hidden  md:flex  h-[600px] flex-grow flex-shrink-0 hidden"
        style={{ flexBasis: '30%' }}
      >
        {/* Third marquee (top to down) */}
        <Marquee direction="up" speed={50} className="rfm-marquee-container1">
          <div className="space-y-4 mr-8">
            {rightMarquee1.map((d) => (
              <Image
                src={d?.imageUrl}
                height={70}
                width={200}
                className="rounded-xl"
                alt=""
              />
            ))}
          </div>
        </Marquee>

        {/* Fourth marquee (top to down) */}
        <Marquee direction="down" speed={50} className="rfm-marquee-container1">
          <div className="space-y-4 ">
            {rightMarquee2.map((d) => (
              <Image
                src={d?.imageUrl}
                height={70}
                width={200}
                className=""
                alt=""
              />
            ))}
          </div>
        </Marquee>
      </div>
    </div>
  )
}

export default VerticalMarquees
