'use client'
import db from '@/firebase/firebaseDB'
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore'
import Cookies from 'js-cookie'
import React, { useEffect, useState } from 'react'
import ChatRoom from './chatRoom'
import ChatRoomList from './chatList'

const Inbox = () => {
  const sellerId = Cookies.get('bookMarkUid')
  const buyerId = 'BLavfNgvPpbHjiSkdFBJUmhqEjX2'
  const [conversationId, setConversationId] = useState()
  //   async function initiateOrGetConversation() {
  //     // Create a compound field for the participant pair
  //     const participantPair = [buyerId, sellerId].sort().join('_')
  //     console.log({ participantPair })
  //     // Check if a conversation already exists for this pair
  //     const conversationsRef = collection(db, 'conversations')
  //     const q = query(
  //       conversationsRef,
  //       where('participantPair', '==', participantPair),
  //     )

  //     const existingConvo = await getDocs(q)

  //     let conversationId1
  //     if (existingConvo.empty) {
  //       // If conversation doesn't exist, create a new one
  //       const newConvoRef = await addDoc(conversationsRef, {
  //         participants: [buyerId, sellerId],
  //         participantPair: participantPair,
  //       })
  //       conversationId1 = newConvoRef.id
  //     } else {
  //       conversationId1 = existingConvo.docs[0].id
  //     }

  //     setConversationId(conversationId1)
  //   }
  //   useEffect(() => {
  //     initiateOrGetConversation()
  //   }, [])
  console.log({ conversationId })
  return (
    <div className="min-h-[calc(100vh-490px)] p-5 md:p-10 max-w-7xl py-10 sm:py-28 lg:py-30  mt-[18%] lg:mt-[9%] xl:mt-[6%] w-full mx-auto">
     
      <div className="border border-stone-300 rounded-xl p-6">
        <ChatRoomList
          userId={sellerId}
          setConversationId={setConversationId}
          conversationId={conversationId}
        />
      </div>
      <div className="border border-stone-300 rounded-xl p-6">
        <ChatRoom conversationId={conversationId} userId={sellerId} />
      </div>
    </div>
  )
}

export default Inbox
