import { useUidContext } from '@/contexts/uidContext'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import CustomDropdown from '../Common/DropDown'
import { useDispatch, useSelector } from 'react-redux'
import { setBookInfo } from '@/redux/authSlice'
import ImageUploader from './imageUploader'

const bookConditionDropDownOptions = [
  'Brand New',

  'Like New (Gently used, no issues)',
  'Fair (Some signs of usage)',

  'Include listings outside of my campus',
]

const BookDetails = ({ setActiveIndex,activeIndex }) => {
  const [selectedFiles, setSelectedFiles] = useState([])
 
  const { uid } = useUidContext()
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.bookInfo)
  const [selectedOption, setSelectedOption] = useState(data?.selectedOption)
  const [uploadedImages, setUploadedImages] = useState(data?.uploadedImages?data?.uploadedImages:[]);
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

  const onSave = async () => {
    setActiveIndex(1)
    console.log({ formDetails })
    dispatch(setBookInfo({ ...formDetails, selectedOption,uploadedImages }))
    //   const data = await firebaseAddBookDetails(formDetails, formDetails?.id)
  }

  const handleUpload = (image) => {
    setUploadedImages(prev => [...prev, image]);
  };

  const handleRemoveImage = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  console.log({ data }, 'redux Data')
  return (
    <div className="  grow shrink basis-0 justify-start  flex flex-col md:flex-row">
      <div className="flex-2">
        <div className="flex flex-col items-center  p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {uploadedImages?.map((image, index) => (
                <div key={index} className="relative">
                  <img src={image} alt={`Uploaded ${index}`} className="w-64" />
                  <span
                    className="absolute top-0 right-0 cursor-pointer bg-red-500 text-white"
                    onClick={() => handleRemoveImage(index)}
                  >
                    x
                  </span>
                </div>
              ))}
              {uploadedImages?.length < 5 && (
                <ImageUploader onUpload={handleUpload} />
              )}
            </div>
          </div>
      </div>

      <div className=" flex-3 grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Textbook Title
          </p>
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="Book Title"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            onChange={(e) =>
              setFormDetails((prev) => ({
                ...prev,
                title: e.target.value,
              }))
            }
            defaultValue={data?.title}
          />
        </div>
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Author
          </p>
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="Author"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            onChange={(e) =>
              setFormDetails((prev) => ({
                ...prev,
                author: e.target.value,
              }))
            }
            defaultValue={data?.author}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              ISBN
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              onChange={(e) =>
                setFormDetails((prev) => ({
                  ...prev,
                  isbn: e.target.value,
                }))
              }
              defaultValue={data?.isbn}
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Edition
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              onChange={(e) =>
                setFormDetails((prev) => ({
                  ...prev,
                  edition: e.target.value,
                }))
              }
              defaultValue={data?.edition}
            />
          </div>

          {/* Add other details as needed */}
        </div>
        <div className="detail w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Book Condition
          </p>
          <CustomDropdown
            options={bookConditionDropDownOptions}
            selectedOption={
              data?.selectedOption ? data?.selectedOption : selectedOption
            }
            setSelectedOption={setSelectedOption}
          />
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
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="Comments"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              onChange={(e) =>
                setFormDetails((prev) => ({
                  ...prev,
                  notes: e.target.value,
                }))
              }
              defaultValue={data?.notes}
            />
          </div>
        </div>

        {activeIndex == 0 && (
          <div className="flex justify-end w-full">
            <div
              onClick={onSave}
              className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
            >
              <div className={`text-white text-lg font-bold flex items-center`}>
                <div>Next</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default BookDetails
