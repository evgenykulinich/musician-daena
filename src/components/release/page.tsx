'use client'

import styles from './page.module.scss'
import { translation } from '@/constants/translation'

interface ReleaseProps {
  filename: string
  release: string
  title: string
  artist: string
  year: number
  youtube?: string
  yamusic?: string
  spotify?: string
  itunes?: string
}

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
}: ReleaseProps) {
  return (
    <div className={ styles.cardWrapper }>
      <img className={ styles.cover } src={ filename } alt="cover"/>
      <div className={ styles.cardBody }>
        <div className={ styles.description }>
          <p className={ styles.release }>{ release }</p>
          <p className={ styles.title }>{ title }</p>
          <p className={ styles.artist }>{ artist }</p>
          <p className={ styles.year }>{ year }</p>
        </div>

        <div className={ styles.links }>
          <a href={ youtube } target="_blank">
            <img src={ translation.icons.youtube } alt="youtube"/>
          </a>
          <a href={ yamusic } target="_blank">
            <img src={ translation.icons.yamusic } alt="yamusic"/>
          </a>
          <a href={ spotify } target="_blank">
            <img src={ translation.icons.spotify } alt="spotify"/>
          </a>
          <a href={ itunes } target="_blank">
            <img src={ translation.icons.itunes } alt="itunes"/>
          </a>
        </div>
      </div>
    </div>
  )
}
