import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'

export const metadata: Metadata = {
  title: translation.page.main.title,
  description: translation.page.main.description
}

export default function HomePage() {
  return (
    <main className={ styles.main }>
      <div className={ `${ styles.container } ${ styles.wrapper }` }>
        <div className={ styles.header }>
          <p className={ styles.artist }>{ translation.page.main.artist }</p>
          <div className={ styles.art }>
            <span>
              <Link
                className={ styles.discography }
                href={ translation.page.discography.path }
              >
                { translation.page.main.discography }
              </Link>
            </span>
            <span>
              <Link
                className={ styles.video }
                href={ translation.page.video.path }
              >
                { translation.page.main.video }
              </Link>
            </span>
          </div>
        </div>

        <div className={ styles.socials }>
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

      <video className={ styles.background } autoPlay muted loop playsInline>
        <source src={ translation.bg.mainBg } type="video/mp4"/>
      </video>
    </main>
  )
}
