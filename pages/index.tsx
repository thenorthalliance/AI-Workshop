import NavigationBar from 'components/molecules/NavigationBar'
import Head from 'next/head'

export default function Page() {
  return (
    <>
      <NavigationBar />
      <Head>
        <title>She Workshop</title>
        <meta name="description" content="She Workshop" />
      </Head>
      <main>
        <section className="flex items-center justify-center min-h-screen p-4 text-white bg-black">
          <h1>SHE WORKSHOP</h1>
        </section>
      </main>
    </>
  )
}
