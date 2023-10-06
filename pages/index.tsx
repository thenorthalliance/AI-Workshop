import NoaIgnite from 'lib/icons/NoaIgnite'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Page() {
  const code = `
  // JavaScript code
  const response = await fetch('/api/openai', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ prompt: promt, maxTokens: 100 }),
  }).then((res) => res.json())

  if (response.text) {
      onChange(response.text ? set(response.text) : unset())
  } else {
      console.log('error')
  }
  setIsLoading(false)
`

  const code2 = `
  // JavaScript code
const generateStory = async () => {
  if (!promt) return
  try {
    callApi()
  } catch (error) {
    console.log('error', error)
  }
}
`
  return (
    <>
      <Head>
        <title>AI Workshop</title>
        <meta name="description" content="AI Workshop" />
      </Head>
      <main className="bg-black/90 leading-relaxed text-white ">
        <section className="flex min-h-[764px] flex-col items-center justify-center px-4">
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
          <section className="flex flex-col items-center gap-4 pt-4">
            <h3>
              <strong>Resources:</strong>
            </h3>
            <Link
              href="https://github.com/thenorthalliance/AI-Workshop"
              className="underline"
            >
              Github Repository
            </Link>
          </section>
        </section>
        <section className="bg-white px-4 text-black"></section>
        <section className="px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <h2>ICEBREAKER</h2>
            <ol className="list-decimal">
              <li>
                Individual assignment: Introduce yourself to the team. Tell the
                group your name, occupation, favourite food and Sanity
                experience/skill level.
              </li>
              <li>
                Group assignment: Give your group a name. Need some help coming
                up with names? Ask{' '}
                <a href="https://chat.openai.com/auth/login?next=%2F">
                  ChatGPT
                </a>{' '}
                to give some examples!
              </li>
            </ol>
            <div className="py-4">
              <p>
                In this workshop, the teams will use AI to generate fairytales
                and images. You will experiment and challenge the gender bias
                that is in today&apos;s AI. The goal is to use an existing
                fairytale or generate a new one with AI to rewrite or change the
                perspective or gender of the main character
              </p>
              <p>
                The teams are going to integrate OpenAI API into sanity to
                generate text and images.
              </p>
              <p>
                Following our challenge you must upload an image in sanity and
                you can generate images with AI that will only be integrated in
                the frontend not saved to sanity. If you are pro and want to
                integrate it go ahead.
              </p>
            </div>
          </div>
        </section>
        <section className="bg-white px-4 py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h2>Getting started</h2>
            <ol className="list list-decimal">
              <li>
                <p>
                  One initial person on the team fork the repo to his/hers
                  github.
                </p>
              </li>
              <li>
                <p>
                  The initial person adds your team members as
                  contributors/admin to the repo
                </p>
              </li>
              <li>
                The rest of the team clones the repo from the initial persons
                github.
              </li>
              <li>
                Create a <code className="bg-gray-200 p-0.5">.env</code> file in
                the root folder and copy paste the example{' '}
                <code className="bg-gray-200 p-0.5">.env</code> from discord.
                Channels are created for each group
              </li>
              <li>
                <p>
                  Open terminal inside the root folder and run{' '}
                  <code className="bg-gray-200 p-0.5">npm install</code>
                </p>
              </li>
              <li>
                <p>
                  Once the install is complete, run:{' '}
                  <code className="bg-gray-200 p-0.5">npm run dev</code>
                </p>
              </li>
              <li>
                <p>
                  Open up your browser and go to{' '}
                  <a
                    href="http://localhost:3000/studio/desk"
                    className="underline"
                  >
                    <strong>http://localhost:3000/studio</strong>
                  </a>
                </p>
              </li>
              <li>
                <p>
                  Click on &quot;Fairytales&quot; and observe that you have 3
                  documents containing 3 Norwegian fairytales
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-7xl text-purple-500">
              <strong>The Challange</strong>
            </h2>
            <div className="pt-4">
              <h3>Task 1</h3>
              <div className="pb-2">
                <p>
                  Connect the pre-made React component inside the studio to
                  generate text from OpenAI. You will find this file
                  at`/components/OpenAISanity/OpenAISanity.tsx`.
                </p>
              </div>
              <ol className="list-decimal">
                <li>
                  <p>
                    Update{' '}
                    <code className="bg-gray-200 p-0.5 text-black">
                      const callApi
                    </code>{' '}
                    to fetch data from OpenAI (check the code for tips)
                  </p>
                </li>
                <li>
                  <p>
                    Inside the `generateStory` function you should call the
                    `callApi` function you wrote over.
                  </p>
                </li>
              </ol>
              <div className="pt-4">
                <p>
                  Click on one of the fairytales and observe that you have an
                  OpenAI text generator input field that you can test. Remember
                  to Publish changes done in sanity studio. (It&apos;s a green
                  button at the bottom of the page)
                </p>
              </div>
              <div className="flex justify-center pt-4">
                <Image
                  src="https://www.linkpicture.com/q/Screenshot-2023-04-13-at-20.28.59.png"
                  alt="Image of Sanity studio with custom component"
                  height={500}
                  width={500}
                />
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h3>Task 2</h3>
            <div className="pb-2">
              <p>
                Finish the skeleton of the slug page. We have already fetched
                the data from Sanity and hooked it up to the fairytale
                interface. You will find this file in `pages/fairytale/slug.tsx`
              </p>
            </div>
            <ol className="list-decimal">
              <li>
                <p>
                  Print out the image, generated text and the title on the
                  frontend page._
                </p>
              </li>
              <li>
                <p>Bonus: Give it some styling!_</p>
              </li>
            </ol>
            <small>
              Remember to publish changes done in sanity studio. (It&apos;s a
              green button at the bottom of the page)
            </small>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-2xl">
            <h3>Task 3</h3>
            <div className="pb-2">
              <p>
                Continuing on the [slug] page. Generate an image with the OpenAI
                api. This image will not be added to sanity, it will only be
                added to the frontend.
              </p>
            </div>
            <pre className="whitespace-pre-wrap bg-gray-200 p-2 text-black ">
              <code>
                _Replace the image prompt text with your own custom prompt in
                the function `generateNewStoryImage`. And see the results._
              </code>
            </pre>
          </div>
        </section>
        <section className="bg-white py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h3>Task 4</h3>
            <div>
              <p>
                This is where the <strong>magic</strong> happens! Your team will
                need to be creative and write some good prompts. Discuss how the
                prompts you write influence the results. We would love to see
                your progress and failed attempts, so save them for your
                presentation for later.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto max-w-2xl">
            <h3>Task 5 - Presentations</h3>
            <div>
              <p>
                Each team will present their work and results. We will have a
                short Q&amp;A after each presentation. The presentations will be
                held in the main room. Each team will have 5 minutes to present,
                use whatever format you want.
              </p>
            </div>
          </div>
        </section>
        <section className="py-20">
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            <h3>Example code</h3>
            <pre
              className="whitespace-pre bg-gray-200 p-2 text-black "
              title="Code snippet"
            >
              <code>{code}</code>
            </pre>
            <pre
              className="whitespace-pre bg-gray-200 p-2 text-black"
              title="Code snippet"
            >
              <code>{code2}</code>
            </pre>
          </div>
        </section>
      </main>
    </>
  )
}
