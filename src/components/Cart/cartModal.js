import React from 'react'
import Button from '../Common/Button'

const CartModal = ({ price, onCheckout }) => {
  return (
    <div className="shadow-lg w-[350px] md:w-[400px] mt-11 ">
      <p className="font-bold text-xl text-center border-b-2 border-stone-300 pb-6 px-2">
        1 item in cart
      </p>
      <div>
        <div className="flex justify-between px-10 mt-8">
          <p className="font-bold text-lg">Subtotal:</p>
          <p>${price}</p>
        </div>
        <div className="flex justify-between px-10 mt-8">
          <p className="font-bold text-lg">Sales tax (5%):</p>
          <p>$5</p>
        </div>
        <div className="flex justify-between px-10 mt-8">
          <p className="font-bold text-lg">Pickup (free):</p>
          <p>Noida, UP</p>
        </div>
        <div className="flex justify-between px-10 mt-8">
          <p className="font-bold text-lg">Total:</p>
          <p>${price + 5}</p>
        </div>
        <p className="mt-10 w-[309px] mx-auto text-neutral-500 text-sm ">
          After purchasing through BM, the buyer will reach out to you to
          arrange a meeting time.
        </p>
        <div className="text-center" onClick={onCheckout}>
          <Button text={'Checkout'} />
        </div>
        <p className="text-center px-8 py-4 text-green-900 text-sm font-normal ">
          You’re saving 20% compared to buying brand new (usually $70)!
        </p>
      </div>
    </div>
  )
}

export default CartModal
