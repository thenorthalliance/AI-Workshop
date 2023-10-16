import { BookIcon } from '@sanity/icons'
import OpenAISanity from 'components/OpenAISanity/OpenAISanity'
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
      description: 'The title of the fairytale',
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
      name: 'coverImage',
      title: 'Cover Image',
      type: 'image',
      description:
        'Add a cover image to the fairytale page, try generating something cool with Dall-E or Midjourney',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),

    // Custom component for OpenAI
    defineField({
      name: 'generateText',
      title: 'OpenAI text generator',
      type: 'string',
      description:
        'Use an existing fairytale promt to generate a new fairytale, or write your own prompt',
      components: {
        input: OpenAISanity,
      },
    }),
    defineField({
      name: 'story',
      title: 'Story',
      type: 'text',
      description: 'Placeholder text for the fairytale',
    }),
    // If you are done, feel free to add more fields and experiment!
  ],
  preview: {
    select: {
      title: 'title',
      media: 'coverImage',
    },
    prepare({ title, media }) {
      return { title, media, subtitle: 'Fairytale' }
    },
  },
})
