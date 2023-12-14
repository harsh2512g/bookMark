import { useState, useEffect, useContext, createContext } from 'react'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '@/firebase/app'

const authContext = createContext()

export function AuthProvider({ children }) {
  const authState = useProvideAuth()
  return (
    <authContext.Provider value={authState}>{children}</authContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
      } else {
        setUser(null)
      }
    })

    // Cleanup subscription on unmount
    return () => unsubscribe()
  }, [])

  return { user }
}
