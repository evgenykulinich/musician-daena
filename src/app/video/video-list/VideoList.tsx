import { videoList } from '@/data/videoList'

export default function VideoList() {
  return (
    <>
      { videoList.map(video => (
        <iframe src={ video.href }
                key={ video.href }
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      )) }
    </>
  )
}
