import React from 'react'
import CartModal from '../Cart/cartModal'
import CheckoutUserDetails from './checkoutUserDetails'

const Checkout = () => {
  return (
    <div className="  max-w-7xl   mt-[-9%] xl:mt-[10%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold mb-10">Checkout</div>

      <div className="mt-11 flex items-start justify-between">
        <div>
          <CheckoutUserDetails />
        </div>
        <div className="flex-2  ">
          <CartModal />
        </div>
      </div>
    </div>
  )
}

export default Checkout
