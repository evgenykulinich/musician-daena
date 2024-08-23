'use client'

import { clsx } from 'clsx'
import Image from 'next/image'

interface Props {
  className?: string
  src: string
  alt: string
  height: number
  width: number
}

export const FadeInImage = ({ className, src, alt, height, width }: Props) => {
  return (
    <Image
      className={clsx('opacity-0 transition-all duration-500', className)}
      src={src}
      alt={alt}
      width={width}
      height={height}
      onLoad={e => ((e.target as HTMLImageElement).style.opacity = '1')}
      priority
    />
  )
}
