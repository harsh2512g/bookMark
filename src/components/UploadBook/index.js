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
import { useForm, Controller } from 'react-hook-form'
import Cookies from 'js-cookie'
import { toast } from 'react-toastify'

const bookConditionDropDownOptions = [
  'Brand New',

  'Like New (Gently used, no issues)',
  'Fair (Some signs of usage)',

  'Include listings outside of my campus',
]

const tabs = [
  {
    name: 'Book Details',
    activeTabIndex: 0,
  },
  {
    name: 'Pricing',
    activeTabIndex: 1,
  },
  {
    name: 'Seller Details',
    activeTabIndex: 2,
  },
  {
    name: 'Review',
    activeTabIndex: 3,
  },
]
export default function UploadBook() {
  const {
    control,
    register,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: '',
      author: '',
      isbn: '',
      edition: '',
      bookCondition: null,
      notes: '',
      category: null,
      price: '',
      city: '',
      state: '',
    },
  })
  const data = useSelector((state) => state?.bookInfo)
  const values = getValues()
  const uid = Cookies.get('bookMarkUid')
  const [activeIndex, setActiveIndex] = useState(0)
  const [uploadedImages, setUploadedImages] = useState(
    values?.images ? values?.images : [],
  )
  // const [errors, setErrors] = useState({
  //   title: false,
  //   user_id: false,
  //   author: false,
  //   isbn: false,
  //   edition: false,
  //   notes: false,
  //   bookCondition: false,
  //   price: false,
  //   city: false,
  //   state: false,
  //   category: false,
  // })
  const [formDetails, setFormDetails] = useState({
    id: uuidv4(),
    title: data?.title,
    user_id: uid,
    author: data?.author,
    isbn: data?.isbn,
    edition: data?.edition,
    notes: data?.notes,
    created_at: new Date(),
    updated_at: new Date(),
  })

  const onSubmit = async (data) => {
    //const urls = await uploadImages(data?.images)

    console.log({ data })
    // if (activeIndex === 4) {
    //   if (values) {
    //     const { images, ...otherData } = data
    //     const updatedData = {
    //       ...otherData,

    //       id: uuidv4(),
    //       user_id: uid,
    //       created_at: new Date(),
    //       updated_at: new Date(),
    //     }
    //     console.log({ updatedData })
    //     //const data1 = await firebaseAddBookDetails(updatedData, updatedData?.id)

    //     // if (data1) {
    //     //   setActiveIndex(4)
    //     // }
    //   }
    // }
    setActiveIndex(activeIndex + 1)
    console.log({ activeIndex })
  }

  const onSave = async (values) => {
    console.log('hum chlenge')
    console.log({ values })
    
    console.log({images,data})
    if(uploadedImages.length<=0){
      toast.error('Please Add Atleast 1 Image of book', {
        position: 'bottom-left',
        autoClose: 10000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    } else{
      const urls = await uploadImages(uploadedImages)
      const {images,...data}=values;
        const updatedData = {
          ...data,

          id: uuidv4(),
          user_id: uid,
          created_at: new Date(),
          updated_at: new Date(),
          images:urls
        }
        console.log({ updatedData })
        const data1 = await firebaseAddBookDetails(updatedData, updatedData?.id)
        if(data1){
          toast.success('Successfully Book Added', {
            position: 'bottom-left',
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        }
    }
  }

  if (data) {
    const { uploadedImages, ...otherData } = data
  }
  console.log({ formDetails, activeIndex,uploadedImages })
  return (
    <div className="  max-w-7xl bg-center bg-no-repeat w-full mx-auto">
      <div className="text-zinc-900 text-3xl font-bold">
        Create your listing
      </div>
      <div className="flex  p-4">
        {tabs.map((d) => {
          return (
            d?.activeTabIndex <= activeIndex && (
              <div className="">
                <p>{d?.name}</p>
              </div>
            )
          )
        })}
      </div>
      {(activeIndex === 0 || activeIndex === 3) && (
        <BookDetails
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          formDetail={formDetails}
          setFormDetails={setFormDetails}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          getValues={getValues}
          setValue={setValue}
          control={control}
          isDisabled={activeIndex===3?true:false}
          uploadedImages={uploadedImages}
          setUploadedImages={setUploadedImages}
        />
      )}
      {(activeIndex === 1 || activeIndex === 3) && (
        <Price
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          isDisabled={activeIndex===3?true:false}
          // setErrors={setErrors}
        />
      )}
      {(activeIndex === 2 || activeIndex === 3) && (
        <SellerDetails
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          errors={errors}
          handleSubmit={handleSubmit}
          register={register}
          onSubmit={onSubmit}
          isDisabled={activeIndex===3?true:false}
          //setErrors={setErrors}
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
            onClick={() => onSave(values)}
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
