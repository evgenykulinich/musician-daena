import type { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import { Release } from '@/components/release/page'

export const metadata: Metadata = {
  title: translation.page.video.title,
  description: translation.page.video.description
}

export default function VideoPage() {
  return (
    <main className={ styles.main }>
      <div className={ styles.container }>
        <Link
          className={ styles.artist }
          href={ translation.page.main.path }
        >
          { translation.page.video.artist }
        </Link>
        <span className={ styles.tag }>{ translation.page.video.tag }</span>
      </div>

      <div className={ styles.wrapper }>
        <div className={ `${ styles.container } ${ styles.discography }` }>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/qG4NMyBM-TA?si=V-z6SifRDwrG7eJb"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen>

          </iframe>
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
