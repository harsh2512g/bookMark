'use client'
import React, { createContext, useContext, useState } from 'react'

import { ToastContainer } from 'react-toastify'
export const UidContext = createContext()
export const UidProvider = ({ children }) => {
  const [uid, setUid] = useState('')

  console.log(uid, 'iii')

  return (
    <UidContext.Provider value={{ uid, setUid }}>
      {children}
      <ToastContainer />
    </UidContext.Provider>
  )
}
export const useUidContext = () => {
  return useContext(UidContext)
}
