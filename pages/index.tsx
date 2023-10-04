import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>Workshop</title>
        <meta name="description" content="She Workshop" />
      </Head>
      <main>
        <section className="flex min-h-screen flex-col items-center justify-center gap-8 bg-black p-4 text-white">
          <div className="flex flex-col items-center gap-2 p-8 ring ring-white">
            <h1 className="">Workshop - Trondheim</h1>
            <h2>16.10.23</h2>
          </div>

          <Link href="/links" className="underline">
            Important links
          </Link>
        </section>
      </main>
    </>
  )
}
