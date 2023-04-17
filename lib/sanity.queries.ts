import { groq } from 'next-sanity'

const fairytaleFields = groq`
  _id,
  title,
  excerpt,
  content,
  "slug": slug.current,
  coverImage,
`

export const allFairyTalesQuery = groq`
*[_type == "fairytale"]{
  ${fairytaleFields}
}`

export const fairytaleSlugsQuery = groq`
*[_type == "fairyTale" && defined(slug.current)][].slug.current
`

export interface Post {
  _id: string
  title?: string
  coverImage?: any
  date?: string
  excerpt?: string
  slug?: string
  content?: any
}

export interface iFairytale {
  _id: string
  title?: string
  coverImage?: any
  slug?: string
  content?: any
  story?: string
  generateText?: string
}
