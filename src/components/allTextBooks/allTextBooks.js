'use client'
import React, { useEffect, useState } from 'react'
import BooksContent from './booksContent'
import FilterDropdown from '../filter'
import SortDropdown from '../sort'
import { useSelector } from 'react-redux'

const AllTextBooks = () => {
  const [filterValues, setFilterValues] = useState({
    range: 50,
    rating: 4,
  })
  const [bookCondition, setBookCondition] = useState([])
  const [collection, setCollection] = useState()
  const books = useSelector((state) => state?.books)
  console.log(books && typeof parseInt(books[0]?.price), 'price')
  useEffect(() => {
    const params = new URLSearchParams(window.location.search)

    const items = params.get('items')
    // const location = params.get('location')
    // const course = params.get('course')
    function searchBooks() {
      // Convert both title and query to lowercase for a case-insensitive search
      console.log({ items })
      const lowerCaseQuery = items.toLowerCase()

      return books?.filter((book) => {
        return (
          book?.title.toLowerCase().includes(lowerCaseQuery) &&
          parseInt(book?.price) <= filterValues?.range
        )
      })
    }
    const result = searchBooks()
    setCollection(result)
    console.log({ result })
  }, [books, filterValues])
  return (
    <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">
        All results for "Algorithms to Live By":
      </div>
      <div className="flex justify-between mb-5">
        <FilterDropdown
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          bookCondition={bookCondition}
          setBookCondition={setBookCondition}
        />

        <SortDropdown />
      </div>
      <div className="mt-11">
        <BooksContent collection={collection} />
      </div>
    </div>
  )
}

export default AllTextBooks
