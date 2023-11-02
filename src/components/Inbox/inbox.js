'use client'
import db from '@/firebase/firebaseDB'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import ChatRoom from './chatRoom'
import ChatRoomList from './chatList'
import OrderDetails from './orderDetails'

const Inbox = () => {
  const sellerId = Cookies.get('bookMarkUid')
  const buyerId = 'BLavfNgvPpbHjiSkdFBJUmhqEjX2'

  const [bookInfo, setBookInfo] = useState()
  const [conversationId, setConversationId] = useState()
  const [selectedChatBookInfo, setSelectedChatBookInfo] = useState()

  useEffect(() => {
    const data = bookInfo?.filter((d) => d?.docId === conversationId)
    setSelectedChatBookInfo(data && data[0])
  }, [bookInfo, conversationId])
  useEffect(() => {
    !conversationId && setConversationId(bookInfo && bookInfo[0]?.docId)
  }, [bookInfo])
  console.log({ conversationId, selectedChatBookInfo, bookInfo })
  return (
    <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] w-full mx-auto">
      <div class="grid md:grid-cols-5 lg:grid-cols-7 gap-4 ">
        <div class="col-span-2  ">
          <p>Messages</p>
          <div className="border border-stone-300 rounded-lg">
            <ChatRoomList
              userId={sellerId}
              setConversationId={setConversationId}
              conversationId={conversationId}
              bookInfo={bookInfo}
              setBookInfo={setBookInfo}
            />
          </div>
        </div>

        <div class="col-span-3 ">
          <p>Conversation</p>
          <div className="border border-stone-300 rounded-lg h-[600px] relative">
            <ChatRoom
              conversationId={conversationId}
              userId={sellerId}
              selectedChatBookInfo={selectedChatBookInfo}
            />
          </div>
        </div>
        <div class="md:col-span-5 lg:col-span-2  ">
          <p>Order Details</p>
          <div className="border border-stone-300 rounded-lg ">
            <OrderDetails selectedBookInfo={selectedChatBookInfo} />
          </div>
        </div>
      </div>
      {/* <div className="border border-stone-300 rounded-xl p-6">
        <ChatRoomList
          userId={sellerId}
          setConversationId={setConversationId}
          conversationId={conversationId}
        />
      </div>
      <div className="border border-stone-300 rounded-xl p-6">
        <ChatRoom conversationId={conversationId} userId={sellerId} />
      </div> */}
    </div>
  )
}

export default Inbox
