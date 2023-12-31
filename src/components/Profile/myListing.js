import createdDate from '@/utils/common'
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

const MyListing = ({ myListingBooks }) => {
  const router=useRouter()
  console.log({myListingBooks})
  return (
    <div className="p-8">
      <p className="text-zinc-800 text-xl font-bold">My Listing</p>
      <div className="mt-8">
        {myListingBooks?.length <= 0 ? (
          <div className="text-md text-center">No book listed yet</div>
        ) : (
          myListingBooks?.map((d) => (
            <div className="flex border-b-2 border-stone-300 pb-6 pt-6">
              <Image
                src={d?.images[0]}
                height={5}
                width={110}
                className=" mr-5"
                alt=""
              />
              <div>
                <p className="text-zinc-800 text-lg font-bold ">{d?.title}</p>
                <p className="text-zinc-800 text-sm font-normal mt-2">
                  {d?.author}
                </p>
                <p className="text-zinc-800 text-lg font-bold mt-2  leading-[27px]">
                  ${d?.price}
                </p>
                <p className="text-zinc-800 text-sm font-medium mt-2">
                  Listed on {createdDate(d?.created_at)}
                </p>
                <p onClick={()=>router.push(`/uploadBook?bookId=${d?.id}`)} className="cursor-pointer text-neutral-500 text-sm font-bold mt-2 ">
                  {' '}
                  Edit Listing
                </p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}

export default MyListing
