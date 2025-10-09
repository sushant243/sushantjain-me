import { defineField, defineType } from 'sanity'

export const journal = defineType({
  name: 'journal',
  title: 'Journal Entry',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'cadence',
      title: 'Cadence',
      type: 'string',
      options: {
        list: [
          { title: 'Daily', value: 'daily' },
          { title: 'Weekly', value: 'weekly' },
          { title: 'Monthly', value: 'monthly' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
      rows: 3,
      description: 'A short summary of the journal entry',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO Description',
      type: 'text',
      rows: 2,
      description: 'Description for search engines',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      date: 'date',
      cadence: 'cadence',
    },
    prepare({ title, author, date, cadence }) {
      const formattedDate = new Date(date).toLocaleDateString()
      return {
        title,
        subtitle: `${cadence} • ${formattedDate} • ${author || 'No author'}`,
      }
    },
  },
  orderings: [
    {
      title: 'Date, New',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
    {
      title: 'Date, Old',
      name: 'dateAsc',
      by: [{ field: 'date', direction: 'asc' }],
    },
  ],
})