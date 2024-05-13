import type { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import { Release } from '@/components/release/page'

export const metadata: Metadata = {
  title: translation.page.discography.title,
  description: translation.page.discography.description
}

export default function DiscographyPage() {
  return (
    <main className={ styles.main }>
      <div className={ styles.container }>
        <Link
          className={ styles.artist }
          href={ translation.page.main.path }
        >
          { translation.page.discography.artist }
        </Link>
        <span className={ styles.tag }>{ translation.page.discography.tag }</span>
      </div>
      <div className={ styles.wrapper }>
        <div className={ `${ styles.container } ${ styles.discography }` }>
          <Release
            filename={ translation.cover.melanholiya }
            release={ translation.release.feat }
            title="Меланхолия"
            artist="TumaniYO, даена"
            year={ 2024 }
            youtube="https://youtu.be/I5iA-krQbVQ?si=caYVu6V8ZwF9QLZp"
            yamusic="https://music.yandex.ru/album/30176663/track/123515273"
            spotify="https://open.spotify.com/track/206MrFKy7BNO3GhHKBvjDV?si=3b2099a6c92944ce"
            itunes="https://music.apple.com/ru/album/%D0%BC%D0%B5%D0%BB%D0%B0%D0%BD%D1%85%D0%BE%D0%BB%D0%B8%D1%8F-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1735269739?i=1735269745"
          />

          <Release
            filename={ translation.cover.eastwest }
            release={ translation.release.album }
            title="eastwest"
            artist="даена"
            year={ 2023 }
            youtube="https://youtube.com/playlist?list=OLAK5uy_nDN4Mkmze-nk9eJIExFkKoRQmw4D_PQ28&si=D3EhDZPF1UBXnqHv"
            yamusic="https://music.yandex.ru/album/26424655"
            spotify="https://open.spotify.com/album/6uAC3yrhJUjQl2bY3yniy8?si=mP_iZhM9S2u4Te-a9awwzA"
            itunes="https://music.apple.com/ru/album/eastwest/1694404422"
          />

          <Release
            filename={ translation.cover.malh }
            release={ translation.release.single }
            title="малх"
            artist="даена"
            year={ 2023 }
            youtube="https://youtu.be/xKB6v1iu3j0?si=V3s63jcQebTvyHhK"
            yamusic="https://music.yandex.ru/album/25080876/track/111920647"
            spotify="https://open.spotify.com/track/2LPxS15IPXjIPkqm2z1EpE?si=4060d83567fb47da"
            itunes="https://music.apple.com/ru/album/%D0%BC%D0%B0%D0%BB%D1%85/1675066036?i=1675066524"
          />

          <Release
            filename={ translation.cover.truth }
            release={ translation.release.feat }
            title="Truth"
            artist="Rhita Nattah, даена"
            year={ 2023 }
            youtube="https://youtu.be/x0hlK5CAGms?si=VUhGzXAM4lGL-yOr"
            yamusic="https://music.yandex.ru/album/24376930/track/109995076"
            spotify="https://open.spotify.com/track/2i2YLmxzR2vJeX1K43dO8k?si=897ea2bd69ca4a20"
            itunes="https://music.apple.com/ru/album/truth/1660029772?i=1660029777"
          />

          <Release
            filename={ translation.cover.sberech }
            release={ translation.release.feat }
            title="Сберечь меня"
            artist="Tamara, даена"
            year={ 2022 }
            youtube="https://youtu.be/PfpAN5lQ9p4?si=22Bt4D9O5ok6wZVL"
            yamusic="https://music.yandex.ru/album/21282524/track/101080715"
            spotify="https://open.spotify.com/track/5stWBwyLPlmB2CJ4idmcOf?si=495653d902ee4ca1"
            itunes="https://music.apple.com/ru/album/%D1%81%D0%B1%D0%B5%D1%80%D0%B5%D1%87%D1%8C-%D0%BC%D0%B5%D0%BD%D1%8F-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1609583546?i=1609583960"
          />

          <Release
            filename={ translation.cover.ivory }
            release={ translation.release.feat }
            title="Ivory"
            artist="Ollane, даена"
            year={ 2022 }
            youtube="https://youtu.be/8vK-mtl-O9M?si=tMysyvDKuJrszkZV"
            yamusic="https://music.yandex.ru/album/21343596/track/101295190"
            spotify="https://open.spotify.com/track/6qFSPrbOzbPkRAteoagxzp?si=7a2552b8962244a4"
            itunes="https://music.apple.com/ru/album/ivory-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1608930924?i=1608931155"
          />

          <Release
            filename={ translation.cover.caucasiankid }
            release={ translation.release.ep }
            title="caucasian kid"
            artist="даена"
            year={ 2021 }
            youtube="https://youtube.com/playlist?list=OLAK5uy_lRHsAIx8qnxm-YhQKKDiB97x_VdFRdSAk&si=_kX7GA0rL-aUjfxB"
            yamusic="https://music.yandex.ru/album/17444327"
            spotify="https://open.spotify.com/album/63T51ZQEAUeyPjVPArpUtb?si=pe4dKXHRTXSCSJu2ppEYdg"
            itunes="https://music.apple.com/ru/album/caucasian-kid-ep/1580963063"
          />

          <Release
            filename={ translation.cover.troetochie }
            release={ translation.release.single }
            title="троеточие"
            artist="даена"
            year={ 2021 }
            youtube="https://youtu.be/O1JKRpZu_Vs?si=OUwldIIGmezJZeum"
            yamusic="https://music.yandex.ru/album/13890481/track/77984344"
            spotify="https://open.spotify.com/track/69NhMUsE5R8sKjyHWR4Pzl?si=b1c0d5768ee8495c"
            itunes="https://music.apple.com/ru/album/%D1%82%D1%80%D0%BE%D0%B5%D1%82%D0%BE%D1%87%D0%B8%D0%B5/1553607757?i=1553607760"
          />
        </div>

        <div className={ styles.player }>
          <div>
            <p className={ styles.platform }>{ translation.page.discography.spotify }</p>
            <iframe
              className={ styles.spotify }
              src="https://open.spotify.com/embed/artist/65J0xSmKmX3ENY7JYyTAUQ?utm_source=generator&theme=0"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            ></iframe>
          </div>
          <div>
            <p className={ styles.platform }>{ translation.page.discography.yandex }</p>
            <iframe
              className={ styles.yandex }
              frameBorder="0"
              src="https://music.yandex.ru/iframe/playlist/yamusic-bestsongs/8979279"
            ></iframe>
          </div>
        </div>

        <div className={ `${ styles.container } ${ styles.socials }` }>
          <a href={ translation.socials.vk } target="_blank">
            <img src={ translation.icons.vk } title="vk" alt="vk"/>
          </a>
          <a href={ translation.socials.inst } target="_blank">
            <img src={ translation.icons.inst } title="instagram" alt="instagram"/>
          </a>
          <a href={ translation.socials.youtube } target="_blank">
            <img src={ translation.icons.youtube } title="youtube" alt="youtube"/>
          </a>
          <a href={ translation.socials.yamusic } target="_blank">
            <img src={ translation.icons.yamusic } title="yandex.music" alt="yandex.music"/>
          </a>
          <a href={ translation.socials.spotify } target="_blank">
            <img src={ translation.icons.spotify } title="spotify" alt="spotify"/>
          </a>
          <a href={ translation.socials.itunes } target="_blank">
            <img src={ translation.icons.itunes } title="itunes" alt="itunes"/>
          </a>
        </div>
      </div>
    </main>
  )
}
