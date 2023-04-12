import { PortableText } from '@portabletext/react'
import { getAllFairytaleSlugs, getFairytale } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface PageProps {
  fairytale: iFairytale
}

interface Query {
  [key: string]: string
}

const FairtalePage = ({ fairytale }: PageProps) => {
  const [story, setStory] = useState()
  const [title, setTitle] = useState()

  const generateNewStory = async () => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'Generate a story based on the following story',
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

  const generateNewTitle = async () => {
    try {
      const response = await fetch('/api/openai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: 'Generate a title based on the following story',
        }),
      }).then((res) => res.json())

      if (response.text) {
        setTitle(response.text)
      } else {
        console.log('error')
      }
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    generateNewStory()
    generateNewTitle()
  }, [fairytale])

  return (
    <>
      <Head>
        <title>{fairytale.title}</title>
      </Head>
      <main className="grid grid-cols-12 gap-4 p-4">
        <div className="relative col-span-3 aspect-square">
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
        <div className="col-span-3">
          <h1 className="capitalize">{fairytale.title}</h1>
          <p>{fairytale.story}</p>
        </div>
        <div className="col-span-3">
          <h2>{title}</h2>
          <p>{story}</p>
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
