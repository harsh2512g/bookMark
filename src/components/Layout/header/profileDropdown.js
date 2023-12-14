import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import Image from 'next/image'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import { firebaseLogout } from '@/firebase/auth/auth'
import { useSelector } from 'react-redux'
import { useAuth } from '@/contexts/authContext'
import { List } from '@phosphor-icons/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProfileDropdown() {
  const router = useRouter()
  const { user } = useAuth()

  const signOut = () => {
    Cookies.remove('bookMarkUid')
    firebaseLogout()
    window.location.reload()
    router.push('/')
  }
 
  
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full  py-2 text-sm font-semibold text-gray-900  ">
          <List size={32} weight="fill" color="#128848"/>
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
        {!user ? (
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-xl p-4 bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href="/login"
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
                    href="/bookMark"
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
