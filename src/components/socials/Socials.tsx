import { socialList } from '@/data/socialList'

export default function Socials() {
  return (
    <>
      { socialList.map(social => (
        <a href={ social.href } target="_blank" key={ social.href }>
          <img src={ social.img } title={ social.title } alt={ social.title }/>
        </a>
      )) }
    </>
  )
}
