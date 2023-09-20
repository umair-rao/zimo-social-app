
import './globals.css'
import { Inter } from 'next/font/google'
import { AuthContextProvider } from './context/AuthContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Zimo Soical App',
  description: 'Soical app for user to post and like other users posts',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthContextProvider>
        {children}
        </AuthContextProvider>
        </body>
    </html>
  )
}
