/* eslint-disable @next/next/no-img-element */
import { getAllFairytaleSlugs, getFairytale } from 'lib/sanity.client'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import { useState } from 'react'

interface PageProps {
  fairytale: iFairytale
}

interface Query {
  [key: string]: string
}

const FairtalePage = ({ fairytale }: PageProps) => {
  // destructure the fairytale object
  const { title } = fairytale

  const [storyImage, setStoryImage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleGenerateStory = async () => {
    // Add your code here
  }

  const generateNewStoryImage = async () => {
    // Add code here to generate a new story image based on sanity data, be creative!
    // Use values from the fairytale object to generate a prompt, you might have to get creative here.
    // The prompt should be a string that is passed to the openai-image API.
    // The API will return a text string that you can use to set the storyImage state.
    // The API is not perfect, so you might have to try a few times to get a good result.
    // const imagePrompt = 'I am a placeholder prompt, I should be replaced with something more interesting'
  }

  const handleGenerateImage = async () => {
    // Add your code here
  }

  return (
    <>
      <main className="p-10">
        <h1>{title}</h1>
        <button
          className="m-5 rounded-md bg-slate-500 px-2"
          onClick={handleGenerateImage}
        >
          Generate image
        </button>
        {isLoading && <p>Loading...</p>}

        {storyImage && (
          <Image src={storyImage} alt="" width={256} height={256} />
        )}
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps, Query> = async (ctx) => {
  // Get the slug from the context
  const { params = {} } = ctx

  // Fetch the fairytale with the given slug
  const [fairytale] = await Promise.all([getFairytale(params.slug)])

  // If no fairytale was found, return 404
  if (!fairytale) {
    return {
      notFound: true,
    }
  }

  // Return the fairytale for Next.js to use
  return {
    props: {
      fairytale,
      // revalidate every two hours
      revalidate: 60 * 60 * 2,
    },
  }
}

export const getStaticPaths = async () => {
  // Fetch all fairytale slugs
  const slugs = await getAllFairytaleSlugs()

  return {
    paths: slugs?.map(({ slug }) => `/fairytale/${slug}`) || [],
    fallback: 'blocking',
  }
}

export default FairtalePage
