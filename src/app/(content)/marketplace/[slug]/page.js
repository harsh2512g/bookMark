import BookInfo from '@/components/bookInfo/bookInfo'
import React from 'react'

const DummyPage = ({ param }) => {
  console.log({ param })
  return <BookInfo />
}

export default DummyPage
