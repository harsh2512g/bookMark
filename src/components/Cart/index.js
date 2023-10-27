'use client'
import React, { useEffect, useState } from 'react'
import CartDashboard from './cart'
import CartModal from './cartModal'
import Cookies from 'js-cookie'
import { firebaseGetDoc, firebaseGetDocs } from '@/firebase/utils'

const Cart = () => {
  const uid = Cookies.get('bookMarkUid')
  const [cartData, setCartData] = useState()
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const data = await firebaseGetDocs('cartItems', 'cart_id', uid)
      setCartData(data)
      setLoading(false)
    }

    fetchData()
  }, [])
  console.log({ cartData, uid })
  return (
    <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">Your Cart</div>

      <div className="mt-11 md:flex">
        <div className="flex-3">
          <CartDashboard cartData={cartData} loading={loading} />
        </div>
        <div className="flex-2 mr-11 ">
          <CartModal cartData={cartData} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default Cart
