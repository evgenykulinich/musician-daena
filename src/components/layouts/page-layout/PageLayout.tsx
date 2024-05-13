import Link from 'next/link'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import Socials from '@/components/socials/Socials'

interface PageLayoutProps {
  tag: string
  children: React.ReactNode
}

export default function PageLayout({ tag, children }: PageLayoutProps) {
  return (
    <main className={ styles.main }>
      <div className={ `${ styles.container } ${ styles.header }` }>
        <Link
          className={ styles.artist }
          href={ translation.page.main.path }
        >
          { translation.page.discography.artist }
        </Link>
        <span className={ styles.tag }>{ tag }</span>
      </div>

      { children }

      <div>
        <div className={ `${ styles.container } ${ styles.socials }` }>
          <Socials/>
        </div>

        <div className={ `${ styles.container } ${ styles.footer }` }>
          <Link href={ translation.page.main.path }>
            { translation.page.layout.goMain }
          </Link>
          <p className={ styles.copyright }>
            { translation.page.layout.copyright }
          </p>
        </div>
      </div>
    </main>
  )
}
