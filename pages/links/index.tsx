import Link from 'next/link'
import React from 'react'

const linkElements = [
  {
    label: 'Sanity',
    href: 'https://www.sanity.io/',
    description: 'Sanity is the platform for structured content',
  },
  {
    label: 'Custom Sanity Studio component',
    href: 'https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3',
    description: 'Sanity studio custom component',
  },
  {
    label: 'OpenAI',
    href: 'https://openai.com/',
    description: 'OpenAI is an AI research and deployment company',
  },
  {
    label: 'OpenAI - requests',
    href: 'https://platform.openai.com/docs/api-reference/making-requests',
    description: 'OpenAI - requests',
  },
  {
    label: 'OpenAI - Images',
    href: 'https://platform.openai.com/docs/guides/images',
    description: 'OpenAI - Images',
  },
  {
    label: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    description: 'TailwindCSS is a utility-first CSS framework',
  },
  {
    label: 'NoA Ignite',
    href: 'https://www.noaignite.no/',
    description: 'NoA Ignite is a digital agency',
  },
]

const Links = () => {
  return (
    <main className="min-h-screen p-4">
      <div className="grid grid-cols-12 gap-4">
        {linkElements.map(({ label, href, description }) => {
          return (
            <Link
              className="col-span-4 rounded bg-white p-4 drop-shadow"
              key={label}
              href={href}
              target="_blank"
            >
              <div>
                {label}
                <p>{description}</p>
              </div>
            </Link>
          )
        })}

        {/* <li>
          <Link
            className="w-6/12 h-20 pt-5 m-auto text-xl text-center text-white bg-black shadow-md rounded-xl hover:shadow-xl"
            href="https://www.sanity.io/docs/create-a-sanity-project"
          >
            <p>Create a Sanity project</p>
          </Link>
        </li>

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
        </Link> */}
      </div>
    </main>
  )
}

export default Links
