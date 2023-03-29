import clsx from 'clsx'
import Link from 'next/link'
import { useRouter } from 'next/router'

const linkElements = [
  {
    href: '/stories',
    text: 'Stories',
  },
  {
    href: '/links',
    text: 'Links',
  },
]

const NavigationBar = () => {
  const router = useRouter()

  return (
    <nav className="relative flex justify-between bg-black p-4 text-white">
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
