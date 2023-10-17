'use client'
import Image from 'next/image'
import { useState, useRef } from 'react'
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react'
import SliderCard from './sliderCards'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const data = [
  {
    id: 1,
    image: './slideImage1.png',
    title: 'Empowerment with Sharing Economy',
    description:
      'Our platform encourages students to sell course textbooks to incoming course students.',
  },
  {
    id: 2,
    image: './slideImage2.png',
    title: 'Affordability At Our Core',
    description:
      'BookMark’d guarantees to find our community the most affordable materials across all platforms with ease.',
  },
  {
    id: 3,
    image: './slideImage3.png',
    title: 'Community for Campus Connection',
    description:
      'We are committed to creating a safe and secure platform for students to connect and engage on campus.',
  },
]
const cardsToShow = {
  desktop: 2.5,
  bigTablet: 2.96,
  tablet: 1.97,
  mobile: 1,
}

const SCROLLER_VALUE = 350

export function About() {
  const swiperRef = useRef(null)
  const [activeIndex, setactiveIndex] = useState(0)
  console.log({ activeIndex, swiperRef })

  const scrollTo = (amount) => {
    const container = swiperRef.current
    container.scrollLeft += amount
  }

  return (
    <div className="max-w-7xl mx-auto relative">
      <div
        className="text-green-400  bg-green-200 absolute top-[50%]  hover:bg-green-400  cursor-pointer"
        onClick={() => scrollTo(-SCROLLER_VALUE)}
      >
        <ChevronLeft size={32} />
      </div>
      <div
        className="text-green-400  w-50 h-50 bg-green-200 absolute top-[50%] right-0 hover:bg-green-400 cursor-pointer z-50"
        onClick={() => scrollTo(+SCROLLER_VALUE)}
      >
        <ChevronRight size={32} />
      </div>
      <div className=" bg-[#128848] py-24 sm:py-32 flex items-center">
        <div className="px-6 lg:px-10">
          <div className="">
            <div className="mx-auto w-full max-w-xl lg:mx-0">
              <h2 className="w-[365px] text-3xl font-bold tracking-tight text-white">
                While on campus, we’re here to help
              </h2>
              <p className="mt-6 text-lg leading-7 text-white font-normal">
                Arrange a convenient meeting with the seller to pick up your
                materials. This is a chance to connect with fellow students on
                your campus.
              </p>
            </div>
          </div>
        </div>

        <div
          className="swiperContainer flex flex-row gap-8 itema-center overflow-x-scroll scroll-smooth ease-in-out"
          ref={swiperRef}
        >
          {data.map((ele, index) => (
            <SliderCard index={index} data={data} ele={ele} />
          ))}
        </div>
      </div>
    </div>
  )
}
