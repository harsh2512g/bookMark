import Image from 'next/image'
import React from 'react'

const MyListing = ({ myListingBooks }) => {
  function formatDateForIndia(date) {
    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ]

    const day = date.getDate()
    let dayWithSuffix

    if (day % 10 === 1 && day !== 11) {
      dayWithSuffix = day + 'st'
    } else if (day % 10 === 2 && day !== 12) {
      dayWithSuffix = day + 'nd'
    } else if (day % 10 === 3 && day !== 13) {
      dayWithSuffix = day + 'rd'
    } else {
      dayWithSuffix = day + 'th'
    }

    return `${
      monthNames[date.getMonth()]
    } ${dayWithSuffix}, ${date.getFullYear()}`
  }

  const createdDate = (timestamp) => {
    console.log({ timestamp })
    const date = new Date(
      timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000,
    )
    const formattedDate = formatDateForIndia(date)
    return formattedDate
  }
  return (
    <div className="p-8">
      <p className="text-zinc-800 text-xl font-bold">My Listing</p>
      <div className="mt-8">
        {myListingBooks?.map((d) => (
          <div className="flex border-b-2 border-stone-300 pb-6 pt-6">
            <Image
              src={d?.urls[0]}
              height={5}
              width={110}
              className=" mr-5"
              alt=""
            />
            <div>
              <p className="text-zinc-800 text-lg font-bold ">{d?.title}</p>
              <p className="text-zinc-800 text-sm font-normal mt-2">{d?.author}</p>
              <p className="text-zinc-800 text-lg font-bold mt-2  leading-[27px]">${d?.price}</p>
              <p className="text-zinc-800 text-sm font-medium mt-2">
                Listed on {createdDate(d?.created_at)}
              </p>
              <p className="text-neutral-500 text-sm font-bold mt-2 ">
                {' '}
                Edit Listing
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default MyListing
