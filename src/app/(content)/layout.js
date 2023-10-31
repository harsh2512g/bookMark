'use client'

import '../globals.css'
import { Header, Footer } from '@/components/Layout'
import { usePathname } from 'next/navigation'
import 'react-toastify/dist/ReactToastify.css'


export default function ContentRootLayout({ children }) {
  const pathName = usePathname()
  return (
    <>
      {['/confirmSignUp'].includes(pathName) ? null : <Header />}
      {children}
      {['/confirmSignUp'].includes(pathName) ? null : <Footer />}
    </>
  )
}
