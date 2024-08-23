'use client'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { FadeInVideo } from '@/components/video/FadeInVideo'
import { videos } from '@/data/videos'
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll'

export default function Video() {
  useLocomotiveScroll()

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header title="видео" />
      <section className="mb-4 mt-6 px-6 lg:mt-8 lg:px-8">
        <div className="flex flex-col gap-8 lg:gap-14">
          {videos.map(video => (
            <FadeInVideo
              className="aspect-video h-auto w-full overflow-hidden rounded-xl"
              src={video.href}
              key={video.href}
              title="YouTube video player"
            />
          ))}
        </div>
      </section>
      <Footer />
    </div>
  )
}
