import { metaData } from '@/data/metadata'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: metaData.discography.title
}

export default function DiscographyLayout({ children }: { children: React.ReactNode }) {
  return children
}
