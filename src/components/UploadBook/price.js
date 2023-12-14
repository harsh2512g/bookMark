import { setBookInfo } from '@/redux/authSlice'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Price = ({
  setActiveIndex,
  activeIndex,
  errors,
  handleSubmit,
  register,
  onSubmit,
  isDisabled
}) => {
  const dispatch = useDispatch()
  const data = useSelector((state) => state?.bookInfo)

  const [price, setPrice] = useState(data?.price)

  const onNext = () => {
    if (!price) {
      //setErrors({...errors,price:true})
      return
    } else {
      dispatch(setBookInfo({ ...data, price }))
      setActiveIndex(2)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="  grow shrink basis-0 justify-start  gap-10 flex flex-col md:flex-row">
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Price
          </p>
          <p className="text-zinc-800 text-sm font-normal py-4 ">
            For your consideration, the average price of this book on the market
            right now is: _______. Please select a price that most fairly
            represents the value and condition of the textbook.:
          </p>
          <input
            {...register('price')}
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            defaultValue={data?.price}
            disabled={isDisabled}
          />
          <p className="text-zinc-800 text-sm font-normal py-4 ">
            To increase your chances of selling, we are also allowing buyers to
            make an offer on your listing. If you would like to allow that
            feature, check this box:
          </p>
          {errors?.price && (
            <p className="text-sm text-red-600">Please fill this field</p>
          )}
        </div>
      </div>
      {activeIndex === 1 && (
        <div className="flex justify-between w-full">
          <div
            onClick={() => setActiveIndex(0)}
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

export default Price
