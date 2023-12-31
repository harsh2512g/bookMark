'use client'
'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import PriceRange from './priceRange'
import RatingStars from './ratingStars'
import CheckboxFilter from './checkboxFilter'

// import RatingStars from './RatingStars'
// import CheckboxFilter from './CheckboxFilter'

function FilterDropdown({
  filterValues,
  setFilterValues,
  bookCondition,
  setBookCondition,
  side
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-[109px] h-11 p-2.5 bg-neutral-50 rounded-[10px] border border-stone-300 justify-start items-center gap-2.5 inline-flex"
      >
        <Image
          src="./filter.svg"
          height={90}
          width={29}
          className=""
          alt="Your Company"
        />
        <div className="text-zinc-800 text-lg font-medium ">Filters</div>
      </div>

      {isOpen && (
        <div className={`p-10 absolute ${side=="right" && "right-4"} z-10 w-[350px] bg-white mt-2 border border-gray-300 rounded-[20px] shadow-lg`}>
          <PriceRange
            filterValues={filterValues}
            setFilterValues={setFilterValues}
          />
          <RatingStars
            filterValues={filterValues}
            setFilterValues={setFilterValues}
          />
          <CheckboxFilter
            filterValues={filterValues}
            setFilterValues={setFilterValues}
            bookCondition={bookCondition}
            setBookCondition={setBookCondition}
          />
          {/* Add more checkboxes as needed */}
        </div>
      )}
    </div>
  )
}

export default FilterDropdown
