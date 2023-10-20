// pages/index.js
'use client'
import { useUidContext } from '@/contexts/uidContext'
import { firebase, firestore } from '@/firebase'
import { firebaseAddBookDetails } from '@/firebase/auth/signup'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export default function UploadPhoto() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const { uid } = useUidContext()

  const [formDetails, setFormDetails] = useState({
    id: uuidv4(),
    title: '',
    user_id: uid,
    author: '',
    isbn: '',
    price: null,
    edition: '',
    notes: '',
    created_at: new Date(),
    updated_at: new Date(),
  })

  const handleFileChange = (e) => {
    if (e.target.files) {
      const filesArray = Array.from(e.target.files).map((file) =>
        URL.createObjectURL(file),
      )
      setSelectedFiles((prevImages) => prevImages.concat(filesArray))
      Array.from(e.target.files).map((file) => URL.revokeObjectURL(file))
    }
  }

  const onSave = async () => {
    console.log({ formDetails })
    const data = await firebaseAddBookDetails(formDetails, formDetails?.id)
    console.log({ data })
  }
  console.log({ selectedFiles })
  return (
    <div className="  max-w-7xl   mt-[-9%] xl:mt-[10%] bg-center bg-no-repeat w-full mx-auto">
      <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[800px]  grow shrink basis-0 justify-start items-center gap-10 flex">
        <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
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
            />
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
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
              />
            </div>
            <div className="detail">
              <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
                Book Condition
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
                    bookCondition: e.target.value,
                  }))
                }
              />
            </div>
            {/* Add other details as needed */}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
            <div className="detail">
              <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
                Comments
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
              />
            </div>
            <div className="detail">
              <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
                Price
              </p>
              <input
                id="orgName"
                name="orgName"
                type="orgName"
                autoComplete="orgName"
                placeholder="Price"
                required
                className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
                onChange={(e) =>
                  setFormDetails((prev) => ({
                    ...prev,
                    price: e.target.value,
                  }))
                }
              />
            </div>
          </div>

          <div className="flex justify-end w-full">
            <div
              onClick={onSave}
              className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
            >
              <div className={`text-white text-lg font-bold flex items-center`}>
                <div>Save</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
