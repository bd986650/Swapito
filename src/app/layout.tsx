import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/widgets/header/Header'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}