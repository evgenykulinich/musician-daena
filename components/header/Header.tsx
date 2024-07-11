import Link from 'next/link'

interface Props {
  title: string
}

export function Header({ title }: Props) {
  return (
    <header className="px-6 pt-6 text-2xl lg:px-8 lg:pt-8 lg:text-3xl">
      <div>
        <Link className="link-animation font-bold" href="/">
          даена
        </Link>{' '}
        <span className="cursor-default">• {title}</span>
      </div>
    </header>
  )
}
