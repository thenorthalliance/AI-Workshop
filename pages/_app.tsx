// import 'tailwindcss/tailwind.css'
import { NavigationBar } from 'components'
import '../styles/globals.css'

import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  )
}
