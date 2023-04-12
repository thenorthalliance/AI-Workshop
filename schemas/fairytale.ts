import { BookIcon } from '@sanity/icons'
import CustomInput from 'components/atoms/CustomInput'
import { format, parseISO } from 'date-fns'
import { defineField, defineType } from 'sanity'

/**
 * This file is the schema definition for a post.
 *
 * Here you'll be able to edit the different fields that appear when you 
 * create or edit a post in the studio.
 * 
 * Here you can see the different schema types that are available:

  https://www.sanity.io/docs/schema-types

 */

export default defineType({
  name: 'fairytale',
  title: 'Fairytale',
  icon: BookIcon,
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the post',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description:
        'Some frontends will require a slug to be set to be able to show the post',
      options: {
        source: 'title',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      description:
        'Short description to use on the homepage, max 200 characters',
      type: 'text',
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'text',
      description: 'The story of the fairytale',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description: 'This is the image that will be shown on the post page',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'generateText',
      title: 'Generate Text',
      type: 'text',
      rows: 3,
      components: {
        input: CustomInput,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'coverImage',
    },
    prepare({ title, media }) {
      return { title, media, subtitle: 'Fairytale' }
    },
  },
})
