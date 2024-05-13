import { translation } from '@/constants/translation'

export interface ISocial {
  title: string
  href: string
  img: string
}

export const socialList: ISocial[] = [
  {
    title: 'vk',
    href: translation.socials.vk,
    img: translation.icons.vk
  },
  {
    title: 'instagram',
    href: translation.socials.inst,
    img: translation.icons.inst
  },
  {
    title: 'youtube',
    href: translation.socials.youtube,
    img: translation.icons.youtube
  },
  {
    title: 'yandex.music',
    href: translation.socials.yamusic,
    img: translation.icons.yamusic
  },
  {
    title: 'spotify',
    href: translation.socials.spotify,
    img: translation.icons.spotify
  },
  {
    title: 'itunes',
    href: translation.socials.itunes,
    img: translation.icons.itunes
  }
]
