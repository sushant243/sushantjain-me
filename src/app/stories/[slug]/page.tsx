import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar } from 'lucide-react'
import Container from '@/components/Container'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { storyBySlugQuery } from '@/lib/sanity.queries'
import type { StoryBySlugQueryResult } from '@/lib/sanity.types'
import type { Metadata } from 'next'

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

  const languageLabels: Record<string, string> = {
    hi: 'हिंदी',
    ur: 'اردو',
    en: 'English',
  }

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
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

        {/* Story Content */}
        {story.body && (
          <div className="prose prose-lg max-w-none mb-12 font-hindi">
            <PortableText value={story.body} />
          </div>
        )}
      </article>
    </Container>
  )
}
