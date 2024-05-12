import Link from 'next/link'

import styles from './page.module.scss'

export default function Home() {
  return (
    <main className={ styles.main }>
      <div className={ styles.container }>
        <div className={ styles.navigation }>
          <p>даена</p>
          <Link className={ styles.music } href="/music">дискография</Link>
        </div>

        <div className={ styles.socials }>
          <a href="https://vk.com/daethisyou" target="_blank">
            <img src="icons/vk.svg" alt="vk" width="35px"/>
          </a>
          <a href="https://www.instagram.com/whosdaena/" target="_blank">
            <img src="icons/insta.svg" alt="insta" width="35px"/>
          </a>
          <a href="https://www.youtube.com/@whosdaena" target="_blank">
            <img src="icons/youtube.svg" alt="youtube" width="35px"/>
          </a>
          <a href="https://music.yandex.ru/artist/8979279" target="_blank">
            <img src="icons/yamusic.svg" alt="yamusic" width="35px"/>
          </a>
          <a href="https://open.spotify.com/artist/65J0xSmKmX3ENY7JYyTAUQ" target="_blank">
            <img src="icons/spotify.svg" alt="spotify" width="35px"/>
          </a>
          <a href="https://music.apple.com/ru/artist/%D0%B4%D0%B0%D0%B5%D0%BD%D0%B0/1553607758" target="_blank">
            <img src="icons/itunes.svg" alt="itunes" width="35px"/>
          </a>
        </div>
      </div>

      <video className={ styles.background } autoPlay muted loop playsInline>
        <source src="background/main-background.mp4" type="video/mp4"/>
      </video>
    </main>
  )
}
