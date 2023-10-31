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
  const [onRemoveClick, setOnRemoveClick] = useState(false)
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     const data = await firebaseGetDocs('cartItems', 'cart_id', uid)
  //     console.log({ data }, 'cartData')
  //     setCartData(data)
  //     setLoading(false)
  //   }

  //   fetchData()
  // }, [])

  useEffect(() => {
    const fetchData = async () => {
      const data = await firebaseGetDoc('users', uid)
      setCartData(data?.cart)
    }

    fetchData()
  }, [uid])
  console.log({ cartData, uid })
  return (
    <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">Your Cart</div>

      <div className="mt-11 md:flex">
        <div className="flex-3">
          {cartData?.map((d) => (
            <CartDashboard
              bookId={d}
              loading={loading}
              setOnRemoveClick={setOnRemoveClick}
            />
          ))}
        </div>
        <div className="flex-2 mr-11 ">
          <CartModal cartData={cartData} loading={loading} />
        </div>
      </div>
    </div>
  )
}

export default Cart
