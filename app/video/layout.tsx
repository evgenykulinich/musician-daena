import { metaData } from '@/data/metadata'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: metaData.video.title
}

export default function VideoLayout({ children }: { children: React.ReactNode }) {
  return children
}
