import Image from 'next/image'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'
import { IRelease } from '@/data/releaseList'

export function Release({
  filename,
  release,
  title,
  artist,
  year,
  youtube,
  yamusic,
  spotify,
  itunes
}: IRelease) {
  return (
    <div className={ styles.cardWrapper }>
      <Image className={ styles.cover } src={ filename } alt="cover" width={1000} height={1000}/>
      <div className={ styles.cardBody }>
        <div className={ styles.description }>
          <p className={ styles.release }>{ release }</p>
          <p className={ styles.title }>{ title }</p>
          <p className={ styles.artist }>{ artist }</p>
          <p className={ styles.year }>{ year }</p>
        </div>

        <div className={ styles.links }>
          <a href={ youtube } target="_blank">
            <img src={ translation.icons.youtube } title="youtube" alt="youtube"/>
          </a>
          <a href={ yamusic } target="_blank">
            <img src={ translation.icons.yamusic } title="yamusic" alt="yamusic"/>
          </a>
          <a href={ spotify } target="_blank">
            <img src={ translation.icons.spotify } title="spotify" alt="spotify"/>
          </a>
          <a href={ itunes } target="_blank">
            <img src={ translation.icons.itunes } title="itunes" alt="itunes"/>
          </a>
        </div>
      </div>
    </div>
  )
}
