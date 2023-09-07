import Header from '@components/components/header/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@components/components/footer/footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: `NRI's help`,
  description: 'Support for nri',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}
        <Footer />
      </body>
    </html>
  )
}
