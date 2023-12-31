"use client";
import React, { useEffect, useState } from "react";
import BooksContent from "./booksContent";
import FilterDropdown from "../filter";
import SortDropdown from "../sort";
import { useSelector } from "react-redux";

const AllTextBooks = () => {
  const [filterValues, setFilterValues] = useState({
    range: 100,
    rating: 4,
  });
  const [bookCondition, setBookCondition] = useState([
    "Brand New",

    "Like New (Gently used, no issues)",
    "Fair (Some signs of usage)",

    "Include listings outside of my campus",
  ]);
  const [collection, setCollection] = useState();
  const books = useSelector((state) => state?.books);
  let items;

  useEffect(() => {
    let params;
    if (typeof window !== "undefined") {
      params = new URLSearchParams(window.location.search);
      // Use params here
    }
    items = params.get("items");
    function searchBooks() {
      // Convert both title and query to lowercase for a case-insensitive search
      console.log({ items });
      const lowerCaseQuery = items?.toLowerCase();

      return books?.filter((book) => {
        return (
          book?.title.toLowerCase().includes(lowerCaseQuery) &&
          parseInt(book?.price) <= filterValues?.range &&
          bookCondition.includes(book?.bookCondition)
        );
      });
    }
    const result = searchBooks();
    setCollection(result);
    console.log({ result });
  }, [books, filterValues, bookCondition, items]);
  return (
    <div className=" p-10 max-w-7xl mt-24 bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">
        All results for " {items} ":
      </div>
      <div className="flex justify-between mb-5 mt-10">
        <FilterDropdown
          filterValues={filterValues}
          setFilterValues={setFilterValues}
          bookCondition={bookCondition}
          setBookCondition={setBookCondition}
          side="left"
        />

        <SortDropdown />
      </div>
      <div className="mt-11">
        <BooksContent collection={collection} />
      </div>
    </div>
  );
};

export default AllTextBooks;
