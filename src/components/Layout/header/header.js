'use client'

import { useEffect, useState } from 'react'
import { Dialog } from '@headlessui/react'
import Link from 'next/link'
import { X, AlignJustify } from 'lucide-react'
import Image from 'next/image'
import ProfileDropdown from './profileDropdown'
import { useSelector } from 'react-redux'
import { firebaseGetAllDoc, firebaseGetDoc } from '@/firebase/utils'
import { useDispatch } from 'react-redux'
import { setBooks } from '@/redux/authSlice'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/contexts/authContext'
const navigation = [
  { name: 'How it Works', href: '/about' },
  { name: 'Marketplace', href: '/marketplace' },
  { name: 'Contact Us', href: '/contact' },
]

export function Header() {
  const router = useRouter()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const dispatch = useDispatch()
  const { user } = useAuth()
  useEffect(() => {
    const fetchBooks = async () => {
      const data = await firebaseGetAllDoc('books')
      console.log({ data }, 'books data')
      dispatch(setBooks(data))
    }
    fetchBooks()
  }, [])
  return (
    <header className="bg-white fixed top-0 right-0 left-0 z-[100] bg-transparent'}">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5 flex">
            <Image
              src="./logoImage.svg"
              height={90}
              width={48}
              className="mx-auto"
              alt="Your Company"
            />
            <Image
              src="./bookMark.svg"
              height={90}
              width={140}
              className="ml-3 mx-auto"
              alt="Your Company"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <AlignJustify
              color="#b0b0b0"
              className="h-6 w-6 "
              alt="bar mark"
              aria-hidden="true"
            />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-green-700 text-lg font-bold"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center">
          <Link
            href="/uploadBook"
            className="text-green-700 text-lg font-bold mr-5"
          >
            Sell Textbooks
          </Link>
          <Link
            href="/cart"
            className="text-sm font-semibold leading-6 mx-3 text-white mr-5"
          >
            <Image
              src="./Cart.svg"
              height={90}
              width={29}
              className="mx-auto"
              alt="Your Company"
            />
          </Link>
          <div className="w-[95.35px] h-[43.08px] px-2.5 py-[5px] bg-white rounded-[40px] shadow justify-center items-center gap-2.5 inline-flex">
            <div className="h-[33.08px] bg-white justify-between items-center flex gap-3">
              <ProfileDropdown />

              <Image
                src={user?.photoURL ? user?.photoURL : './profile.svg'}
                height={90}
                width={29}
                className="mx-auto cursor-pointer rounded-full "
                alt=""
                onClick={() => router.push('/profile')}
              />
            </div>
          </div>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <Link href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt=""
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <X
                color="#b0b0b0"
                className="h-6 w-6"
                alt="close mark"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg py-2 px-3 text-base font-semibold leading-7 text-green-700 hover:bg-gray-800"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-green-700 hover:bg-gray-800"
                >
                  Log in
                </Link>
                <Link
                  href="/register"
                  className="-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-green-700 hover:bg-gray-800"
                >
                  Register
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
