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


  console.log({  bookInfo, userId })
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
