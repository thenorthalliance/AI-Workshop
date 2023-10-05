import '../styles/globals.css'

import NavigationBar from 'components/molecules/NavigationBar'
import { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NavigationBar />
      <Component {...pageProps} />
    </>
  )
}
