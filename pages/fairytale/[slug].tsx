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

  const generateNewStoryImage = async () => {
    // Use a try catch to fetch an image from the endpoint ‘/api/openai-image’
    // The endpoint expects a POST request with a JSON body containing a prompt (imagePrompt)
    // The response is a JSON object with a text property
    // Set the storyImage state to the text property of the response object
    // If the response object does not have a text property, log an error to the console

    const prompt = `I am a placeholder prompt, I should be replaced with something more interesting`
  }

  const handleGenerateImage = async () => {
    // Add your code here
  }

  return (
    <main className="p-10">
      <h1>{title}</h1>
      <button
        className="m-5 rounded-md bg-slate-500 px-2"
        onClick={handleGenerateImage}
      >
        Generate image
      </button>
      {isLoading && <p>Loading...</p>}

      {storyImage && <Image src={storyImage} alt="" width={256} height={256} />}
    </main>
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
