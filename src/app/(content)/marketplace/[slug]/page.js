'use client'
import BookInfo from '@/components/bookInfo/bookInfo'
import React from 'react'
import { useRouter, usePathname } from 'next/navigation'

const DummyPage = ({ param }) => {
  const router = useRouter()
  const pathname = usePathname()
  console.log({ param, router, pathname })

  console.log(router?.query?.slug, 'router ')
  return <BookInfo />
}

export default DummyPage
