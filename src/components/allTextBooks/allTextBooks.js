import Image from 'next/image'
import React from 'react'
import BooksContent from './booksContent'
import FilterDropdown from '../filter'
import SortDropdown from '../sort'

const AllTextBooks = () => {
  return (
    <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">
        All results for "Algorithms to Live By":
      </div>
      <div className="flex justify-between mb-5">
        <FilterDropdown />

        <SortDropdown />
      </div>
      <div className="mt-11">
        <BooksContent />
      </div>
    </div>
  )
}

export default AllTextBooks
