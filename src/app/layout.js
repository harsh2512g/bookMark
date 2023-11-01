'use client'
import React from 'react'
import { FirebaseAuthProvider } from '@/contexts/firebaseAuthContext'
import 'swiper/swiper-bundle.css' // Make sure to import swiper CSS
import { UidProvider } from '@/contexts/uidContext'

import { Providers } from '@/redux/provider'
import { AuthProvider } from '@/contexts/authContext'

export default function AppLayout({ children }) {
  return (
    <html lang="en" className={`bg-white`}>
      <body className="flex flex-col">
        <AuthProvider>
          <Providers>
            <UidProvider>
              <FirebaseAuthProvider>{children}</FirebaseAuthProvider>
            </UidProvider>
          </Providers>
        </AuthProvider>
      </body>
    </html>
  )
}
