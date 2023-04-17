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
    <nav className="relative flex justify-between p-4 text-white bg-black">
      <Link href="/">SHE Workshop</Link>
      <ul className="flex gap-4">
        {linkElements.map(({ href, text }) => {
          const isSelected = router.pathname === href
          return (
            <li key={href}>
              <Link href={href} className={clsx(isSelected && 'font-bold')}>
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
