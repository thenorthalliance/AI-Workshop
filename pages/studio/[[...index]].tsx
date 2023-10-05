import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import { StudioLayout, StudioProvider } from 'sanity'
import config from 'sanity.config'

export default function StudioPage() {
  return (
    <>
      <Head>
        <NextStudioHead favicons={false} />
      </Head>

      <main className="relative flex h-[95vh] w-full flex-1 flex-col">
        <NextStudio config={config}>
          <StudioProvider config={config}>
            <StudioLayout />
          </StudioProvider>
        </NextStudio>
      </main>
    </>
  )
}
