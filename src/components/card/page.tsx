import styles from './page.module.scss'

interface CardProps {
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

export function Card({
  filename,
  release,
  title,
  artist,
  year,
  youtube,
  yamusic,
  spotify,
  itunes
}: CardProps) {
  return (
    <div className={ styles.card }>
      <img src={ filename } alt="cover"/>
      <div className={ styles.cardBody }>
        <div>
          <p className={ styles.release }>{ release }</p>
          <p className={ styles.title }>{ title }</p>
          <p className={ styles.artist }>{ artist }</p>
          <p className={ styles.year }>{ year }</p>
        </div>

        <div className={ styles.links }>
          <a href={ youtube } target="_blank">
            <img src="icons/youtube.svg" alt="youtube" width="35px"/>
          </a>
          <a href={ yamusic } target="_blank">
            <img src="icons/yamusic.svg" alt="yamusic" width="35px"/>
          </a>
          <a href={ spotify } target="_blank">
            <img src="icons/spotify.svg" alt="spotify" width="35px"/>
          </a>
          <a href={ itunes } target="_blank">
            <img src="icons/itunes.svg" alt="itunes" width="35px"/>
          </a>
        </div>
      </div>
    </div>
  )
}
