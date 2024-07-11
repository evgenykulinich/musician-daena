import { socialIcons } from '@/data/socials'

interface IStream {
  title: string
  icon: string
  href: string
}

interface IRelease {
  cover: string
  release: string
  title: string
  artist: string
  year: number
  streams: IStream[]
}

const releaseType = {
  single: 'Single',
  album: 'Album',
  feat: 'feat',
  ep: 'EP'
}

export const releases: IRelease[] = [
  {
    cover: 'melanholiya.avif',
    release: releaseType.feat,
    title: 'Меланхолия',
    artist: 'TumaniYO, даена',
    year: 2024,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://www.youtube.com/watch?v=I5iA-krQbVQ'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/26424655'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/album/6uAC3yrhJUjQl2bY3yniy8?si=mP_iZhM9S2u4Te-a9awwzA'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/eastwest/1694404422'
      }
    ]
  },
  {
    cover: 'eastwest.avif',
    release: releaseType.album,
    title: 'eastwest',
    artist: 'даена',
    year: 2023,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtube.com/playlist?list=OLAK5uy_nDN4Mkmze-nk9eJIExFkKoRQmw4D_PQ28&si=D3EhDZPF1UBXnqHv'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/26424655'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/album/6uAC3yrhJUjQl2bY3yniy8?si=mP_iZhM9S2u4Te-a9awwzA'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/eastwest/1694404422'
      }
    ]
  },
  {
    cover: 'malh.avif',
    release: releaseType.single,
    title: 'малх',
    artist: 'даена',
    year: 2023,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtu.be/xKB6v1iu3j0?si=V3s63jcQebTvyHhK'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/25080876/track/111920647'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/track/2LPxS15IPXjIPkqm2z1EpE?si=4060d83567fb47da'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/%D0%BC%D0%B0%D0%BB%D1%85/1675066036?i=1675066524'
      }
    ]
  },
  {
    cover: 'truth.avif',
    release: releaseType.feat,
    title: 'Truth',
    artist: 'Rhita Nattah, даена',
    year: 2023,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtu.be/x0hlK5CAGms?si=VUhGzXAM4lGL-yOr'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/24376930/track/109995076'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/track/2i2YLmxzR2vJeX1K43dO8k?si=897ea2bd69ca4a20'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/truth/1660029772?i=1660029777'
      }
    ]
  },
  {
    cover: 'sberech.avif',
    release: releaseType.feat,
    title: 'Сберечь меня',
    artist: 'Tamara, даена',
    year: 2022,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtu.be/PfpAN5lQ9p4?si=22Bt4D9O5ok6wZVL'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/21282524/track/101080715'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/track/5stWBwyLPlmB2CJ4idmcOf?si=495653d902ee4ca1'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/%D1%81%D0%B1%D0%B5%D1%80%D0%B5%D1%87%D1%8C-%D0%BC%D0%B5%D0%BD%D1%8F-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1609583546?i=1609583960'
      }
    ]
  },
  {
    cover: 'ivory.avif',
    release: releaseType.feat,
    title: 'Ivory',
    artist: 'Ollane, даен',
    year: 2022,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtu.be/8vK-mtl-O9M?si=tMysyvDKuJrszkZV'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/21343596/track/101295190'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/track/6qFSPrbOzbPkRAteoagxzp?si=7a2552b8962244a4'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/ivory-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1608930924?i=1608931155'
      }
    ]
  },
  {
    cover: 'caucasiankid.avif',
    release: releaseType.ep,
    title: 'caucasian kid',
    artist: 'даена',
    year: 2021,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtube.com/playlist?list=OLAK5uy_lRHsAIx8qnxm-YhQKKDiB97x_VdFRdSAk&si=_kX7GA0rL-aUjfxB'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/17444327'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/album/63T51ZQEAUeyPjVPArpUtb?si=pe4dKXHRTXSCSJu2ppEYdg'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/caucasian-kid-ep/1580963063'
      }
    ]
  },
  {
    cover: 'troetochie.avif',
    release: releaseType.single,
    title: 'троеточие',
    artist: 'даена',
    year: 2021,
    streams: [
      {
        title: 'youtube',
        icon: socialIcons.youtube,
        href: 'https://youtu.be/O1JKRpZu_Vs?si=OUwldIIGmezJZeum'
      },
      {
        title: 'yamusic',
        icon: socialIcons.yamusic,
        href: 'https://music.yandex.ru/album/13890481/track/77984344'
      },
      {
        title: 'spotify',
        icon: socialIcons.spotify,
        href: 'https://open.spotify.com/track/69NhMUsE5R8sKjyHWR4Pzl?si=b1c0d5768ee8495c'
      },
      {
        title: 'itunes',
        icon: socialIcons.itunes,
        href: 'https://music.apple.com/ru/album/%D1%82%D1%80%D0%BE%D0%B5%D1%82%D0%BE%D1%87%D0%B8%D0%B5/1553607757'
      }
    ]
  }
]
