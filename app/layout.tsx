import { Montserrat_Alternates } from 'next/font/google'

import './globals.css'
import Providers from '@/components/progress/ProgressBar'
import { metaData } from '@/data/metadata'

import type { Metadata, Viewport } from 'next'

const font = Montserrat_Alternates({
  subsets: ['cyrillic', 'latin'],
  weight: ['400', '700']
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
  themeColor: 'black'
}

export const metadata: Metadata = {
  title: {
    default: metaData.layout.title,
    template: `даена • %s`
  },
  description: metaData.layout.description,
  metadataBase: new URL(metaData.layout.baseUrl),
  keywords: [
    'даена',
    'даена малх',
    'даена костёр',
    'даена костер',
    'даена я по тебе скучаю',
    'даена горы',
    'даена душа',
    'даена ветер',
    'даена дом',
    'даена песни',
    'даена артист',
    'даена певица',
    'даена биография',
    'даена eastwest',
    'даена дискография',
    'даена видео',
    'даена цацаева',
    'даена tumaniyo',
    'даена малх',
    'даена rhita nattah',
    'даена слушать',
    'даена слушат онлайн',
    'даена скачать песни',
    'даена троеточие',
    'даена mp3',
    'даена яндекс музыка',
    'даена спотифай',
    'даена spotify',
    'даена вк',
    'даена вконтакте',
    'даена инстаграм',
    'даена видео'
  ],
  openGraph: {
    images: [
      {
        url: '/opengraph-image.jpg'
      }
    ]
  }
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
