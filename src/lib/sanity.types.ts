import type { PortableTextBlock } from '@portabletext/types'

export interface SanityDocument {
  _id: string
  _createdAt?: string
  _updatedAt?: string
  _rev?: string
  _type: string
}

export interface Slug {
  _type: 'slug'
  current: string
}

export interface Image {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
  hotspot?: {
    x: number
    y: number
    height: number
    width: number
  }
  crop?: {
    top: number
    bottom: number
    left: number
    right: number
  }
  alt?: string
  caption?: string
}

export interface Author {
  _id: string
  name: string
  slug?: Slug
  image?: Image
  bio?: string
}

export interface Journal extends SanityDocument {
  _type: 'journal'
  title: string
  slug: Slug
  date: string
  cadence: 'daily' | 'weekly' | 'monthly'
  tags?: string[]
  excerpt?: string
  body: PortableTextBlock[]
  author?: Author
  publishedAt?: string
  seoDescription?: string
  dayNumber?: number
  stats?: {
    marketing?: number
    building?: number
    conversationsTotal?: number
    conversationsQualified?: number
    conversationsGhost?: number
    conversationsWrongFit?: number
    goalProgress?: number
    runwayCurrent?: number
    runwayTotal?: number
  }
}

export interface Essay extends SanityDocument {
  _type: 'essay'
  title: string
  slug: Slug
  date: string
  tags?: string[]
  excerpt?: string
  coverImage?: Image
  body: PortableTextBlock[]
  author?: Author
  publishedAt?: string
  seoDescription?: string
}

export interface Poem extends SanityDocument {
  _type: 'poem'
  title: string
  slug: Slug
  date: string
  form: 'ghazal' | 'freeVerse' | 'storyPoem'
  language: 'hi' | 'ur' | 'en'
  tags?: string[]
  audioFile?: string
  body: PortableTextBlock[]
  transliteration?: PortableTextBlock[]
  translation?: PortableTextBlock[]
  author?: Author
  publishedAt?: string
  seoDescription?: string
}

export interface Story extends SanityDocument {
  _type: 'story'
  title: string
  slug: Slug
  date: string
  language: 'hi' | 'en'
  tags?: string[]
  excerpt?: string
  coverImage?: Image
  body: PortableTextBlock[]
  author?: Author
  publishedAt?: string
  seoDescription?: string
}

export interface Podcast extends SanityDocument {
  _type: 'podcast'
  title: string
  slug: Slug
  date: string
  tags?: string[]
  excerpt?: string
  videoUrl?: string
  coverImage?: Image
  duration?: string
  author?: Author
  publishedAt?: string
  seoDescription?: string
}

export interface SiteSettings extends SanityDocument {
  _type: 'siteSettings'
  title: string
  description?: string
  siteUrl: string
  ogImage?: Image
  newsletterEnabled?: boolean
  newsletterApiKey?: string
  newsletterFormId?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
    instagram?: string
  }
}