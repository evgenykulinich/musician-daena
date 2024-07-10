import type { Metadata } from 'next'
import { Montserrat_Alternates } from 'next/font/google'

import './globals.css'
import { metaData } from '@/translation'

const font = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: metaData.layout.title,
  description: metaData.layout.description,
  metadataBase: new URL(metaData.layout.baseUrl),
  openGraph: {
    images: [
      {
        url: '/opengraph-image.jpg'
      }
    ]
  }
}

export default function RootLayout({ children }:
  Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
    <body className={ font.className }>
    { children }
    </body>
    </html>
  )
}
