import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar } from 'lucide-react'
import Image from 'next/image'
import Container from '@/components/Container'
import PortableText from '@/components/PortableText'
import Breadcrumb from '@/components/Breadcrumb'
import BackLink from '@/components/BackLink'
import RelatedContent from '@/components/RelatedContent'
import { client, urlFor } from '@/lib/sanity.client'
import { storyBySlugQuery, storiesQuery } from '@/lib/sanity.queries'
import type { StoryBySlugQueryResult, Story } from '@/lib/sanity.types'
import type { Metadata } from 'next'
import type { PortableTextBlock } from '@portabletext/types'

interface StoryPageProps {
  params: Promise<{ slug: string }>
}

async function getStory(slug: string) {
  const story = await client.fetch<StoryBySlugQueryResult>(storyBySlugQuery, { slug })
  return story
}

export async function generateMetadata({ params }: StoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const story = await getStory(slug)

  if (!story) {
    return {
      title: 'Story Not Found',
    }
  }

  return {
    title: story.title || 'Story',
    description: story.seoDescription || story.excerpt || 'Story',
  }
}

export default async function StoryPage({ params }: StoryPageProps) {
  const { slug } = await params
  const story = await getStory(slug)

  if (!story) {
    notFound()
  }

  // Fetch all stories for related content
  const allStories = await client.fetch<Story[]>(storiesQuery)

  const languageLabels: Record<string, string> = {
    hi: 'हिंदी',
    ur: 'اردو',
    en: 'English',
  }

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Stories', href: '/stories' },
            { label: story.title || 'Story' },
          ]}
        />

        {/* Header */}
        <header className="mb-8 mt-12">
          <div className="flex items-center gap-2 mb-4">
            {story.language && (
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                {languageLabels[story.language]}
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-hindi">
            {story.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {story.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={story.date}>
                  {format(new Date(story.date), 'MMMM d, yyyy')}
                </time>
              </div>
            )}
            {story.author?.name && <span>• {story.author.name}</span>}
          </div>

          {story.tags && story.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {story.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {/* Cover Image */}
        {story.coverImage && (
          <div className="mb-8 overflow-hidden rounded-lg">
            <Image
              src={urlFor(story.coverImage).width(1200).fit('max').url()}
              alt={story.coverImage.alt || story.title || 'Story cover'}
              width={1200}
              height={800}
              className="w-full h-auto"
              priority
            />
            {story.coverImage.caption && (
              <p className="mt-2 text-sm text-center text-gray-600 dark:text-gray-400 italic">
                {story.coverImage.caption}
              </p>
            )}
          </div>
        )}

        {/* Story Content */}
        {story.body && (
          <div className="mb-12 font-hindi">
            <PortableText value={story.body as PortableTextBlock[]} />
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <BackLink href="/stories" label="Back to Stories" />
        </div>

        {/* Related Stories */}
        <RelatedContent
          currentSlug={story.slug?.current || ''}
          currentTags={story.tags || []}
          allItems={allStories
            .filter(s => s.slug?.current && s.title && s.date)
            .map((s) => ({
              slug: s.slug!.current!,
              title: s.title!,
              description: s.excerpt || undefined,
              date: s.date!,
              tags: s.tags || [],
            }))}
          sectionName="Stories"
          sectionHref="/stories"
        />
      </article>
    </Container>
  )
}
