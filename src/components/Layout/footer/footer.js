'use client'
import Link from 'next/link'
import { navigation } from './config'
import { useState } from 'react'
import { useToast } from '@/components/UI/use-toast'
import Image from 'next/image'

export function Footer() {
  const [email, setEmail] = useState('')
  const { toast } = useToast()

  const handleSubmitEmail = async (e) => {
    e.preventDefault()
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({
          email: email,
        }),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      console.log(response)
      if (response.ok) {
        console.log('succesfull')
        toast({
          title: 'Success',
          description: 'Subscription successful!',
        })
        setEmail('')
      } else {
        console.log('failure')
        toast({
          title: 'Error',
          description: 'Subscription failed. Please try again.',
        })
      }
    } catch (error) {
      console.log(error)
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
      })
    }
  }
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="./logoImage.svg"
              height={10}
              width={30}
              alt="Your Company"
            />
            <div className="text-sm leading-6 text-green-700  font-medium ml-4">
              © 2023 BookMark’d, Inc.
            </div>
          </div>
          <div className="mt-16 ml-6 grid grid-cols-2 gap-10 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm leading-6 text-green-700  font-medium">
                  About
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6  hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm leading-6 text-green-700  font-medium">
                  Community
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.community.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6  hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm leading-6 text-green-700  font-medium">
                  Contact
                </h3>
                <ul className="mt-6 space-y-4">
                  {navigation.contact.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6  hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <span>
            <Image
              src="./facebookIcon.svg"
              height={10}
              width={24}
              className="mb-4"
              alt="Your Company"
            />
            <Image
              src="./instagramIcon.svg"
              height={10}
              width={24}
              className="mb-4"
              alt="Your Company"
            />
            <Image
              src="./linkedInIcon.svg"
              height={10}
              width={24}
              alt="Your Company"
            />
          </span>
        </div>
      </div>
    </footer>
  )
}
