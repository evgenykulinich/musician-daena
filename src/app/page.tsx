import { Metadata } from 'next'
import Link from 'next/link'

import styles from './page.module.scss'
import Socials from '@/components/socials/Socials'
import { translation } from '@/constants/translation'
import { releaseList } from '@/data/releaseList'

export const metadata: Metadata = {
  title: translation.page.main.title,
  description: translation.page.main.description,
  openGraph: {

  }
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
          <Socials/>
        </div>

        <div className={ styles.latest }>
          <div className={ styles.contacts }>
            <Socials/>
          </div>
          <span className={ styles.release }><Link

            href={ releaseList[0].youtube }
          >
            { releaseList[0].title }
          </Link></span>
          <p className={ styles.listen }>{ translation.page.main.listen }</p>
        </div>
      </div>

      <video className={ styles.background } autoPlay muted loop playsInline>
        <source src={ translation.bg.mainBg } type="video/mp4"/>
      </video>
    </main>
  )
}
