import NoaIgnite from 'lib/icons/NoaIgnite'
import Head from 'next/head'
import Link from 'next/link'

export default function Page() {
  return (
    <>
      <Head>
        <title>She Workshop</title>
        <meta name="description" content="She Workshop" />
      </Head>
      <main className="bg-black p-4 text-white">
        <section className="flex min-h-screen flex-col items-center justify-center">
          <div className="flex flex-col items-center gap-2 p-8 ring ring-white">
            <h1>AI WORKSHOP</h1>
            <h2>Trondheim</h2>
            <h3>16.10.23</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 fill-white pt-8">
            <p>Made by</p>
            <Link href="https://www.noaignite.no/" className="fill-white">
              <span className="fill-white">
                <NoaIgnite />
              </span>
            </Link>
          </div>
          <section className="flex flex-col items-center justify-center pt-10">
            <p>Powered by</p>
            <div className="flex gap-4 pt-4">
              <Link href="https://nextjs.org/" className="underline">
                Next.js
              </Link>
              <Link href="https://www.sanity.io/" className="underline">
                Sanity
              </Link>
              <Link href="https://openai.com/" className="underline">
                OpenAI
              </Link>
            </div>
          </section>
        </section>
        <section>
          Documentation:
          <Link
            href="https://github.com/thenorthalliance/AI-Workshop"
            className="underline"
          >
            Github Repo
          </Link>
        </section>
      </main>
    </>
  )
}
