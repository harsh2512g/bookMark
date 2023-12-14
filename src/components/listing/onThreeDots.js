'use client'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import { DotsThreeOutline } from '@phosphor-icons/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const options = [
  {
    name: 'Edit Listing',
    href: '#',
  },
  {
    name: 'Remove Listing',
    href: '#',
  },
]

export default function ThreeDots() {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3  text-sm font-semibold text-gray-900  ">
          <div className=" justify-center w-[109px] bg-neutral-50items-center gap-2.5 inline-flex">
            <DotsThreeOutline
              size={22}
              weight="fill"
              color="#808080"
              className="cursor-pointer"
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
        <Menu.Items className="absolute right-0 z-10  w-52 origin-top-right rounded-[35px] p-4 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
            {options.map((d) => (
              <Menu.Item>
                {({ active }) => (
                  <>
                    <a
                      href={d?.href}
                      className={classNames(
                        'text-neutral-500 text-sm font-bold   block px-4 py-2  ',
                      )}
                    >
                      {d?.name}
                    </a>
                    
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
