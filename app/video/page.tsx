import { Header } from '@/components/header/Header'
import { Footer } from '@/components/footer/Footer'
import { metaData } from '@/data/metadata'
import { videos } from '@/data/videos'

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: metaData.video.title
}

export default function Video() {
  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header title="видео" />
      <section className="mb-4 mt-6 px-6 lg:mt-8 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-14">
          {videos.map(video => (
            <iframe
              className="aspect-video h-auto w-full overflow-hidden rounded-xl"
              src={video.href}
              key={video.href}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
