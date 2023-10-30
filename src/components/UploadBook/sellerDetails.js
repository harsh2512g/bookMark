import { setBookInfo } from '@/redux/authSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SellerDetails = ({ setActiveIndex, activeIndex }) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.bookInfo)
  const [city, setCity] = useState(data?.city)
  const [state, setState] = useState(data.state)

  const onNext = () => {
    dispatch(setBookInfo({ ...data, city, state }))

    setActiveIndex(3)
  }

  console.log({ data }, 'onSeller')

  return (
    <>
      <div className="  grow shrink basis-0 justify-start  gap-10 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              City
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              onChange={(e) => setCity(e?.target.value)}
              //   defaultValue={data?.isbn}
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              State
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              onChange={(e) => setState(e.target.value)}
              //   defaultValue={data?.edition}
            />
          </div>

          {/* Add other details as needed */}
        </div>
      </div>
      {activeIndex == 2 && (
        <div className="flex justify-between w-full">
          <div
            onClick={() => setActiveIndex(1)}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>Back</div>
            </div>
          </div>
          <div
            onClick={onNext}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>Next</div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default SellerDetails
