import { DocumentTextIcon } from '@sanity/icons'
import { defineArrayMember, defineField, defineType } from 'sanity'

export const portfolioType = defineType({
  name: 'portfolio',
  title: 'Portfolio Project',
  type: 'document',
  icon: DocumentTextIcon,
  fields: [

    //* Basic Info
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (R) => R.required().min(5).max(100),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'client',
      title: 'Client Name',
      type: 'string',
      validation: (R) => R.required(),
    }),

    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
      validation: (R) =>
        R.required().regex(/^\d{4}$/, {
          name: 'year',
          invert: false,
        }).error('Enter a valid 4-digit year'),
    }),

    //* Media
    defineField({
      name: 'image',
      title: 'Project Image',
      type: 'image',
      options: { hotspot: true },
      validation: (R) => R.required(),
      fields: [
        defineField({
          name: 'alt',
          title: 'Alt Text',
          type: 'string',
          validation: (R) => R.required(),
        }),
      ],
    }),

    //* Descriptions
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      validation: (R) => R.required().min(20).max(300),
    }),

    defineField({
      name: 'longDescription',
      title: 'Long Description',
      type: 'text',
      validation: (R) => R.required().min(50),
    }),

    //* Tags (Tech Stack)
    defineField({
      name: 'tags',
      title: 'Tags / Technologies',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (R) => R.required().min(1).max(10),
    }),

    //* Results
    defineField({
      name: 'results',
      title: 'Project Results',
      type: 'array',
      of: [defineArrayMember({ type: 'string' })],
      validation: (R) => R.min(1).error('Add at least one measurable result'),
    }),

    //* Testimonial
    defineField({
      name: 'testimonial',
      title: 'Client Testimonial',
      type: 'object',
      fields: [
        defineField({
          name: 'quote',
          title: 'Quote',
          type: 'text',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'name',
          title: 'Client Name',
          type: 'string',
          validation: (R) => R.required(),
        }),
        defineField({
          name: 'role',
          title: 'Client Role',
          type: 'string',
          validation: (R) => R.required(),
        }),
      ],
    }),

    //* Optional Featured Toggle
    defineField({
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'client',
      media: 'image',
    },
  },
})
