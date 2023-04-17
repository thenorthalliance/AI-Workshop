import createImageUrlBuilder from '@sanity/image-url'
import { dataset, projectId } from 'lib/sanity.api'

const imageBuilder = createImageUrlBuilder({ projectId, dataset })

// This function will be used to generate the URL for the image
export const urlForImage = (source: any) =>
  imageBuilder.image(source).auto('format').fit('max')
