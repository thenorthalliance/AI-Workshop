/* eslint-disable @next/next/no-img-element */
import { getAllFairytaleSlugs, getFairytale } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { GiSwordwoman } from 'react-icons/gi'
import { RiLoader2Line } from 'react-icons/ri'
interface PageProps {
  fairytale: iFairytale
}

interface Query {
  [key: string]: string
}

const FairtalePage = ({ fairytale }: PageProps) => {
  const [story, setStory] = useState()
  const [storyImage, setStoryImage] = useState('')

  const [isLoading, setIsLoading] = useState(false)

  const generateNewStory = async () => {
    const newStoryPromt = `Generate a fairytale based on the title ${fairytale.title}, make the main character a woman and write it in norwegian`
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: newStoryPromt,
          maxTokens: 100,
        }),
      }).then((res) => res.json())

      if (response.text) {
        setStory(response.text)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const generateNewStoryImage = async () => {
    const newStoryPromt = story
      ? `Generate a fairytale image, based on the story: ${story}. Make sure the main character is a woman`
      : `Generate a fairytale image, based on the title: ${fairytale.title}. Make sure the main character is a woman`

    console.log('newStoryPromt', newStoryPromt)
    try {
      const response = await fetch('/api/openai-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: newStoryPromt,
        }),
      }).then((res) => res.json())

      if (response.text) {
        setStoryImage(response.text)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.error(err)
    }
  }

  const handleGenerateStory = async () => {
    setIsLoading(true)
    await generateNewStory()
    await generateNewStoryImage()
    setIsLoading(false)
  }

  return (
    <>
      <Head>
        <title>{fairytale.title}</title>
      </Head>
      <main className="pb-10">
        <div className="aspect-w-16 aspect-h-4 relative">
          <Image
            src={urlForImage(fairytale.coverImage).fit('fill').url()}
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <h1 className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text py-10  text-center xl:text-7xl lg:text-6xl sm:text-4xl md:text-5xl font-extrabold text-transparent">
          {fairytale.title}
        </h1>

        <div className="my-5 w-full text-center ">
          <button
            onClick={handleGenerateStory}
            className="group relative mb-2 mr-2 inline-flex items-center justify-center overflow-hidden rounded-lg bg-gradient-to-br from-pink-500 to-orange-400 p-0.5 text-sm font-medium text-gray-900 hover:text-white focus:outline-none focus:ring-4 focus:ring-pink-200 group-hover:from-pink-500 group-hover:to-orange-400 dark:text-white dark:focus:ring-pink-800"
          >
            <span className="relative flex items-center gap-2 rounded-md bg-white px-5 py-2.5 text-lg font-bold text-black transition-all duration-75  ease-in group-hover:bg-opacity-0">
              <GiSwordwoman />
              Womanize
            </span>
          </button>
        </div>
        <div className="grid gap-4 p-4 xl:grid-cols-2">
          <div className="flex flex-col gap-10 whitespace-pre-wrap rounded-lg bg-gray-100 p-4">
            <h3 className="text-center ">Norsk eventyr</h3>
            <p>{fairytale.story}</p>
          </div>
          <div className="relative flex flex-col items-center gap-4 whitespace-pre-wrap rounded-lg bg-gray-100 p-4">
            <h3>OpenAI</h3>
            {isLoading ? (
              <div className="flex items-center gap-2">
                <RiLoader2Line className="animate-spin text-2xl" />
                <strong>Generating Story...</strong>
              </div>
            ) : (
              <div>
                {story ? (
                  <div className="flex flex-col items-center gap-4">
                    {storyImage && (
                      <Image src={storyImage} alt="" width={256} height={256} />
                    )}
                    <p>{story}</p>
                  </div>
                ) : (
                  <p>Click the button above to generate a new story</p>
                )}
              </div>
            )}
          </div>
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  const { params = {} } = ctx

  const [fairytale] = await Promise.all([getFairytale(params.slug)])

  if (!fairytale) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      fairytale,
      // revalidate every two hours
      revalidate: 60 * 60 * 2,
    },
  }
}

export const getStaticPaths = async () => {
  const slugs = await getAllFairytaleSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/fairytale/${slug}`) || [],
    fallback: 'blocking',
  }
}

export default FairtalePage
