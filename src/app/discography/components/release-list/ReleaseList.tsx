import { Release } from '@/app/discography/components/release/Release'
import { releaseList } from '@/data/releaseList'

export default function ReleaseList() {
  return (
    <>
      { releaseList.map(release => (
        <Release
          key={ release.filename }
          filename={ release.filename }
          release={ release.release }
          title={ release.title }
          artist={ release.artist }
          year={ release.year }
          youtube={ release.youtube }
          yamusic={ release.yamusic }
          spotify={ release.spotify }
          itunes={ release.itunes }
        />
      )) }
    </>
  )
}
