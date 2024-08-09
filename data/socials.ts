export interface ISocial {
  href: string
  src: string
  alt: string
  text: string
}

export const socialLinks = {
  vk: 'https://vk.com/daethisyou',
  instagram: 'https://www.instagram.com/whosdaena/',
  youtube: 'https://www.youtube.com/@whosdaena',
  yamusic: 'https://music.yandex.ru/artist/8979279',
  spotify: 'https://open.spotify.com/artist/65J0xSmKmX3ENY7JYyTAUQ',
  itunes: 'https://music.apple.com/ru/artist/%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1553607758'
}

export const socialIcons = {
  vk: '/socials/vk.svg',
  instagram: '/socials/instagram.svg',
  youtube: '/socials/youtube.svg',
  yamusic: '/socials/yamusic.svg',
  spotify: '/socials/spotify.svg',
  itunes: '/socials/itunes.svg',
  deezer: '/socials/deezer.png',
  mts: '/socials/mts.png'
}

export const streaming = {
  vk: 'VK Music',
  youtube: 'YouTube',
  yamusic: 'Яндекс.Музыка',
  spotify: 'Spotify',
  itunes: 'iTunes',
  deezer: 'Deezer',
  mts: 'MTC Музыка'
}

export const socialsList: ISocial[] = [
  {
    href: socialLinks.vk,
    src: socialIcons.vk,
    alt: 'vk',
    text: 'ВКонтакте'
  },
  {
    href: socialLinks.instagram,
    src: socialIcons.instagram,
    alt: 'instagram',
    text: 'Instagram'
  },
  {
    href: socialLinks.youtube,
    src: socialIcons.youtube,
    alt: 'youtube',
    text: 'YouTube'
  },
  {
    href: socialLinks.yamusic,
    src: socialIcons.yamusic,
    alt: 'yamusic',
    text: 'Я.Музыка'
  },
  {
    href: socialLinks.spotify,
    src: socialIcons.spotify,
    alt: 'spotify',
    text: 'Spotify'
  },
  { href: socialLinks.itunes, src: socialIcons.itunes, alt: 'itunes', text: 'Itunes' }
]
