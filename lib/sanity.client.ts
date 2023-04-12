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
  if (client) {
    const slugs = (await client.fetch<string[]>(fairytaleSlugsQuery)) || []
    return slugs.map((slug) => ({ slug }))
  }
  return []
}

export async function getAllFairytales(): Promise<iFairytale[]> {
  if (client) {
    return (await client.fetch(allFairyTalesQuery)) || []
  }
  return []
}

export async function getFairytale(slug: string) {
  const results = await client.fetch(
    `*[_type == "fairytale" && slug.current == $slug]{ _id, title, 'slug': slug.current, coverImage, excerpt, story}[0]`,
    {
      slug,
    }
  )
  return results
}
