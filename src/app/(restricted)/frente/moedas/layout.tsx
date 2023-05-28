import '@/app/style/globals.css'  
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'Fundo de Caixa | Sistema PDV',
  description: 'Fundo de Caixa | Sistema PDV',
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
