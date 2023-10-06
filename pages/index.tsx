import NoaIgnite from 'lib/icons/NoaIgnite'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { FaIcicles } from 'react-icons/fa'

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
        <section className="bg-purple-500/90 px-4 py-20">
          <div className="mx-auto max-w-2xl">
            <div className="flex items-center gap-2">
              <h2>ICEBREAKER:</h2>
              <FaIcicles className="text-2xl" />
            </div>

            <h3>Individual Introduction:</h3>
            <p>
              Each team member should introduce themselves to the group. Share
              your:
            </p>
            <ul className="list-inside list-disc pb-4">
              <li>Name</li>
              <li>School year</li>
              <li>Favorite Food</li>
              <li>Experience/Skill Level with Sanity/NextJS/OpenAI</li>
            </ul>

            <div className="pb-4">
              <h3>Group Assignment:</h3>
              <p>
                As a group, brainstorm and choose a unique team name. If you
                need inspiration, feel free to ask ChatGPT for some creative
                suggestions.
              </p>
            </div>
            <div className="pb-4">
              <h2>Workshop Overview:</h2>
              <p>
                In this workshop, teams will harness the power of AI to create
                fairytales and images. Our primary objective is to address and
                challenge the gender bias that often exists in contemporary AI.
                We aim to achieve this by either modifying existing fairytales
                or generating entirely new ones using AI, with a focus on
                altering the perspective or gender of the main character.
              </p>
            </div>

            <div className="pb-4">
              <h2>Technical Integration:</h2>
              <p>
                Teams will be tasked with integrating the OpenAI API into Sanity
                to generate both text and images.
              </p>
            </div>

            <div className="pb-4">
              <h2>Challenge Outcome:</h2>
              <p>
                After successfully completing the challenge, each team must:
              </p>
              <ul className="list-inside list-disc ">
                <li>Upload an image to Sanity.</li>
                <li>
                  Generate images with AI, which will be integrated into the
                  frontend (optional, not mandatory to save to Sanity). If you
                  have the expertise and wish to save them in Sanity, you are
                  welcome to do so.
                </li>
              </ul>
            </div>
          </div>
        </section>
        <section className="bg-white px-4 py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h2>Getting started</h2>
            <ol className="list-decimal">
              <li>
                <strong>Repository Setup:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    Designate one team member to fork the repository to their
                    GitHub account.
                  </li>
                  <li>
                    The initial person adds team members as contributors/admins
                    to the repository.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Clone Repository:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    Each team member clones the repository from the initial
                    person&#39;s GitHub account to their local machine.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Environment Configuration:</strong>
                <ul>
                  <li>
                    Create a <code>.env</code> file in the root folder.
                  </li>
                  <li>
                    Copy and paste the example <code>.env</code> configuration
                    from the Discord or relevant source.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Channel Creation:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    Set up communication channels or groups within your chosen
                    communication platform (e.g., Discord channels) to
                    facilitate collaboration among team members.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Dependency Installation:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    Open a terminal inside the root folder of the project.
                  </li>
                  <li>
                    Run <code className="bg-gray-200 p-1">npm install</code> to
                    install project dependencies.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Start Development Server:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    After the installation is complete, run{' '}
                    <code className="bg-gray-200 p-1">npm run dev</code> to
                    start the development server.
                  </li>
                </ul>
              </li>

              <li>
                <strong>Testing and Verification:</strong>
                <ul className="list-inside list-disc">
                  <li>
                    Open your web browser and navigate to{' '}
                    <a
                      href="http://localhost:3000/studio"
                      target="_blank"
                      className="bg-gray-200 p-1"
                    >
                      http://localhost:3000/studio
                    </a>
                    .
                  </li>
                  <li>
                    Click on &quot;Fairytales&quot; to verify that you have
                    three documents containing three Norwegian fairytales.
                  </li>
                </ul>
              </li>
            </ol>
          </div>
        </section>
        <section className="bg-white py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h2>Step-by-Step Guide: Generating a Sanity Studio Project ID</h2>

            <ol className="mt-4 list-decimal">
              <li>
                <strong>Sign Up for Sanity.io</strong>
                <p className="mt-2">
                  Visit the{' '}
                  <a
                    href="https://www.sanity.io/"
                    target="_blank"
                    className="underline"
                  >
                    Sanity.io website
                  </a>
                  .
                </p>
                <p className="mt-2">
                  Click on &#34;Get Started&#34; to create your account. Provide
                  your name, email, and a secure password.
                </p>
              </li>

              <li>
                <strong className="">Log In to Your Sanity.io Account</strong>
                <p className="mt-2">
                  After signing up, log in to your Sanity.io account using your
                  credentials.
                </p>
              </li>

              <li>
                <strong className="">Create a New Project</strong>
                <p className="mt-2">
                  Once logged in, click on the &#34;New Project&#34; button to
                  initiate the project creation process.
                </p>
              </li>

              <li>
                <strong className="">Configure Your Project</strong>
                <p className="mt-2">
                  Choose a project name, billing plan, and any additional
                  options as needed. Confirm your selections.
                </p>
              </li>

              <li>
                <strong className="">Project Setup</strong>
                <p className="mt-2">
                  Select a project template or start with a blank project based
                  on your requirements.
                </p>
              </li>

              <li>
                <strong className="">Wait for Project Creation</strong>
                <p className="mt-2">
                  Sanity.io will create your project. This may take a few
                  moments, so please be patient.
                </p>
              </li>

              <li>
                <strong className="">Access the Project ID</strong>
                <p className="mt-2">
                  Upon project creation, you&#39;ll find your unique project ID
                  in the project dashboard or settings. It&#39;s typically a
                  long string of characters.
                </p>
              </li>
              <li>
                <strong>
                  Add the Project ID to Your Environment Configuration
                </strong>
                <p className="mt-2">
                  Copy and paste your project ID into the{' '}
                  <code className="bg-gray-200 p-1">.env</code> file.
                </p>
              </li>
            </ol>

            <p className="font-semiborder-l-primary mt-8 bg-green-500 p-4 text-center text-white">
              Congratulations! You&#39;ve successfully generated a Sanity Studio
              Project ID.
            </p>

            <p className="mt-4">
              For any updates or changes to the process, please refer to the{' '}
              <a
                href="https://www.sanity.io/docs"
                target="_blank"
                className="underline"
              >
                Sanity.io documentation
              </a>
              .
            </p>
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
              <code className="bg-gray-200 p-1">
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
