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
                  <Link
                    href={`/fairytale/${fairytale.slug}`}
                    className="hover:underline"
                  >
                    <h3> {fairytale.title}</h3>
                  </Link>

                  {/* <p>{fairytale.excerpt}</p> */}
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
  const [fairytales = []] = await Promise.all([getAllFairytales()])

  return {
    props: {
      fairytales: fairytales,
    },
  }
}

export default StoriesPage
