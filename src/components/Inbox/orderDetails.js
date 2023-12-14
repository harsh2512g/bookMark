import Image from 'next/image'
import React from 'react'

const OrderDetails = ({ selectedBookInfo }) => {
  console.log({ selectedBookInfo })
  return (
    <div>
      <div className="flex border-b-2 border-stone-300 mb-4 pb-5 p-6 ">
        <Image
          src={
            selectedBookInfo?.bookData?.urls &&
            selectedBookInfo?.bookData?.urls[0]
          }
          height={20}
          width={140}
          className=" mr-3 cursor-pointer"

          // alt={`Uploaded ${index}`}
        />
        <div>
          <div className="text-zinc-800 text-2xl font-bold">
            {selectedBookInfo?.bookData?.title}
          </div>
          <div className="text-zinc-800 text-lg font-normal">
            {selectedBookInfo?.bookData?.author}
          </div>
          <div>
            <span className="text-zinc-800 text-lg font-bold">ISBN:</span>{' '}
            {selectedBookInfo?.bookData?.isbn}
          </div>
        </div>
      </div>

      <div className="p-6 text-zinc-800 text-lg font-normal">
        Sold By:{' '}
        <span className=" font-bold">
          {selectedBookInfo?.userData?.displayName}
        </span>
      </div>

      <div className="p-6 text-zinc-800 text-lg font-normal flex justify-between">
        Total Paid:{' '}
        <span className=" font-bold">${selectedBookInfo?.bookData?.price}</span>
      </div>
    </div>
  )
}

export default OrderDetails
