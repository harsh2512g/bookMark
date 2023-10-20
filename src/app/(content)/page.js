'use client'
import { useUidContext } from '@/contexts/uidContext'
import { Hero, About, Features } from '../../components/Layout/home'
import Cookies from 'js-cookie'

export default function Home() {
  const { uid, setUid } = useUidContext()
  setUid(Cookies.get('bookMarkUid'))
  return (
    <div
      className="w-[100%]"
      style={{
        minHeight: '100vh',

        maxWidth: '100vw',
      }}
    >
      <Hero />
      <About />
      <Features />
    </div>
  )
}
