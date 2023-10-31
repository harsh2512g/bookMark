// pages/index.js
'use client'
import { useUidContext } from '@/contexts/uidContext'
import { firebase, firestore } from '@/firebase'
import { firebaseAddBookDetails } from '@/firebase/auth/signup'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import ImageUploader from './imageUploader'
import CustomDropdown from '../Common/DropDown'
import BookDetails from './bookDetails'
import Price from './price'
import SellerDetails from './sellerDetails'
import ListingSuccessfully from './listingSuccessfully'
import { useSelector } from 'react-redux'
import { uploadImages } from '@/firebase/utils'

const bookConditionDropDownOptions = [
  'Brand New',

  'Like New (Gently used, no issues)',
  'Fair (Some signs of usage)',

  'Include listings outside of my campus',
]

export default function UploadBook() {
  const data = useSelector((state) => state?.bookInfo)

  const { uid } = useUidContext()
  const [activeIndex, setActiveIndex] = useState(0)
  const [errors, setErrors] = useState({
    title: false,
    user_id: false,
    author: false,
    isbn: false,
    edition: false,
    notes: false,
    bookCondition: false,
    price: false,
    city: false,
    state: false,
    category: false,
  })
  const onSave = async () => {
    const urls = await uploadImages(data?.uploadedImages)
    if (data) {
      const { uploadedImages, ...otherData } = data
      const updatedData = {
        ...otherData,
        urls
      };
      const data1 = await firebaseAddBookDetails(updatedData, data?.id)

      if (data1) {
        setActiveIndex(4)
      }
    }
  }

  if (data) {
    const { uploadedImages, ...otherData } = data
    console.log({ otherData }, 'harsh')
  }

  return (
    <div className="  max-w-7xl   mt-[-9%] xl:mt-[10%] bg-center bg-no-repeat w-full mx-auto">
      {(activeIndex === 0 || activeIndex === 3) && (
        <BookDetails
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {(activeIndex === 1 || activeIndex === 3) && (
        <Price
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {(activeIndex === 2 || activeIndex === 3) && (
        <SellerDetails
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          setErrors={setErrors}
        />
      )}
      {activeIndex == 3 && (
        <div className="flex justify-between w-full">
          <div
            onClick={() => setActiveIndex(2)}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>Back</div>
            </div>
          </div>
          <div
            onClick={onSave}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>Post Listing</div>
            </div>
          </div>
        </div>
      )}
      {activeIndex === 4 && (
        <ListingSuccessfully
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
        />
      )}
    </div>
  )
}
