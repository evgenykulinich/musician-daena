import Link from 'next/link'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'

export default function VideoPage() {
  return (
    <main className={ styles.main } id="main">
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
        <div className={ `${ styles.container } ${ styles.video }` }>
          <iframe src="https://www.youtube.com/embed/qG4NMyBM-TA?si=wIZ8h5BIiC2hYbbq"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe src="https://www.youtube.com/embed/BA0ncqP4V0I?si=C3X5wIZ5yRODnWAw"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe src="https://www.youtube.com/embed/VHd_x3YZ2bo?si=TT_-rvYhpTbkHGU1"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

          <iframe src="https://www.youtube.com/embed/iHBw9c8VbZQ?si=fDYR4S6fMfEtYL7t"
                  title="YouTube video player" frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
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


        <div className={ styles.footer }>
          <Link href={ translation.page.main.path }>
            { translation.page.video.artist }
          </Link>
        </div>
      </div>
    </main>
  )
}
