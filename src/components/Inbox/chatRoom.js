import React, { useState, useEffect } from 'react'

import {
  collection,
  addDoc,
  onSnapshot,
  orderBy,
  query,
} from 'firebase/firestore'
import db from '@/firebase/firebaseDB'

function ChatRoom({ conversationId, userId }) {
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

      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map((doc) => doc.data()))
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

  return (
    <div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.senderId === userId ? 'You' : 'Other'}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <div>
        <input
          id="orgName"
          name="orgName"
          type="text"
          autoComplete="orgName"
          placeholder="Message"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  )
}

export default ChatRoom
