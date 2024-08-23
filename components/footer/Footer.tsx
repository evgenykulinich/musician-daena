import Image from 'next/image'
import Link from 'next/link'

import { routes } from '@/constants/routes'
import { socialsList } from '@/data/socials'

export function Footer() {
  return (
    <footer className="px-6 py-6 pb-10 lg:px-8 lg:py-8">
      <div className="hidden items-center justify-center gap-12 lg:flex">
        {socialsList.map(social => (
          <Link
            className="flex flex-col items-center justify-center transition hover:scale-110 active:scale-100"
            href={social.href}
            target="_blank"
            key={social.alt}
          >
            <Image
              className="mb-1 h-8 w-8"
              src={social.src}
              alt={social.alt}
              width={0}
              height={0}
            />
            <p>{social.text}</p>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center lg:mt-8">
        <div className="mx-auto mb-4 h-[3px] w-[69px] rounded-xl bg-white/20" />
        <Link className="link-animation cursor-pointer text-2xl" href={routes.main}>
          ← даена
        </Link>
        <p className="mt-4 opacity-50">© даена, 2024</p>
      </div>
    </footer>
  )
}
