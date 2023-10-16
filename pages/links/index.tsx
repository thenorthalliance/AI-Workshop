import Link from 'next/link'
import { FaExternalLinkAlt } from 'react-icons/fa'

const linkElements = [
  {
    label: 'Sanity - Create a Sanity project',
    href: 'https://www.sanity.io/docs/create-a-sanity-project',
    description: 'How to create a Sanity project from scratch',
    tags: ['sanity', 'cms'],
  },
  {
    label: 'Sanity - Create custom studio component',
    href: 'https://www.sanity.io/guides/your-first-input-component-for-sanity-studio-v3',
    description: 'How to create a custom component for Sanity studio',
    tags: ['sanity', 'studio', 'cms'],
  },
  {
    label: 'Sanity - Groq Query Language',
    href: 'https://www.sanity.io/docs/query-cheat-sheet',
    description: 'Sanity Groq query cheat sheet',
    tags: ['sanity', 'groq', 'cms'],
  },
  {
    label: 'OpenAI - requests',
    href: 'https://platform.openai.com/docs/api-reference/making-requests',
    description: 'OpenAI - requests documentation',
    tags: ['openai'],
  },
  {
    label: 'OpenAI - Images',
    href: 'https://platform.openai.com/docs/guides/images',
    description: 'Documentation for OpenAI image generation',
    tags: ['openai', 'images'],
  },
  {
    label: 'Next.js - documentation',
    href: 'https://nextjs.org/docs',
    description:
      'Documentation for Next.js - We are using Pages Directory Routing',
    tags: ['nextjs', 'framework'],
  },
  {
    label: 'TailwindCSS',
    href: 'https://tailwindcss.com/',
    description: 'TailwindCSS documentation',
    tags: ['tailwind', 'css'],
  },
  {
    label: 'React Icons',
    href: 'https://react-icons.github.io/react-icons/',
    description: 'Documentation for React Icons',
    tags: ['react', 'icons'],
  },
  {
    label: 'React Aria',
    href: 'https://www.npmjs.com/package/react-aria',
    description: 'Package for React Aria - Accessible UI primitives for React',
    tags: ['react', 'aria', 'headless', 'components'],
  },
]

const Links = () => {
  return (
    <>
      <main className="h-screen w-full bg-stone-100 p-8">
        <section className="grid grid-cols-12 gap-8">
          {linkElements.map(({ label, href, description, tags }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              className="col-span-6 rounded-xl bg-white p-6 drop-shadow-md hover:drop-shadow-lg lg:col-span-4"
            >
              <div className="flex items-center gap-3">
                <FaExternalLinkAlt />
                <strong>{label}</strong>
              </div>
              <p>{description}</p>
              <ul className="mt-1 flex gap-2">
                {tags.map((tag) => (
                  <li
                    key={tag}
                    className="bg-green-200 px-1 py-0.5 text-xs capitalize text-gray-500"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </a>
          ))}
        </section>
      </main>
    </>
  )
}

export default Links
