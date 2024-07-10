import Link from 'next/link'

import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { Button } from '@/components/ui/button'
import { ChevronUp } from 'lucide-react'
import { socialLinks } from '@/translation'

const socialsList = [
  {
    href: socialLinks.vk,
    src: '/socials/vk.svg',
    alt: 'vk',
    text: 'Вконтакте',
    width: 32
  },
  {
    href: socialLinks.instagram,
    src: '/socials/instagram.svg',
    alt: 'instagram',
    text: 'Instagram',
    width: 32
  },
  {
    href: socialLinks.youtube,
    src: '/socials/youtube.svg',
    alt: 'youtube',
    text: 'YouTube',
    width: 38
  },
  {
    href: socialLinks.yamusic,
    src: '/socials/yamusic.svg',
    alt: 'yamusic',
    text: 'Я.Музыка',
    width: 32
  },
  {
    href: socialLinks.spotify,
    src: '/socials/spotify.svg',
    alt: 'spotify',
    text: 'Spotify',
    width: 32
  },
  { href: socialLinks.itunes, src: '/socials/itunes.svg', alt: 'itunes', text: 'Itunes', width: 32 }
]

export default function Home() {
  return (
    <main className="relative h-dvh w-full overflow-hidden">
      <div className="absolute left-0 top-0 z-10 flex w-full justify-between px-6 pt-6 text-2xl lg:px-8 lg:pt-8 lg:text-3xl">
        <h1 className="cursor-default font-bold">даена</h1>
        <div className="flex flex-col items-end gap-4">
          <p>
            <Link className="link-animation" href={''}>
              дискография
            </Link>
          </p>
          <p>
            <Link className="link-animation" href={''}>
              видео
            </Link>
          </p>
        </div>
      </div>

      <Drawer>
        <DrawerTrigger className="absolute bottom-6 left-[50%] z-10 translate-x-[-50%] text-xl outline-none lg:text-2xl">
          <ChevronUp className="mx-auto" />
          <p>слушать</p>
        </DrawerTrigger>
        <DrawerContent className="border-none bg-black/50 outline-none">
          <DrawerHeader className="flex flex-col items-center justify-center">
            <DrawerTitle className="text-2xl lg:text-3xl">даена</DrawerTitle>
            <DrawerDescription className="lg:text-md text-lg">
              Слушать на всех площадках
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex gap-3 lg:w-full lg:flex-row">
            {socialsList.map(social => (
              <Link className="lg:flex-grow" href={social.href} target="_blank" key={social.alt}>
                <Button className="flex w-full gap-2 py-6 transition hover:bg-white/15 lg:active:scale-[95%]">
                  <img src={social.src} alt={social.alt} width={social.width} />
                  <p>{social.text}</p>
                </Button>
              </Link>
            ))}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <video
        className="z-1 absolute left-0 top-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/bg/main-bg.mp4" />
      </video>
    </main>
  )
}
