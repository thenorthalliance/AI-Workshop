import { apiVersion, dataset, projectId, useCdn } from 'lib/sanity.api'
import {
  allFairyTalesQuery,
  fairytaleSlugsQuery,
  iFairytale,
  Post,
} from 'lib/sanity.queries'
import { createClient } from 'next-sanity'

/**
 * Checks if it's safe to create a client instance, as `@sanity/client` will throw an error if `projectId` is false
 */
const client = projectId
  ? createClient({ projectId, dataset, apiVersion, useCdn })
  : null

export async function getAllFairytaleSlugs(): Promise<Pick<Post, 'slug'>[]> {
  // get all the slugs from sanity
  if (client) {
    const slugs = (await client.fetch<string[]>(fairytaleSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllFairytales(): Promise<iFairytale[]> {
  // get all the fairytale from sanity
  if (client) {
    return (await client.fetch(allFairyTalesQuery)) || []
  }
  return []
}

export async function getFairytale(slug: string) {
  // get the fairytale by slug from sanity

  // We are currently fetching, _id, title, slug, coverImage, story, but you can fetch whatever you want from sanity. Let's say you had a value called `author` you could fetch that by adding it to the query like so: `author`
  const results = await client.fetch(
    `*[_type == "fairytale" && slug.current == $slug]{ _id, title, 'slug': slug.current, coverImage, story}[0]`,
    {
      slug,
    }
  )
  return results
}
