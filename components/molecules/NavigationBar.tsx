import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const linkElements = [
  {
    href: '/fairytale',
    text: 'Fairytales',
  },
  {
    href: '/links',
    text: 'Links',
  },
  {
    href: '/studio',
    text: 'Studio',
  },
]

const NavigationBar = () => {
  const router = useRouter()

  return (
    <nav className="relative flex justify-between bg-black p-4 text-white">
      <Link
        href="/"
        className={clsx(router.pathname === '/' && 'text-purple-500')}
      >
        <strong>AI Workshop</strong>
      </Link>
      <ul className="flex gap-4">
        {linkElements.map(({ href, text }) => {
          const isSelected = router.pathname.includes(href)
          return (
            <li key={href}>
              <Link
                href={href}
                className={clsx(isSelected && 'font-bold text-purple-500', '')}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavigationBar
