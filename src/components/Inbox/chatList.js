import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import db from '@/firebase/firebaseDB'
import { collection, onSnapshot, query, where } from 'firebase/firestore'
import { firebaseGetDoc } from '@/firebase/utils'
import Image from 'next/image'

function ChatRoomList({
  userId,
  conversationId,
  setConversationId,
  bookInfo,
  setBookInfo,
}) {
  const [conversations, setConversations] = useState([])

  const router = useRouter()

  useEffect(() => {
    if (userId) {
      const conversationsRef = collection(db, 'conversations')
      const q = query(
        conversationsRef,
        where('participants', 'array-contains', userId),
      )

      const unsubscribe = onSnapshot(q, async (snapshot) => {
        const data = snapshot.docs.map(async (doc) => {
          const docId = doc?.id
          const docData = doc.data()
          const orderData = await firebaseGetDoc('orders', docData?.orderId)
          const bookData = await firebaseGetDoc('books', orderData?.bookId)
          const userData = await firebaseGetDoc('users', bookData?.user_id)
          console.log({ orderData, bookData, userData })
          return { bookData, userData, docId }
        })
        const resolvedData = await Promise.all(data)
        setBookInfo(resolvedData)
        // setConversations(data)
      })

      return () => unsubscribe()
    }
  }, [userId])

  console.log({ conversations, bookInfo, userId })
  return (
    <div className="p-4">
      {/* {conversations.map((convo) => (
        <div key={convo.id} onClick={() => setConversationId(convo?.id)}>
          Chat Room {convo.id}
        </div>
      ))} */}
      {bookInfo?.map((book, i) => {
        return (
          <div
            className={`${
              conversationId == book?.docId ? 'bg-[#E5F0EA] rounded-xl' : ''
            } p-4 mt-8 cursor-pointer `}
            onClick={() => setConversationId(book?.docId)}
          >
            <div className="flex">
              {book?.userData?.photoURL && (
                <Image
                  src={book?.userData?.photoURL}
                  height={20}
                  width={29}
                  className=" rounded-full "
                  alt=""
                />
              )}
              <div className="ml-2">{book?.bookData?.title}</div>
            </div>
            <div className="ml-9">{book?.userData?.displayName}</div>
          </div>
        )
      })}
    </div>
  )
}

export default ChatRoomList
