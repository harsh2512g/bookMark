import '../globals.css'
import { Header, Footer } from '@/components/Layout'

export const metadata = {
  description: 'Generated by create next app',
  title: 'Create Next App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
