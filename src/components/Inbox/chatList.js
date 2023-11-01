import React, { useState, useEffect } from 'react'

import { useRouter } from 'next/navigation'
import db from '@/firebase/firebaseDB'
import { collection, onSnapshot, query, where } from 'firebase/firestore'

function ChatRoomList({ userId, conversationId, setConversationId }) {
  const [conversations, setConversations] = useState([])
  const router = useRouter()

  useEffect(() => {
    if (userId) {
      const conversationsRef = collection(db, 'conversations')
      const q = query(
        conversationsRef,
        where('participants', 'array-contains', userId),
      )

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }))
        setConversations(data)
      })

      return () => unsubscribe()
    }
  }, [userId])

  return (
    <div>
      {conversations.map((convo) => (
        <div key={convo.id} onClick={() => setConversationId(convo?.id)}>
          Chat Room {convo.id}
        </div>
      ))}
    </div>
  )
}

export default ChatRoomList
