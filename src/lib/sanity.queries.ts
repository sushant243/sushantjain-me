import { groq } from 'next-sanity'

// Journal Queries
export const journalsQuery = groq`
  *[_type == "journal" && defined(publishedAt)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    cadence,
    tags,
    excerpt,
    publishedAt,
    "author": author->name
  }
`

export const journalBySlugQuery = groq`
  *[_type == "journal" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    cadence,
    dayNumber,
    tags,
    excerpt,
    body,
    stats,
    publishedAt,
    seoDescription,
    "author": author->{
      name,
      image,
      bio
    }
  }
`

// Essay Queries
export const essaysQuery = groq`
  *[_type == "essay" && defined(publishedAt)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    tags,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->name
  }
`

export const essayBySlugQuery = groq`
  *[_type == "essay" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    tags,
    excerpt,
    coverImage,
    body,
    publishedAt,
    seoDescription,
    "author": author->{
      name,
      image,
      bio
    }
  }
`

// Poem Queries
export const poemsQuery = groq`
  *[_type == "poem" && defined(publishedAt)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    form,
    language,
    tags,
    "audioFile": audioFile.asset->url,
    publishedAt,
    "author": author->name
  }
`

export const poemBySlugQuery = groq`
  *[_type == "poem" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    form,
    language,
    tags,
    "audioFile": audioFile.asset->url,
    body,
    transliteration,
    translation,
    publishedAt,
    seoDescription,
    "author": author->{
      name,
      image,
      bio
    }
  }
`

// Story Queries
export const storiesQuery = groq`
  *[_type == "story" && defined(publishedAt)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    language,
    tags,
    excerpt,
    coverImage,
    publishedAt,
    "author": author->name
  }
`

export const storyBySlugQuery = groq`
  *[_type == "story" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    language,
    tags,
    excerpt,
    coverImage,
    body,
    publishedAt,
    seoDescription,
    "author": author->{
      name,
      image,
      bio
    }
  }
`

// Podcast Queries
export const podcastsQuery = groq`
  *[_type == "podcast" && defined(publishedAt)] | order(date desc) {
    _id,
    title,
    slug,
    date,
    tags,
    excerpt,
    videoUrl,
    coverImage,
    duration,
    publishedAt,
    "author": author->name
  }
`

export const podcastBySlugQuery = groq`
  *[_type == "podcast" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    date,
    tags,
    excerpt,
    videoUrl,
    coverImage,
    duration,
    publishedAt,
    seoDescription,
    "author": author->{
      name,
      image,
      bio
    }
  }
`

// Latest content for homepage
export const latestContentQuery = groq`
{
  "journals": *[_type == "journal" && defined(publishedAt)] | order(date desc)[0...4] {
    _id,
    _type,
    title,
    slug,
    date,
    excerpt,
    "author": author->name
  },
  "essays": *[_type == "essay" && defined(publishedAt)] | order(date desc)[0...4] {
    _id,
    _type,
    title,
    slug,
    date,
    excerpt,
    coverImage,
    "author": author->name
  },
  "podcasts": *[_type == "podcast" && defined(publishedAt)] | order(date desc)[0...4] {
    _id,
    _type,
    title,
    slug,
    date,
    excerpt,
    videoUrl,
    coverImage,
    duration,
    "author": author->name
  },
  "poems": *[_type == "poem" && defined(publishedAt)] | order(date desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    date,
    language,
    "author": author->name
  },
  "stories": *[_type == "story" && defined(publishedAt)] | order(date desc)[0...3] {
    _id,
    _type,
    title,
    slug,
    date,
    excerpt,
    coverImage,
    "author": author->name
  }
}
`

// Site Settings Query
export const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0] {
    title,
    description,
    siteUrl,
    ogImage,
    newsletterEnabled,
    socialLinks
  }
`

// Query for tags
export const allTagsQuery = groq`
{
  "journalTags": array::unique(*[_type == "journal" && defined(tags)].tags[]),
  "essayTags": array::unique(*[_type == "essay" && defined(tags)].tags[]),
  "poemTags": array::unique(*[_type == "poem" && defined(tags)].tags[]),
  "storyTags": array::unique(*[_type == "story" && defined(tags)].tags[])
}
`

// Content by tag
export const contentByTagQuery = groq`
  *[defined(tags) && $tag in tags && defined(publishedAt)] | order(date desc) {
    _id,
    _type,
    title,
    slug,
    date,
    tags,
    excerpt,
    "author": author->name
  }
`