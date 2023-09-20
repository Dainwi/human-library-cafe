// import Header from '@/components/Header'
import Header from '../components/Header'
import Footer from '../components/Footer'
import './globals.css'
// import { Inter } from 'next/font/google'

// const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Poppins" rel="stylesheet" />
      </head>
      <body>
        <Header />
        {children}
        <Footer/>
      </body>
    </html>
  )
}
