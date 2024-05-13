import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import PageLayout from '@/components/layouts/page-layout/PageLayout'
import VideoList from '@/app/video/video-list/VideoList'

export default function VideoPage() {
  return (
    <main className={ styles.main }>
      <PageLayout tag={ translation.page.video.tag }>
        <div>
          <div className={ `${ styles.container } ${ styles.video }` }>
            <VideoList/>
          </div>
        </div>
      </PageLayout>
    </main>
  )
}
