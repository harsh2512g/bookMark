'use client'
import React from 'react'
import { FirebaseAuthProvider } from '@/contexts/firebaseAuthContext'
import 'swiper/swiper-bundle.css' // Make sure to import swiper CSS
import { UidProvider } from '@/contexts/uidContext'
import { createWrapper } from 'next-redux-wrapper'

import { Providers } from '@/redux/provider'

export const metadata = {
  title: 'Main root of the Project',
  description: 'Main root description of the Project',
}
export default function AppLayout({ children }) {
  return (
    <html lang="en" className={`bg-white`}>
      <body className="flex flex-col">
        <Providers>
          <UidProvider>
            <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
          </UidProvider>
        </Providers>
      </body>
    </html>
  )
}
