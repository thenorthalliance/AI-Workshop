import NoaIgnite from 'lib/icons/NoaIgnite'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
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

  const code3 = `
// JavaScript code
const response = await fetch('/api/openai-image', {
  method: 'POST',
  headers: {
      'Content-Type': 'application/json',
  },
  body: JSON.stringify({ prompt: imagePrompt }),
}).then((res) => res.json())

if (response.text) {
  setStoryImage(response.text)
} else {
  console.log('error')
}
`
  const [cheat1Visible, setCheat1Visible] = useState(false)
  const [cheat2Visible, setCheat2Visible] = useState(false)
  const [cheat3Visible, setCheat3Visible] = useState(false)
  const cheatCode1 = process.env.NEXT_PUBLIC_CHEAT_CODE_1
  const cheatCode2 = process.env.NEXT_PUBLIC_CHEAT_CODE_2
  const cheatCode3 = process.env.NEXT_PUBLIC_CHEAT_CODE_3

  function checkCheatCode(e) {
    e.preventDefault()
    const input1 = document.getElementById('cheatInput1') as HTMLInputElement
    if (input1?.value === cheatCode1) {
      setCheat1Visible(true)
    }
    const input2 = document.getElementById('cheatInput2') as HTMLInputElement
    if (input2?.value === cheatCode2) {
      setCheat2Visible(true)
    }
    const input3 = document.getElementById('cheatInput3') as HTMLInputElement
    if (input3?.value === cheatCode3) {
      setCheat3Visible(true)
    }
  }

  return (
    <>
      <Head>
        <title>AI Workshop</title>
        <meta name="description" content="AI Workshop" />
      </Head>
      <main className="overflow-x-clip bg-black/80 leading-relaxed text-white">
        <section className="flex min-h-[764px] flex-col items-center justify-center px-4">
          <div className="flex flex-col items-center gap-2 p-8 ring ring-white">
            <h1>AI WORKSHOP</h1>
            <h2>Trondheim</h2>
            <h3>16.10.23</h3>
          </div>
          <div className="flex flex-col items-center justify-center gap-2 fill-white pt-8">
            <p>Made by</p>
            <a
              href="https://www.noaignite.no/"
              className="fill-white"
              target="_blank"
            >
              <span className="fill-white">
                <NoaIgnite />
              </span>
            </a>
          </div>
          <section className="flex flex-col items-center justify-center pt-10">
            <p>Powered by</p>
            <div className="flex gap-4 pt-4">
              <a
                href="https://nextjs.org/"
                className="underline"
                target="_blank"
              >
                Next.js
              </a>
              <a
                href="https://www.sanity.io/"
                className="underline"
                target="_blank"
              >
                Sanity
              </a>
              <a
                href="https://openai.com/"
                className="underline"
                target="_blank"
              >
                OpenAI
              </a>
            </div>
          </section>
          <section className="flex flex-col items-center gap-4 pt-4">
            <h3>
              <strong>Resources:</strong>
            </h3>
            <a
              href="https://github.com/thenorthalliance/AI-Workshop"
              className="underline"
              target="_blank"
            >
              Github Repository - Template me!
            </a>
            <a
              href="https://discord.gg/Quf3vNej4"
              className="underline"
              target="_blank"
            >
              Discord Server
            </a>
            <a
              href="https://www.sanity.io/docs"
              className="underline"
              target="_blank"
            >
              Sanity Documentation
            </a>
            <a
              href="https://chat.openai.com/"
              className="underline"
              target="_blank"
            >
              ChatGPT
            </a>
          </section>
        </section>
        <section className="bg-purple-500/90 px-8 py-20">
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
        <section className="bg-white px-8 py-20 text-black">
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
              <details className="my-4 bg-purple-100 p-4 ring ring-purple-500">
                <summary>
                  <strong>How to generate a Sanity Studio Project ID</strong>
                </summary>
                <section className="p-4 text-black">
                  <div className="mx-auto max-w-2xl">
                    <div>
                      <p>
                        <strong>Disclaimer!</strong> Okay, hold your horses. In
                        order to access to the Sanity studio, you need to
                        generate a project ID(we need this for our .env file).
                        Follow the steps below to generate a project ID, it will
                        create a new repository for you, but you can discard it
                        after you have generated the project ID.
                      </p>
                    </div>
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
                          Click on &#34;Get Started&#34; to create your account.
                          Provide your name, email, and a secure password.
                        </p>
                      </li>

                      <li>
                        <strong className="">
                          Log In to Your Sanity.io Account
                        </strong>
                        <p className="mt-2">
                          After signing up, log in to your Sanity.io account
                          using your credentials.
                        </p>
                      </li>

                      <li>
                        <strong className="">Create a New Project</strong>
                        <p className="mt-2">
                          Once logged in, click on the &#34;New Project&#34;
                          button to initiate the project creation process.
                        </p>
                      </li>

                      <li>
                        <strong className="">Configure Your Project</strong>
                        <p className="mt-2">
                          Choose a project name, billing plan, and any
                          additional options as needed. Confirm your selections.
                        </p>
                      </li>

                      <li>
                        <strong className="">Project Setup</strong>
                        <p className="mt-2">
                          Select a project template or start with a blank
                          project based on your requirements.
                        </p>
                      </li>

                      <li>
                        <strong className="">Wait for Project Creation</strong>
                        <p className="mt-2">
                          Sanity.io will create your project. This may take a
                          few moments, so please be patient.
                        </p>
                      </li>

                      <li>
                        <strong className="">Access the Project ID</strong>
                        <p className="mt-2">
                          Upon project creation, you&#39;ll find your unique
                          project ID in the project dashboard or settings.
                          It&#39;s typically a long string of characters.
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
                      Congratulations! You&#39;ve successfully generated a
                      Sanity Studio Project ID.
                    </p>

                    <p className="mt-4">
                      For any updates or changes to the process, please refer to
                      the{' '}
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
              </details>

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
                    Here you will get a CORS error, navigate to your sanity
                    studio management page
                    <a href="https://www.sanity.io/manage">
                      sanity management page
                    </a>
                    , select your project, navigate to the API tab. Add{' '}
                    <code className="bg-gray-200 p-1">
                      http://localhost:3000
                    </code>{' '}
                    to the CORS Origins list.
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

        <section className="px-8 py-20">
          <div className="mx-auto max-w-2xl">
            <h2 className="text-purple-500 lg:text-7xl">
              <strong>The Challange</strong>
            </h2>
            <div className="pt-4">
              <strong>Let&#39;s get started!</strong>
            </div>
            <div className="pt-4">
              <h3>Task 1</h3>
              <div className="pb-2">
                <p>
                  Integrate the pre-built React component within the studio to
                  harness the power of OpenAI text generation. You can locate
                  this component in the file at{' '}
                  <code className="bg-gray-200 p-0.5 text-black">
                    /components/OpenAISanity/OpenAISanity.tsx
                  </code>
                </p>
              </div>
              <ol className="list-decimal">
                <li>
                  <p>
                    Ensure that you&#39;ve updated the
                    <code className="bg-gray-200 p-0.5 text-black">
                      const callApi
                    </code>{' '}
                    function to fetch data from OpenAI (refer to the code for
                    guidance).
                  </p>
                </li>
                <li>
                  <p>
                    Within the{' '}
                    <code className="bg-gray-200 p-0.5 text-black">
                      generateStory
                    </code>{' '}
                    function, make sure to invoke the{' '}
                    <code className="bg-gray-200 p-0.5 text-black">
                      callApi
                    </code>{' '}
                    function you previously defined.
                  </p>
                </li>
              </ol>
              <div className="pt-4">
                <p>
                  Create a new fairytale and take note of the OpenAI text
                  generator input field, which you can use for testing.
                  Don&#39;t forget to publish any changes made in the Sanity
                  Studio – the publish button can be found at the bottom of the
                  page and is denoted by a green icon.
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

        <section className="bg-white px-8 py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h3>Task 2</h3>
            <div className="pb-2">
              <p>
                Complete the skeleton for the slug page, which involves
                retrieving data from Sanity and connecting it to the fairytale
                interface. You can access this file at{' '}
                <code className="bg-gray-200 p-0.5 text-black">
                  pages/fairytale/slug.tsx
                </code>
              </p>
            </div>
            <ol className="list-decimal">
              <li>
                <p>
                  On the frontend, display a cover image, the generated text,
                  and the title. You might have to take a closer look at the{' '}
                  <code className="bg-gray-200 p-0.5 text-black">
                    getFairytale(params.slug)
                  </code>{' '}
                  file to see how the GROQ query is structured, it might be
                  missing something important.
                </p>
              </li>
              <li>
                <p>
                  As a bonus, add some styling to enhance the page&apos;s
                  appearance.
                </p>
              </li>
            </ol>
            <small>
              Don&apos;t forget to publish any changes you make in Sanity Studio
              by clicking the green button located at the bottom of the page.
            </small>
          </div>
        </section>
        <section className="px-8 py-20">
          <div className="mx-auto max-w-2xl">
            <h3>Task 3</h3>
            <div className="pb-2">
              <p>
                Continuing on the [slug] page. Generate an image with the OpenAI
                api. This image will not be added to sanity, it will only be
                added to the frontend.
              </p>
            </div>
            Replace the image prompt text with your own custom prompt in the
            function{' '}
            <code className="overflow-x-scroll bg-gray-200 p-1 text-black">
              generateNewStoryImage
            </code>
            . The image(s) should reflect the story you have generated.
            <div>
              <small>
                Example:{' '}
                <div>
                  <code className="bg-gray-200 p-1 text-black">
                    `An image with fairytale style, with the following story:
                    *insert generatedText*.`
                  </code>
                </div>
              </small>
            </div>
            <div className="pt-6">
              <p>
                <strong>Hint:</strong> You can copy and tweak the same function
                that you used in task 1.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-white px-8 py-20 text-black">
          <div className="mx-auto max-w-2xl">
            <h3>Task 4</h3>
            <div className="pb-2">
              <p>
                Crafting effective prompts for the OpenAI API can make a
                significant difference in the quality and relevance of the
                generated content. Here&apos;s a general approach to consider:
              </p>
            </div>
            <ol className="list-decimal">
              <li>
                <p>
                  <strong>Clarity and Specificity:</strong> Be clear and
                  specific in your prompts to get the desired results. Vague
                  prompts may lead to less relevant outputs
                </p>
              </li>
              <li>
                <p>
                  <strong>Length and Detail:</strong> Experiment with prompt
                  length and detail, finding the right balance between context
                  and brevity.
                </p>
              </li>
              <li>
                <p>
                  <strong>Tone and Language:</strong> Use positive or negative
                  language to influence the tone of the output. Inject creative
                  language to inspire creativity.
                </p>
              </li>
              <li>
                <p>
                  <strong>Iteration:</strong> Don&apos;t hesitate to try
                  variations and synonyms in your prompts. Model responses can
                  vary.
                </p>
              </li>
              <li>
                <p>
                  <strong>Balance Control:</strong> Strike a balance between
                  providing specific instructions and allowing creative freedom.
                </p>
              </li>
              <li>
                <p>
                  <strong>Conditional Statements:</strong> Use conditionals in
                  prompts to guide the model&apos;s behavior.
                </p>
              </li>
              <li>
                <p>
                  <strong>Human Feedback:</strong> Consider a human feedback
                  loop to improve results and train the model.
                </p>
              </li>
            </ol>
          </div>
        </section>
        <section className="bg-purple-500 px-8 py-20">
          <div className="mx-auto max-w-2xl">
            <h3>Bonus:</h3>
            <ul className="list-disc pt-6">
              <li>
                <p>
                  Create a new Sanity Component and generate the image in the
                  studio.
                </p>
              </li>
              <li>
                <p>
                  Use the{' '}
                  <code className="bg-gray-200 p-1 text-black">
                    &#39;/api/openai-gpt&#39;
                  </code>{' '}
                  {}
                  endpoint, instead of the one you used in task 1, to generate a
                  new story. The endpoint requires a different input format, see
                  the code for more details.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section className="px-8 py-20">
          <div className="mx-auto max-w-2xl">
            <h3>Task 5 - Presentations</h3>
            <div>
              <p>
                Each team will present their work and results in a 5-minute
                presentation, with the flexibility to use their preferred
                format.
              </p>
            </div>
          </div>
        </section>
        <section className="px-4 py-20 ">
          <div className="mx-auto flex max-w-2xl flex-col gap-8">
            <h3>Example code</h3>

            <details className="bg-purple-500 p-4 ring ring-purple-500">
              <summary>
                <strong>Show me code!</strong>
              </summary>
              <form onSubmit={checkCheatCode}>
                <label htmlFor="cheatInput">Cheat code</label>
                <div>
                  <input
                    id="cheatInput1"
                    type="text"
                    placeholder="Type code to unlock hint"
                    className="border border-white bg-white p-1 text-black valid:bg-green-200 invalid:bg-red-200"
                    pattern={process.env.NEXT_PUBLIC_CHEAT_CODE_1}
                  />
                  <button className="border border-white p-1">Check</button>
                </div>
              </form>
              {cheat1Visible && (
                <>
                  <p>Example 1</p>
                  <pre
                    className="overflow-x-scroll whitespace-pre bg-gray-200 p-2 text-black "
                    title="Code snippet"
                  >
                    <code>{code}</code>
                  </pre>
                </>
              )}
              <form onSubmit={checkCheatCode}>
                <label htmlFor="cheatInput">Cheat code</label>
                <div>
                  <input
                    id="cheatInput2"
                    type="text"
                    placeholder="Type code to unlock hint"
                    className="border border-white bg-white p-1 text-black valid:bg-green-200 invalid:bg-red-200"
                    pattern={process.env.NEXT_PUBLIC_CHEAT_CODE_2}
                  />
                  <button className="border border-white p-1">Check</button>
                </div>
              </form>
              {cheat2Visible && (
                <>
                  <p>Example 2</p>
                  <pre
                    className="overflow-x-scroll whitespace-pre bg-gray-200 p-2 text-black"
                    title="Code snippet"
                  >
                    <code>{code2}</code>
                  </pre>
                </>
              )}
              <form onSubmit={checkCheatCode}>
                <label htmlFor="cheatInput3">Cheat code</label>
                <div>
                  <input
                    id="cheatInput3"
                    type="text"
                    placeholder="Type code to unlock hint"
                    className="border border-white bg-white p-1 text-black valid:bg-green-200 invalid:bg-red-200"
                    pattern={process.env.NEXT_PUBLIC_CHEAT_CODE_3}
                  />
                  <button className="border border-white p-1">Check</button>
                </div>
              </form>
              {cheat3Visible && (
                <>
                  <p>Example 3</p>
                  <pre
                    className="overflow-x-scroll whitespace-pre bg-gray-200 p-2 text-black"
                    title="Code snippet"
                  >
                    <code>{code3}</code>
                  </pre>
                </>
              )}
            </details>
          </div>
        </section>
      </main>
    </>
  )
}
