import { setBookInfo } from '@/redux/authSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const SellerDetails = ({
  setActiveIndex,
  activeIndex,
  errors,
  handleSubmit,
  register,
  onSubmit,
  isDisabled
}) => {
  

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="  grow shrink basis-0 justify-start  gap-10 flex flex-col md:flex-row">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              City
            </p>
            <input
              {...register('city')}
              id="city"
              name="city"
              type="text"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //defaultValue={data?.city}
              disabled={isDisabled}
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              State
            </p>
            <input
              {...register('state')}
              id="state"
              name="state"
              type="text"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //defaultValue={data?.state}
              disabled={isDisabled}
            />
          </div>
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
          <button
            type="submit"
            //onClick={onNext}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>Next</div>
            </div>
          </button>
        </div>
      )}
    </form>
  )
}

export default SellerDetails
