import React from 'react'
import Image from 'next/image'

const SliderCard = ({ ele, data, index }) => {
  return (
    <div>
      <div
        className=" overflow-hidden rounded-[20px] w-[440px] h-[440px] z-10 bg-cover"
        style={{
          backgroundImage: `url(${ele.image})`,
        }}
      >
        <div class="w-full h-full flex  justify-center items-center  backdrop-brightness-50 ">
          <div className="flex flex-col h-full p-5 justify-end z-50">
            <div className=" text-xl font-medium leading-[18px] text-white mb-4">
              {ele?.title}
            </div>
            <div className="w-[361px] text-lg font-normal  leading-[30px] text-white">
              {ele?.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SliderCard
