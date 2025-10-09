import { defineField, defineType } from 'sanity'

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Site Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'siteUrl',
      title: 'Site URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ogImage',
      title: 'Default OG Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'newsletterEnabled',
      title: 'Newsletter Enabled',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'newsletterApiKey',
      title: 'ConvertKit API Key',
      type: 'string',
      description: 'ConvertKit API key for newsletter integration',
    }),
    defineField({
      name: 'newsletterFormId',
      title: 'ConvertKit Form ID',
      type: 'string',
      description: 'ConvertKit form ID for newsletter signup',
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'twitter',
          title: 'Twitter/X',
          type: 'url',
        }),
        defineField({
          name: 'github',
          title: 'GitHub',
          type: 'url',
        }),
        defineField({
          name: 'linkedin',
          title: 'LinkedIn',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})