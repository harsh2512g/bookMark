import { useUidContext } from '@/contexts/uidContext'
import React, { useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CustomDropdown from '../Common/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { setBookInfo } from '@/redux/authSlice'
import ImageUploader from './imageUploader'
import { uploadImages } from '@/firebase/utils'
import Cookies from 'js-cookie'
import { Controller } from 'react-hook-form'

const bookConditionDropDownOptions = [
  'Brand New',

  'Like New (Gently used, no issues)',
  'Fair (Some signs of usage)',

  'Include listings outside of my campus',
]

const categoryOptions = [
  'Chemistry',
  'Physics',
  'Maths',
  'Computer Science',
  'Art',
]

const BookDetails = ({
  setActiveIndex,
  activeIndex,
  errors,
  formDetails,
  setFormDetails,
  handleSubmit,
  register,
  onSubmit,
  getValues,
  setValue,
  control,
  isDisabled,
  uploadedImages,
  setUploadedImages,
  data
}) => {
  const values = getValues()
  console.log({ values,data })
  // const data = useSelector((state) => state?.bookInfo)
  const [selectedOption, setSelectedOption] = useState(values?.bookCondition)
  const [category, setCategory] = useState(values?.category)

  const [files, setFiles] = useState([])
  console.log({ values })

  const handleUpload = (image, file) => {
    setUploadedImages((prev) => [...prev, { image, file }])
  }

  useEffect(() => {
    setValue('images', uploadedImages)
  }, [uploadedImages])

  const handleRemoveImage = (index) => {
    const newImages = [...uploadedImages]
    newImages.splice(index, 1)
    setUploadedImages(newImages)
  }

  useEffect(()=>{
    if(data){
      setSelectedOption(data?.bookCondition)
      setCategory(data?.category)
      
    }
  },[data])
console.log({uploadedImages})
  return (
    <div className="  grow shrink basis-0 justify-start  flex flex-col md:flex-row">
      <div className="flex-2">
        <div className="flex flex-col items-center  p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {uploadedImages?.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image?.image}
                  alt={`Uploaded ${index}`}
                  className="w-64"
                />
                <span
                  className="absolute top-0 right-0 cursor-pointer bg-red-500 text-white"
                  onClick={() => handleRemoveImage(index)}
                >
                  x
                </span>
              </div>
            ))}
            {uploadedImages?.length < 5 && (
              <ImageUploader
                onUpload={handleUpload}
                setFiles={setFiles}
                files={files}
                setValue={setValue}
              />
            )}
          </div>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className=" flex-3 grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex"
      >
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Textbook Title
          </p>
          <Controller
            name="title"
            control={control}
            
            render={({ field }) => (
              <input
                {...field}
                id="title"
                name="title"
                type="text"
                placeholder="Book Title"
                required
                className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
                //defaultValue={data?.title}
                onChange={(e) => {
                  // Log the current value
                  console.log(e.target.value, 'hjhjhj')
                  // Call the field.onChange to ensure the form is updated
                  field.onChange(e)
                  setValue('title', e.target.value)
                  console.log(e.target.value, 'hjhjhj after')
                }}
                disabled={isDisabled}
              />
            )}
          />
        </div>
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Author
          </p>
          <input
            {...register('author')}
            id="author"
            name="author"
            type="text"
            placeholder="Author"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            defaultValue={data?.author}
            disabled={isDisabled}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              ISBN
            </p>
            <input
            defaultValue={data?.isbn}
              {...register('isbn')}
              id="isbn"
              name="isbn"
              type="number"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              
              disabled={isDisabled}
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Edition
            </p>
            <input
              {...register('edition')}
              id="edition"
              name="edition"
              type="text"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              defaultValue={data?.edition}
              disabled={isDisabled}
            />
          </div>
        </div>
        <div className="detail w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Book Condition
          </p>
          <CustomDropdown
            text="bookCondition"
            options={bookConditionDropDownOptions}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            register={register}
            setValue={setValue}
            isDisabled={isDisabled}
          />
          {errors?.bookCondition && (
            <p className="text-sm text-red-600">Please select </p>
          )}
        </div>

        <div className="w-full">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1  mt-5">
              Comments
            </p>
            <p className="p-2 text-neutral-500 text-sm font-normal">
              Leaving a note about the condition of the book, or how helpful it
              was, can help increase your chances to sell.
            </p>
            <input
              {...register('notes')}
              id="notes"
              name="notes"
              type="text"
              placeholder="Comments"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              defaultValue={data?.notes}
              disabled={isDisabled}
            />
          </div>
        </div>

        <div className="detail w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Category
          </p>
          <CustomDropdown
            text="category"
            options={categoryOptions}
            selectedOption={category}
            setSelectedOption={setCategory}
            register={register}
            setValue={setValue}
            isDisabled={isDisabled}
          />
          {errors?.category && (
            <p className="text-sm text-red-600">Please select </p>
          )}
        </div>

        {activeIndex == 0 && (
          <div className="flex justify-end w-full">
            <button
              //onClick={onSave}
              type="submit"
              className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
            >
              <div className={`text-white text-lg font-bold flex items-center`}>
                <div>Next</div>
              </div>
            </button>
          </div>
        )}
      </form>
    </div>
  )
}

export default BookDetails
