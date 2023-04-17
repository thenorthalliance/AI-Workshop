import NavigationBar from 'components/molecules/NavigationBar'
import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <>
      <NavigationBar />
      <main className="w-full mt-10">
        <ul className="flex flex-col gap-20 ">
          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://www.sanity.io/docs/create-a-sanity-project"
          >
            <li className="">
              <p>Create a Sanity project</p>
            </li>
          </Link>

          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3"
          >
            <li> Sanity studio custom component</li>
          </Link>

          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://platform.openai.com/docs/api-reference/making-requests"
          >
            <li>OpenAI - requests</li>
          </Link>

          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://tailwindcss.com/"
          >
            <li> TailwindCSS</li>
          </Link>
          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://platform.openai.com/docs/guides/images"
          >
            <li>OpenAI - Images</li>
          </Link>
        </ul>
      </main>
    </>
  )
}

export default Links
