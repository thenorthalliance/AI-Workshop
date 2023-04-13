import Link from 'next/link'
import React from 'react'

const Links = () => {
  return (
    <main>
      <ul className="grid grid-cols-4">
        <li className="bg-slate-200 aspect-1 text-center justify-center m-4">
          <Link
            className="align-middle"
            href="https://www.sanity.io/docs/create-a-sanity-project"
          >
            Create a Sanity project
          </Link>
        </li>
        <li className="bg-slate-200 aspect-1 text-center justify-center m-4">
          <Link href="https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3">
            Sanity studio custom component
          </Link>
        </li>
        <li className="bg-slate-200 aspect-1 text-center justify-center m-4">
          <Link href="https://platform.openai.com/docs/api-reference/making-requests">
            OpenAI - requests
          </Link>
        </li>
      </ul>
    </main>
  )
}

export default Links
