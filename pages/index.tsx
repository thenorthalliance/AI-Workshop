import { PreviewSuspense } from '@sanity/preview-kit'
import { getAllPosts, getSettings } from 'lib/sanity.client'
import { Post, Settings } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { lazy } from 'react'

interface PageProps {
  posts: Post[]
  settings: Settings
  preview: boolean
  token: string | null
}

interface Query {
  [key: string]: string
}

interface PreviewData {
  token?: string
}

export default function Page(props: PageProps) {
  const { posts, settings, preview, token } = props

  return (
    <>
      <Head>
        <title>She Workshop</title>
        <meta name="description" content="She Workshop" />
      </Head>
      <main>
        <section className="flex min-h-screen items-center justify-center bg-black p-4 text-white">
          <h1>SHE WORKSHOP</h1>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<
  PageProps,
  Query,
  PreviewData
> = async (ctx) => {
  const { preview = false, previewData = {} } = ctx

  const [settings, posts = []] = await Promise.all([
    getSettings(),
    getAllPosts(),
  ])

  return {
    props: {
      posts,
      settings,
      preview,
      token: previewData.token ?? null,
    },
  }
}
