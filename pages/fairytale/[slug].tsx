/* eslint-disable @next/next/no-img-element */
import { getAllFairytaleSlugs, getFairytale } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import { GiSwordwoman } from 'react-icons/gi'
import { RiLoader2Line } from 'react-icons/ri'

interface PageProps {
  fairytale: iFairytale
}

interface Query {
  [key: string]: string
}

const generateNewStoryImage = async () => {}

const handleGenerateStory = async () => {
  //
}

const FairtalePage = ({ fairytale }: PageProps) => {
  return (
    <>
      <main className="pb-10">
        <button
          className="bg-slate-500 m-5 rounded-md px-2"
          onClick={handleGenerateStory}
        >
          Generate text
        </button>
        {/* 
      Example on how you can import the image:
            <Image
            src={urlForImage(data.image).url()}
            alt=""
            className="""
          />
      */}
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
