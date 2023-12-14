'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const sortOptions = [
  {
    name: 'Price: low to high',
    href: '#',
  },
  {
    name: 'Avg. Seller Rating',
    href: '#',
  },
  {
    name: 'Best Condition First',
    href: '#',
  },
  {
    name: 'Proximity to my location',
    href: '#',
  },
]

export default function SortDropdown() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3  text-sm font-semibold text-gray-900  ">
          <div className=" justify-center w-[109px] h-11 p-2 bg-neutral-50 rounded-[10px] border border-stone-300 items-center gap-2.5 inline-flex">
            <div className="text-zinc-800 text-lg font-medium ">Sort</div>
            <Image
              src="./sort.svg"
              height={90}
              width={25}
              className=""
              alt="Your Company"
            />
          </div>
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-72 origin-top-right rounded-[35px] p-6 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            {sortOptions.map((d) => (
              <Menu.Item>
                {({ active }) => (
                  <>
                    <a
                      href={d?.href}
                      className={classNames(
                        ' text-zinc-800 text-lg font-normal block px-4 py-2  ',
                      )}
                    >
                      {d?.name}
                    </a>
                    <div className='w-52 border border-stone-300 h-0 mx-auto mt-3 mb-3'></div>
                  </>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
