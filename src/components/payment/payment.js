import React from 'react'
import BooksContent from '../allTextBooks/booksContent'
import CartDashboard from '../Cart/cart'
import CartModal from '../Cart/cartModal'

const Payment = () => {
  return (
    <div className=" p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[-9%] xl:mt-[4%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">Your Cart</div>

      <div className="mt-11 flex">
        <div className="flex-3">
          <CartDashboard />
        </div>
        <div className="flex-2 mr-11">
          <CartModal />
        </div>
      </div>
    </div>
  )
}

export default Payment
