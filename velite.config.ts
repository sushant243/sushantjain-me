import { defineConfig, defineCollection, s } from 'velite'

const journal = defineCollection({
  name: 'Journal',
  pattern: 'journal/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      slug: s.path(),
      description: s.string().optional(),
      tags: s.array(s.string()).optional(),
      draft: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(data => ({
      ...data,
      slug: data.slug.replace('journal/', ''),
      permalink: `/journal/${data.slug.replace('journal/', '')}`,
    }))
})

const essays = defineCollection({
  name: 'Essay',
  pattern: 'essays/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      date: s.isodate(),
      slug: s.path(),
      description: s.string(),
      tags: s.array(s.string()).optional(),
      featured: s.boolean().default(false),
      draft: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(data => ({
      ...data,
      slug: data.slug.replace('essays/', ''),
      permalink: `/essays/${data.slug.replace('essays/', '')}`,
    }))
})

const poetry = defineCollection({
  name: 'Poem',
  pattern: 'poetry/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      titleHindi: s.string().optional(),
      date: s.isodate(),
      slug: s.path(),
      language: s.enum(['hindi', 'urdu', 'english']).default('hindi'),
      type: s.enum(['ghazal', 'nazm', 'poem']).default('poem'),
      description: s.string().optional(),
      draft: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(data => ({
      ...data,
      slug: data.slug.replace('poetry/', ''),
      permalink: `/poetry/${data.slug.replace('poetry/', '')}`,
    }))
})

const stories = defineCollection({
  name: 'Story',
  pattern: 'stories/**/*.mdx',
  schema: s
    .object({
      title: s.string(),
      titleHindi: s.string().optional(),
      date: s.isodate(),
      slug: s.path(),
      description: s.string(),
      language: s.enum(['hindi', 'english']).default('hindi'),
      draft: s.boolean().default(false),
      body: s.mdx(),
    })
    .transform(data => ({
      ...data,
      slug: data.slug.replace('stories/', ''),
      permalink: `/stories/${data.slug.replace('stories/', '')}`,
    }))
})

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { journal, essays, poetry, stories },
  mdx: {
    rehypePlugins: [],
    remarkPlugins: [],
  },
})