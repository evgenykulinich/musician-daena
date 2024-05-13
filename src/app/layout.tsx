import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'

import './globals.scss'
import { translation } from '@/constants/translation'

const font = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: translation.page.layout.title,
  description: translation.page.layout.description
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
    <body className={ font.className }>{ children }</body>
    </html>
  )
}
