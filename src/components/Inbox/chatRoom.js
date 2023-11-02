import React, { useState, useEffect } from 'react'

import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import db from '@/firebase/firebaseDB'
import { PaperPlaneRight } from '@phosphor-icons/react'
import { firebaseGetDoc } from '@/firebase/utils'

function ChatRoom({ conversationId, userId, selectedChatBookInfo }) {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  console.log({ conversationId })
  useEffect(() => {
    if (conversationId) {
      const messagesRef = collection(
        db,
        'conversations',
        conversationId,
        'messages',
      )
      const q = query(messagesRef, orderBy('timestamp', 'asc'))

      const unsubscribe = onSnapshot(q, async (snapshot) => {
        const data = snapshot.docs.map(async (doc) => {
          const messageData = doc.data()
          const userData = await firebaseGetDoc('users', messageData?.senderId)
          return { messageData, userData }
        })
        const resolvedData = await Promise.all(data)
        console.log({ resolvedData })
        setMessages(resolvedData)
      })

      return () => unsubscribe()
    }
  }, [conversationId])

  const sendMessage = async () => {
    console.log('db:', db) // Check if db is defined
    console.log('conversationId:', conversationId)
    if (input) {
      const messagesRef = collection(
        db,
        'conversations',
        conversationId,
        'messages',
      )
      await addDoc(messagesRef, {
        senderId: userId,
        text: input,
        timestamp: new Date(), // Use server timestamp in production
      })
      setInput('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      sendMessage()
    }
  }

  const messageTime = (firestoreTimestamp) => {
    const date = new Date(firestoreTimestamp.seconds * 1000)

    // Format the time as "2:35 PM"
    const formattedTime = date.toLocaleTimeString([], {
      hour: 'numeric',
      minute: '2-digit',
      hour12: true,
    })
    return formattedTime
  }
  console.log([messages])
  return (
    <div className="p-6">
      <p className="mb-8 border-b-2 border-stone-300 pb-3 text-zinc-800 text-2xl font-bold ">
        {selectedChatBookInfo?.bookData?.title}
      </p>
      <div>
        {messages.map((message, index) => (
          <div
            key={index}
            className={
              message?.messageData?.senderId === userId ? 'sent ' : 'received'
            }
          >
            <p>
              <span className="text-neutral-500 text-sm font-normal">
                {' '}
                {message.messageData?.senderId === userId &&
                  messageTime(message?.messageData?.timestamp)}&nbsp;
                
              </span>
              <span className="text-zinc-800 text-lg font-bold">
                {message.messageData?.senderId === userId
                  ? 'You'
                  : message?.userData?.displayName}
                &nbsp;
              </span>

              <span className="text-neutral-500 text-sm font-normal">
                &nbsp;
                {message.messageData?.senderId !== userId &&
                  messageTime(message?.messageData?.timestamp)}{' '}
              </span>
            </p>

            {message?.messageData?.text}
          </div>
        ))}
      </div>
      <div className="absolute flex items-center p-2 bottom-0 w-[90%] mb-8 rounded-full border border-stone-300 outline-none">
        <input
          id="message"
          name="message"
          type="text"
          autoComplete="message"
          placeholder="Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyPress}
          className="border-none outline-none w-full "
        />
        <PaperPlaneRight
          onClick={sendMessage}
          size={22}
          weight="fill"
          color="green"
        />
      </div>
    </div>
  )
}

export default ChatRoom
