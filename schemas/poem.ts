import { defineField, defineType } from 'sanity'

export const poem = defineType({
  name: 'poem',
  title: 'Poem',
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
      name: 'form',
      title: 'Poetic Form',
      type: 'string',
      options: {
        list: [
          { title: 'Ghazal', value: 'ghazal' },
          { title: 'Free Verse', value: 'freeVerse' },
          { title: 'Story Poem', value: 'storyPoem' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Language',
      type: 'string',
      options: {
        list: [
          { title: 'Hindi', value: 'hi' },
          { title: 'Urdu', value: 'ur' },
          { title: 'English', value: 'en' },
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
      name: 'audioFile',
      title: 'Audio Recording',
      type: 'file',
      description: 'Upload an MP3 file of the poem being recited',
      options: {
        accept: 'audio/*',
      },
      fields: [
        {
          name: 'description',
          type: 'string',
          title: 'Description',
        },
      ],
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'poemBlock',
      validation: (Rule) => Rule.required(),
      description: 'The poem content - paste from Google Docs, line breaks preserved',
    }),
    defineField({
      name: 'transliteration',
      title: 'Transliteration',
      type: 'poemBlock',
      description: 'Roman script version - paste directly, line breaks preserved',
    }),
    defineField({
      name: 'translation',
      title: 'Translation',
      type: 'poemBlock',
      description: 'English translation - paste directly, line breaks preserved',
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
      language: 'language',
      form: 'form',
    },
    prepare({ title, author, date, language, form }) {
      const formattedDate = new Date(date).toLocaleDateString()
      const langMap: { [key: string]: string } = {
        hi: '🇮🇳 Hindi',
        ur: '🇵🇰 Urdu',
        en: '🇬🇧 English',
      }
      return {
        title,
        subtitle: `${langMap[language] || language} • ${form} • ${formattedDate} • ${author || 'No author'}`,
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
    {
      title: 'Language',
      name: 'language',
      by: [{ field: 'language', direction: 'asc' }],
    },
  ],
})