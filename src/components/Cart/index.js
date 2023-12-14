'use client'
import React, { useEffect, useState } from 'react'
import CartDashboard from './cart'
import CartModal from './cartModal'
import Cookies from 'js-cookie'
import {
  firebaseAddOrderDetails,
  firebaseGetDoc,
  firebaseGetDocs,
  initiateOrGetConversation,
} from '@/firebase/utils'
import { v4 as uuidv4 } from 'uuid'

const Cart = () => {
  const uid = Cookies.get('bookMarkUid')
  const [cartData, setCartData] = useState()
  const [loading, setLoading] = useState(false)
  const [onRemoveClick, setOnRemoveClick] = useState(false)
  const [price, setPrice] = useState(0)
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

  const onCheckout = async () => {
    console.log({ cartData })
    cartData.map(async (d) => {
      const order = {
        id: uuidv4(),
        bookId: d,
        user_id: uid,
        created_at: new Date(),
      }
      const book = await firebaseGetDoc('books', d)
      console.log({ book })
      const res = await firebaseAddOrderDetails(order, order?.id)
      const data = await initiateOrGetConversation(
        uid,
        book?.user_id,
        order?.id,
      )
      console.log({ res })
    })
    // await firebaseAddOrderDetails(updatedUserData)
  }

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      let pr = 0
      const data = await firebaseGetDoc('users', uid)
      data?.cart.map(async (d) => {
        const book = await firebaseGetDoc('books', d)
        pr += parseInt(book?.price)
        setPrice(pr)
        console.log({ book, price })
      })
      setCartData(data?.cart)
      setLoading(false)
    }

    fetchData()
  }, [uid])

  return (
    <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] bg-center bg-no-repeat w-full mx-auto">
      <div className=" text-zinc-900 text-3xl font-bold">Your Cart</div>

      {cartData?.length > 0 ? (
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
            <CartModal price={price} onCheckout={onCheckout} />
          </div>
        </div>
      ) : (
        <div className="mt-11 text-center font-bold text-lg">
          {' '}
          I think u don't like to read books{' '}
        </div>
      )}
    </div>
  )
}

export default Cart
