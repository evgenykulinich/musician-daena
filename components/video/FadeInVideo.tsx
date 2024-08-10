'use client'

import { clsx } from 'clsx'

interface Props {
  className?: string
  src: string
  title: string
}

export const FadeInVideo = ({ className, src, title }: Props) => {
  return (
    <iframe
      className={clsx('aspect-video h-auto w-full overflow-hidden rounded-xl', className)}
      src={src}
      title={title}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    />
  )
}
