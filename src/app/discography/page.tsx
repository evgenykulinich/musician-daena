import type { Metadata } from 'next'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import PageLayout from '@/components/layouts/page-layout/PageLayout'
import ReleaseList from '@/app/discography/components/release-list/ReleaseList'

export const metadata: Metadata = {
  title: translation.page.discography.title,
  description: translation.page.discography.description
}

export default function DiscographyPage() {
  return (
    <main className={ styles.main }>
      <PageLayout tag={ translation.page.discography.tag }>
        <div>
          <div className={ `${ styles.container } ${ styles.discography }` }>
            <ReleaseList/>
          </div>

          <div className={ styles.player }>
            <div>
              <p className={ styles.platform }>{ translation.page.discography.spotify }</p>
              <iframe
                className={ styles.spotify }
                src="https://open.spotify.com/embed/artist/65J0xSmKmX3ENY7JYyTAUQ?utm_source=generator&theme=0"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                title={"Spotify"}
              ></iframe>
            </div>
            <div>
              <p className={ styles.platform }>{ translation.page.discography.yandex }</p>
              <iframe
                className={ styles.yandex }
                frameBorder="0"
                src="https://music.yandex.ru/iframe/playlist/yamusic-bestsongs/8979279"
                title={"Yandex Music"}
              ></iframe>
            </div>
          </div>
        </div>
      </PageLayout>
    </main>
  )
}
