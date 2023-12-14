// components/Accordion.js
'use client'
import Image from 'next/image'
import { useState } from 'react'

export default function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false)
  console.log({ isOpen })
  return (
    <div className=" rounded-lg overflow-hidden mb-5">
      <button
        className=" w-full text-left py-2 px-4 text-zinc-800 text-xl font-bold "
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center">
          {isOpen ? (
            <Image
              src="./UpArrow.svg"
              height={10}
              width={20}
              className="mr-6"
              alt="Your Company"
            />
          ) : (
            <Image
              src="./downArrow.svg"
              height={10}
              width={20}
              className="mr-6"
              alt="Your Company"
            />
          )}
          <div>{title}</div>
        </div>
        {isOpen && (
          <div className="py-2 px-4 text-zinc-800 text-sm font-normal pl-11">
            {children}
          </div>
        )}
      </button>
    </div>
  )
}
