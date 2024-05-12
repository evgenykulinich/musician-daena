import Link from 'next/link'

import styles from './page.module.scss'
import { Card } from '@/components/card/page'

export default function MusicPage() {
  return (
    <main className={ styles.main }>
      <div className={ styles.container }>
        <div className={ styles.navigation }>
          <Link className={ styles.logo } href="/">даена</Link>
          <span>&nbsp;• дискография</span>
        </div>

        <div className={ styles.discography }>
          <Card
            filename="covers/melanholiya.jpg"
            release="Feat"
            title="Меланхолия"
            artist="TumaniYO, даена"
            year={ 2024 }
            youtube='https://youtu.be/I5iA-krQbVQ?si=caYVu6V8ZwF9QLZp'
            yamusic='https://music.yandex.ru/album/30176663/track/123515273'
            spotify='https://open.spotify.com/track/206MrFKy7BNO3GhHKBvjDV?si=3b2099a6c92944ce'
            itunes='https://music.apple.com/ru/album/%D0%BC%D0%B5%D0%BB%D0%B0%D0%BD%D1%85%D0%BE%D0%BB%D0%B8%D1%8F-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1735269739?i=1735269745'
          />

          <Card
            filename="covers/eastwest.jpg"
            release="Album"
            title="eastwest"
            artist="даена"
            year={ 2023 }
            youtube='https://youtube.com/playlist?list=OLAK5uy_nDN4Mkmze-nk9eJIExFkKoRQmw4D_PQ28&si=D3EhDZPF1UBXnqHv'
            yamusic='https://music.yandex.ru/album/26424655'
            spotify='https://open.spotify.com/album/6uAC3yrhJUjQl2bY3yniy8?si=mP_iZhM9S2u4Te-a9awwzA'
            itunes='https://music.apple.com/ru/album/eastwest/1694404422'
          />

          <Card
            filename="covers/truth.jpg"
            release="Feat"
            title="Truth"
            artist="Rhita Nattah, даена"
            year={ 2023 }
            youtube='https://youtu.be/x0hlK5CAGms?si=VUhGzXAM4lGL-yOr'
            yamusic='https://music.yandex.ru/album/24376930/track/109995076'
            spotify='https://open.spotify.com/track/2i2YLmxzR2vJeX1K43dO8k?si=897ea2bd69ca4a20'
            itunes='https://music.apple.com/ru/album/truth/1660029772?i=1660029777'
          />

          <Card
            filename="covers/troetochie.jpg"
            release="Single"
            title="троеточие"
            artist="даена"
            year={ 2021 }
            youtube='https://youtu.be/O1JKRpZu_Vs?si=OUwldIIGmezJZeum'
            yamusic='https://music.yandex.ru/album/13890481/track/77984344'
            spotify='https://open.spotify.com/track/69NhMUsE5R8sKjyHWR4Pzl?si=b1c0d5768ee8495c'
            itunes='https://music.apple.com/ru/album/%D1%82%D1%80%D0%BE%D0%B5%D1%82%D0%BE%D1%87%D0%B8%D0%B5/1553607757?i=1553607760'
          />

          <Card
            filename="covers/malh.jpg"
            release="Single"
            title="малх"
            artist="даена"
            year={ 2023 }
            youtube='https://youtu.be/xKB6v1iu3j0?si=V3s63jcQebTvyHhK'
            yamusic='https://music.yandex.ru/album/25080876/track/111920647'
            spotify='https://open.spotify.com/track/2LPxS15IPXjIPkqm2z1EpE?si=4060d83567fb47da'
            itunes='https://music.apple.com/ru/album/%D0%BC%D0%B0%D0%BB%D1%85/1675066036?i=1675066524'
          />

          <Card
            filename="covers/sberech.jpg"
            release="Feat"
            title="Сберечь меня"
            artist="Tamara, даена"
            year={ 2022 }
            youtube='https://youtu.be/PfpAN5lQ9p4?si=22Bt4D9O5ok6wZVL'
            yamusic='https://music.yandex.ru/album/21282524/track/101080715'
            spotify='https://open.spotify.com/track/5stWBwyLPlmB2CJ4idmcOf?si=495653d902ee4ca1'
            itunes='https://music.apple.com/ru/album/%D1%81%D0%B1%D0%B5%D1%80%D0%B5%D1%87%D1%8C-%D0%BC%D0%B5%D0%BD%D1%8F-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1609583546?i=1609583960'
          />

          <Card
            filename="covers/ivory.jpg"
            release="Feat"
            title="Ivory"
            artist="Ollane, даена"
            year={ 2022 }
            youtube='https://youtu.be/8vK-mtl-O9M?si=tMysyvDKuJrszkZV'
            yamusic='https://music.yandex.ru/album/21343596/track/101295190'
            spotify='https://open.spotify.com/track/6qFSPrbOzbPkRAteoagxzp?si=7a2552b8962244a4'
            itunes='https://music.apple.com/ru/album/ivory-feat-%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1608930924?i=1608931155'
          />

          <Card
            filename="covers/caucasiankid.jpg"
            release="EP"
            title="caucasian kid"
            artist="даена"
            year={ 2021 }
            youtube='https://youtube.com/playlist?list=OLAK5uy_lRHsAIx8qnxm-YhQKKDiB97x_VdFRdSAk&si=_kX7GA0rL-aUjfxB'
            yamusic='https://music.yandex.ru/album/17444327'
            spotify='https://open.spotify.com/album/63T51ZQEAUeyPjVPArpUtb?si=pe4dKXHRTXSCSJu2ppEYdg'
            itunes='https://music.apple.com/ru/album/caucasian-kid-ep/1580963063'
          />
        </div>

        <div className={ styles.player }>
          <iframe
            className={ styles.spotifyPlayer }
            src="https://open.spotify.com/embed/artist/65J0xSmKmX3ENY7JYyTAUQ?utm_source=generator&theme=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>

          <iframe
            className={ styles.yandexPlayer }
            frameBorder="0"
            src="https://music.yandex.ru/iframe/playlist/yamusic-bestsongs/8979279"
            loading="lazy"
          ></iframe>
        </div>

        <div className={ styles.socials }>
          <a href="https://vk.com/daethisyou" target="_blank">
            <img src="icons/vk.svg" alt="vk" width="30px"/>
          </a>
          <a href="https://www.instagram.com/whosdaena/" target="_blank">
            <img src="icons/insta.svg" alt="insta" width="30px"/>
          </a>
          <a href="https://www.youtube.com/@whosdaena" target="_blank">
            <img src="icons/youtube.svg" alt="youtube" width="30px"/>
          </a>
          <a href="https://music.yandex.ru/artist/8979279" target="_blank">
            <img src="icons/yamusic.svg" alt="yamusic" width="30px"/>
          </a>
          <a href="https://open.spotify.com/artist/65J0xSmKmX3ENY7JYyTAUQ" target="_blank">
            <img src="icons/spotify.svg" alt="spotify" width="30px"/>
          </a>
          <a href="https://music.apple.com/ru/artist/%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1553607758" target="_blank">
            <img src="icons/itunes.svg" alt="itunes" width="30px"/>
          </a>
        </div>
      </div>

      <video className={ styles.background } autoPlay muted loop playsInline>
        <source src="background/main-background.mp4" type="video/mp4"/>
      </video>
    </main>
  )
}
