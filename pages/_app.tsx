import '../styles/globals.css'

import NavigationBar from 'components/molecules/NavigationBar'
import { AppProps } from 'next/app'
import Link from 'next/link'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
      <footer className="flex justify-center gap-4 bg-black p-4 text-white">
        <Link href="https://www.noaignite.no/" target="_blank">
          NoA Ignite
        </Link>
        <Link href="https://www.sanity.io/" target="_blank">
          Sanity
        </Link>
        <Link href="https://openai.com/" target="_blank">
          OpenAI
        </Link>
        <Link href="https://tailwindcss.com/" target="_blank">
          TailwindCSS
        </Link>
      </footer>
    </>
  )
}
