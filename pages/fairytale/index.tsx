import { PortableText } from '@portabletext/react'
import { getAllFairytales } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useState } from 'react'

interface PageProps {
  fairytales: iFairytale[]
}

const StoriesPage = ({ fairytales }: PageProps) => {
  console.log('fairytales', fairytales)

  // const [prompt, setPrompt] = useState('')
  // const [answer, setAnswer] = useState('')
  // const [responses, setResponses] = useState([])

  // const callApi = async () => {
  //   const response = await fetch('/api/openai', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ prompt: prompt }),
  //   }).then((res) => res.json())

  //   if (response.text) {
  //     setAnswer(response.text)
  //     setResponses([...responses, response.text])
  //   } else {
  //     console.log('error')
  //   }
  // }

  // const handleSubmission = (e: FormEvent<HTMLFormElement>) => {
  //   e.preventDefault()
  //   callApi()
  // }

  return (
    <>
      <main className="min-h-screen p-4">
        <section className="">
          <h1 className="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text py-10  text-center xl:text-8xl lg:text-8xl sm:text-7xl md:text-7xl font-extrabold text-transparent">
            Eventyr
          </h1>

          {/* <form onSubmit={handleSubmission} className="flex flex-col gap-4">
            <div className="flex flex-col">
              <label htmlFor="prompt" className="">
                Kunstig intelligens påminnelse
              </label>
              <textarea
                name="prompt"
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="px-2 accent-primary ring ring-black"
              />
            </div>
            <div className="flex justify-end">
              <button className="px-4 py-2 text-white bg-black">
                Prompt AI
              </button>
            </div>
          </form>
          <div className="p-4 mt-4 ring ring-black">
            <h2>AI&#39;s response</h2>
            <p>{answer}</p>
          </div> */}

          <ul className="grid grid-cols-2 lg:grid-cols-3 gap-4 pt-4 mx-12">
            {fairytales.map((fairytale) => (
              <li key={fairytale._id} className="relative bg-white text-black">
                <div className="relative aspect-1 ">
                  <Image
                    src={urlForImage(fairytale.coverImage)
                      .height(400)
                      .width(400)
                      .fit('crop')
                      .url()}
                    fill
                    alt=""
                  />
                </div>
                <div className="p-4">
                  {/* <PortableText value={fairytale.content} /> */}
                  <Link
                    href={`/fairytale/${fairytale.slug}`}
                    className="hover:underline"
                  >
                    <h3> {fairytale.title}</h3>
                  </Link>
                  <p>{fairytale.excerpt}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  // const [settings, posts = [], fairytales = []] = await Promise.all([
  //   getSettings(),
  //   getAllPosts(),
  //   getAllFairytaleSlugs(),
  // ])

  const [fairytales = []] = await Promise.all([getAllFairytales()])

  return {
    props: {
      // posts,
      // settings,
      fairytales: fairytales,
    },
  }
}

export default StoriesPage
