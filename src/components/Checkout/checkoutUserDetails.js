'use client'
import React, { useState } from 'react'
import CartModal from '../Cart/cartModal'
import Button from '../Common/Button'

const CheckoutUserDetails = () => {
  const [formDetails, setFormDetails] = useState({
    name: '',
    email: '',
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    billingAddress: '',
    aptNumber: '',
    city: '',
    state: '',
    zipcode: '',
    saveCardDetails: false,
  })
  return (
    <div className="w-[0px] sm:w-[200px] md:w-[350px] lg:w-[800px]  grow shrink basis-0 justify-start items-center gap-10 flex">
      <div className=" grow shrink basis-0 flex-col justify-start items-start gap-3 inline-flex">
        <div className=" mb-8 text-zinc-800 text-lg font-bold font-['DM Sans'] leading-[27px]">
          Total: $105.00
        </div>
        <p className="text-lg text-zinc-800 mr-24 mb-8">
          Input card details to register textbook payment. Rest assured, we
          guarantee that the seller of the textbook holds your payment until the
          textbook is delivered.
        </p>

        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Name on Card
          </p>
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="User Name"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            //   onChange={(e) =>
            //     setUserDetails((prev) => ({
            //       ...prev,
            //       userName: e.target.value,
            //     }))
            //   }
          />
        </div>
        <div className="w-full">
          <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
            Email
          </p>
          <input
            id="orgName"
            name="orgName"
            type="orgName"
            autoComplete="orgName"
            placeholder="User Name"
            required
            className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
            //   onChange={(e) =>
            //     setUserDetails((prev) => ({
            //       ...prev,
            //       userName: e.target.value,
            //     }))
            //   }
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 ">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Card Number
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Expiration Date
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              CVC
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          {/* Add other details as needed */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Billing Address
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Apt/Unit Number
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
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
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
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
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          <div className="detail">
            <p className="text-zinc-800 text-sm font-medium ml-1 mb-2 mt-5">
              Zipcode
            </p>
            <input
              id="orgName"
              name="orgName"
              type="orgName"
              autoComplete="orgName"
              placeholder="User Name"
              required
              className=" w-full py-3 outline-none border border-stone-300 rounded-xl px-4 text-sm"
              //   onChange={(e) =>
              //     setUserDetails((prev) => ({
              //       ...prev,
              //       userName: e.target.value,
              //     }))
              //   }
            />
          </div>
          {/* Add other details as needed */}
        </div>
        <div className="mt-4">
          <input
            type="checkbox"
            className="rounded-sm transform scale-100 mr-2 mb-3 mt-2"
          />
          <label className="p-1">
            Save my card details for future payments{' '}
          </label>
        </div>
        <div className="flex justify-end w-full">
          <div
            // onClick={onClick}
            className={` bg-green-700 mt-4 cursor-pointer w-[160px] h-[40px] px-7 py-3 rounded-xl justify-center items-center gap-2.5 inline-flex`}
          >
            <div className={`text-white text-lg font-bold flex items-center`}>
              <div>checkout</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutUserDetails
