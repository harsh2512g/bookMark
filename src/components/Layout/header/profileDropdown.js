import { Fragment, useEffect, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useUidContext } from '@/contexts/uidContext'
import { useRouter } from 'next/navigation'
import { firebaseLogout } from '@/firebase/auth/auth'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileDropdown() {
  const router = useRouter()
  const { uid } = useUidContext()
  console.log({ uid })
  const signOut = () => {
    Cookies.remove('bookMarkUid')
    firebaseLogout()
    router.push('/')
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5  px-3 py-2 text-sm font-semibold text-gray-900  ">
          <div className="w-[95.35px] h-[43.08px] px-2.5 py-[5px] bg-white rounded-[40px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="h-[33.08px] bg-white justify-between items-center flex gap-3">
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <Image
                  src="./burgerIcon.svg"
                  height={90}
                  width={26}
                  className="mx-auto"
                  alt="Your Company"
                />
              </div>
              <div className="flex-col justify-start items-start gap-2.5 inline-flex">
                <Image
                  src="./profile.svg"
                  height={90}
                  width={29}
                  className="mx-auto"
                  alt="Your Company"
                />
              </div>
            </div>
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
        {!uid ? (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl p-4 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Log in
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/signUp"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Sign up
                  </a>
                )}
              </Menu.Item>
              <br />
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Sell your textbooks
                  </a>
                )}
              </Menu.Item>
              <form method="POST" action="#">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      type="submit"
                      className={classNames(
                        active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-left text-sm',
                      )}
                    >
                      Help Center
                    </button>
                  )}
                </Menu.Item>
              </form>
            </div>
          </Menu.Items>
        ) : (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl p-4 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Messages
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/signUp"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Reservations
                  </a>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm',
                    )}
                  >
                    Bookmarks
                  </a>
                )}
              </Menu.Item>
              <br />

              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm',
                    )}
                  >
                    Sell your textbooks
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm',
                    )}
                  >
                    Account settings
                  </button>
                )}
              </Menu.Item>
              <br />
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm',
                    )}
                  >
                    Help Center
                  </button>
                )}
              </Menu.Item>

              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm',
                    )}
                    onClick={signOut}
                  >
                    Log out
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        )}
      </Transition>
    </Menu>
  )
}
