import { index } from '@/translation'

export interface ISocial {
  title: string
  href: string
  img: string
}

export const socialList: ISocial[] = [
  {
    title: 'vk',
    href: index.socials.vk,
    img: index.icons.vk
  },
  {
    title: 'instagram',
    href: index.socials.inst,
    img: index.icons.inst
  },
  {
    title: 'youtube',
    href: index.socials.youtube,
    img: index.icons.youtube
  },
  {
    title: 'yandex.music',
    href: index.socials.yamusic,
    img: index.icons.yamusic
  },
  {
    title: 'spotify',
    href: index.socials.spotify,
    img: index.icons.spotify
  },
  {
    title: 'itunes',
    href: index.socials.itunes,
    img: index.icons.itunes
  }
]
