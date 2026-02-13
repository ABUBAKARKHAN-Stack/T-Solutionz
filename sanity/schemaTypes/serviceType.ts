import { iconsMap } from '@/lib/icon-mapper'
import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const serviceType = defineType({
  name: 'service',
  title: 'Service',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: "string",
      options: {
        layout: "dropdown",
        list: Object.keys(iconsMap),
      },
      validation: (R) => R.required().error('Icon is required'),
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (R) => R.required().min(5).max(100).warning('Keep the title concise and meaningful'),
    }),
    defineField({
      name: 'overviewLabel',
      title: 'Overview Label',
      type: 'string',
      validation: (R) => R.required().min(5).max(50).warning('Keep the overvie label concise and meaningful'),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required().error('Service image is required'),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alternative text',
          type: 'string',
          validation: (R) => R.required().min(5).max(150).error('Alt text is required for accessibility'),
        }),
      ],
    }),
    defineField({
      name: 'featured',
      title: 'Featured',
      type: 'boolean',
      initialValue: false
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (R) => R.required().min(20).max(300).warning('Short description should be concise'),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      validation: (R) => R.required().min(50).warning('Provide enough detail for the service'),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (R) => R.required().min(1).max(10).error('Add at least 1 tag, maximum 10'),
    }),
    defineField({
      name: 'deliverables',
      title: 'Deliverables',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (R) => R.min(1).error('Provide at least one deliverable'),
    }),
    defineField({
      name: 'technologies',
      title: 'Technologies',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'name', title: 'Name', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'category', title: 'Category', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'featured', title: 'Featured', type: 'boolean' }),
            defineField({ name: 'description', title: 'Description', type: 'text', validation: (R) => R.required() }),
          ],
        }),
      ],
      validation: (R) => R.min(1).error('Add at least one technology'),
    }),
    defineField({
      name: 'approach',
      title: 'Approach',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'step', title: 'Step', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', validation: (R) => R.required() }),
          ],
        }),
      ],
      validation: (R) => R.min(1).error('Add at least one approach step'),
    }),
    defineField({
      name: 'differentiators',
      title: 'Differentiators',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'title', title: 'Title', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'description', title: 'Description', type: 'text', validation: (R) => R.required() }),
          ],
        }),
      ],
      validation: (R) => R.min(1).error('Add at least one differentiator'),
    }),
    defineField({
      name: 'faqs',
      title: 'FAQs',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({ name: 'q', title: 'Question', type: 'string', validation: (R) => R.required() }),
            defineField({ name: 'a', title: 'Answer', type: 'text', validation: (R) => R.required() }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      description: "description",
      media: 'image',
    },


  },
})
