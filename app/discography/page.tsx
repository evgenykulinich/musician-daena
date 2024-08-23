'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Footer } from '@/components/footer/Footer'
import { Header } from '@/components/header/Header'
import { FadeInImage } from '@/components/image/FadeInImage'
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { releases } from '@/data/releases'
import { useLocomotiveScroll } from '@/hooks/useLocomotiveScroll'

export default function Discography() {
  useLocomotiveScroll()

  return (
    <div className="mx-auto max-w-screen-2xl">
      <Header title="дискография" />
      <section className="mt-6 px-6 lg:mt-8 lg:px-8">
        <div className="discography-container gap-x-8 gap-y-12">
          {releases.map(release => (
            <Card
              className="discography-item card-blur relative rounded-2xl border-none text-white outline-none"
              key={release.title}
            >
              <FadeInImage
                className="absolute w-full rounded-3xl"
                src={`/covers/${release.cover}`}
                alt={release.title}
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 flex h-full cursor-default flex-col justify-between rounded-2xl bg-black/20 opacity-0 transition duration-500 hover:opacity-100">
                <div>
                  <CardHeader>
                    <CardDescription className="text-white opacity-50 lg:text-lg">
                      {release.release}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="lg:mt-3">
                    <p className="text-3xl font-bold lg:text-4xl">{release.title}</p>
                    <p className="text-xl lg:text-2xl">{release.artist}</p>
                  </CardContent>
                  <CardContent>
                    <p className="text-lg opacity-50">{release.year}</p>
                  </CardContent>
                </div>
                <CardFooter>
                  <div className="flex w-full justify-between">
                    {release.streams.map(stream => (
                      <TooltipProvider key={stream.title}>
                        <Tooltip delayDuration={200}>
                          <TooltipTrigger>
                            <Link className="" href={stream.href} target="_blank">
                              <Image
                                className="h-8 w-8 lg:h-9 lg:w-9"
                                src={stream.icon}
                                alt={stream.title}
                                width={100}
                                height={100}
                              />
                            </Link>
                          </TooltipTrigger>
                          <TooltipContent>{stream.title}</TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    ))}
                  </div>
                </CardFooter>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="lg:mt-18 mt-14 flex-col justify-center gap-10 bg-[url('/bg/playlist-bg.avif')] bg-cover px-4 py-8 lg:flex lg:flex-row lg:bg-[url('/bg/playlist-bg-landscape.avif')]">
        <div className="mb-10 text-center text-2xl lg:mb-0 lg:text-3xl">
          <p className="cursor-default">Spotify</p>
          <iframe
            className="mx-auto mt-6 h-[550px] w-full max-w-[300px] rounded-xl lg:mt-10 lg:h-[650px] lg:w-[600px] lg:max-w-full"
            src="https://open.spotify.com/embed/artist/65J0xSmKmX3ENY7JYyTAUQ?utm_source=generator&theme=0"
            frameBorder="0"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            title="Spotify"
          />
        </div>
        <div className="text-center text-2xl lg:text-3xl">
          <p className="cursor-default">Яндекс.Музыка</p>
          <iframe
            className="mx-auto mt-6 h-[550px] w-full max-w-[300px] rounded-xl lg:mt-10 lg:h-[650px] lg:w-[600px] lg:max-w-full"
            frameBorder="0"
            src="https://music.yandex.ru/iframe/playlist/yamusic-bestsongs/8979279"
            title="Yandex Music"
          />
        </div>
      </section>

      <section>
        <Footer />
      </section>
    </div>
  )
}
