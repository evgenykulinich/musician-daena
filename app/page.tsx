import { ChevronUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger
} from '@/components/ui/drawer'
import { MainPageBackground } from '@/components/video/FadeInVideo'
import { routes } from '@/constants/routes'
import { socialsList } from '@/data/socials'

export default function Home() {
  return (
    <main className="fixed h-dvh w-full touch-none overflow-hidden">
      <header className="absolute left-[50%] top-0 z-10 flex w-full max-w-screen-2xl translate-x-[-50%] justify-between px-6 pt-6 text-2xl lg:px-8 lg:pt-8 lg:text-3xl">
        <h1 className="cursor-default font-bold">даена</h1>
        <div className="flex flex-col items-end gap-4 lg:gap-8">
          <Link className="link-animation transition" href={routes.discography}>
            дискография
          </Link>
          <Link className="link-animation transition" href={routes.video}>
            видео
          </Link>
          <Link className="link-animation transition" href={routes.dom} target="_blank">
            дом
          </Link>
        </div>
      </header>

      <Drawer>
        <DrawerTrigger className="absolute bottom-6 left-[50%] z-10 translate-x-[-50%] text-xl outline-none lg:text-2xl">
          <ChevronUp className="mx-auto" />
          <p className="link-animation transition active:scale-95 lg:active:transform-none">
            слушать
          </p>
        </DrawerTrigger>
        <DrawerContent className="border-none bg-black/50 outline-none">
          <DrawerHeader className="flex flex-col items-center justify-center">
            <DrawerTitle className="text-2xl lg:text-3xl">даена</DrawerTitle>
            <DrawerDescription className="lg:text-md text-lg">
              Слушать на всех площадках:
            </DrawerDescription>
          </DrawerHeader>
          <DrawerFooter className="flex gap-3 pt-0 lg:w-full lg:flex-row">
            {socialsList.map(social => (
              <Link className="lg:flex-grow" href={social.href} target="_blank" key={social.alt}>
                <Button className="flex w-full gap-2 py-6 transition hover:bg-white/15 lg:active:scale-[95%]">
                  <Image
                    className="h-8 w-8"
                    src={social.src}
                    alt={social.alt}
                    width={0}
                    height={0}
                  />
                  <p>{social.text}</p>
                </Button>
              </Link>
            ))}
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      <MainPageBackground />
    </main>
  )
}
