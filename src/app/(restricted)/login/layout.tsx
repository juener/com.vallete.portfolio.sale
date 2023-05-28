import '@/app/style/globals.css'  
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Login | Sistema PDV',
  description: 'Login | Sistema PDV',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
