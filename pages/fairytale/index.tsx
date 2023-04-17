import { getAllFairytales } from 'lib/sanity.client'
import { urlForImage } from 'lib/sanity.image'
import { iFairytale } from 'lib/sanity.queries'
import { GetStaticProps } from 'next'
import Image from 'next/image'
import Link from 'next/link'

interface PageProps {
  fairytales: iFairytale[]
}

const StoriesPage = ({ fairytales }: PageProps) => {
  return (
    <>
      <main className="min-h-screen p-4">
        <section className="">
          <h1 className="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text py-10  text-center xl:text-8xl lg:text-8xl sm:text-7xl md:text-7xl font-extrabold text-transparent">
            Eventyr
          </h1>

          {/* 
            Map through an array:  {array.map((itemInsideArray) => itemInsideArray.title)}
            
          Link to slug page:
              <Link href={`/fairytale/${fairytale.slug}`}>
              <h2> Espen askeladden </h2>
              </Link>

            */}
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const [fairytales = []] = await Promise.all([getAllFairytales()])

  return {
    props: {
      fairytales: fairytales,
    },
  }
}

export default StoriesPage
