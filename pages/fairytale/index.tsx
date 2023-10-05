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
          <h1 className="bg-gradient-to-r from-pink-300 to-purple-600 bg-clip-text py-10 text-center font-extrabold text-transparent sm:text-7xl md:text-7xl lg:text-8xl xl:text-8xl">
            Eventyr
          </h1>
          <div className="grid grid-cols-4 gap-4">
            {fairytales.map((fairytale, i) => (
              <Link href={`/fairytale/${fairytale.slug}`} key={i}>
                <div className="relative aspect-1">
                  <Image
                    src={urlForImage(fairytale.coverImage).url()}
                    alt=""
                    className="h-full w-full rounded-lg object-cover"
                    fill
                  />
                </div>
                <h2 className="text-center text-2xl font-bold text-gray-800">
                  {fairytale.title}
                </h2>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  // Fetch all fairytale slugs
  const [fairytales = []] = await Promise.all([getAllFairytales()])

  // Return the slugs for Next.js to use
  return {
    props: {
      fairytales: fairytales,
    },
  }
}

export default StoriesPage
