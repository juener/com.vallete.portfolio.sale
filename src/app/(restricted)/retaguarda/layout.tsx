import '@/app/style/globals.css'  
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Retaguarda >> Cadastro | Sistema PDV',
  description: 'Retaguarda >> Cadastro | Sistema PDV',
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
