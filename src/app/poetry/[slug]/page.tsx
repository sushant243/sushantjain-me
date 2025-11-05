import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar, Music } from 'lucide-react'
import Container from '@/components/Container'
import Breadcrumb from '@/components/Breadcrumb'
import BackLink from '@/components/BackLink'
import RelatedContent from '@/components/RelatedContent'
import { client } from '@/lib/sanity.client'
import { poemBySlugQuery, poemsQuery } from '@/lib/sanity.queries'
import type { PoemBySlugQueryResult, Poem } from '@/lib/sanity.types'
import type { Metadata } from 'next'
import PoemContent from './PoemContent'

interface PoemPageProps {
  params: Promise<{ slug: string }>
}

async function getPoem(slug: string) {
  const poem = await client.fetch<PoemBySlugQueryResult>(poemBySlugQuery, { slug })
  return poem
}

export async function generateMetadata({ params }: PoemPageProps): Promise<Metadata> {
  const { slug } = await params
  const poem = await getPoem(slug)

  if (!poem) {
    return {
      title: 'Poem Not Found',
    }
  }

  return {
    title: poem.title || 'Poem',
    description: poem.seoDescription || 'Poem',
  }
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { slug } = await params
  const poem = await getPoem(slug)

  if (!poem) {
    notFound()
  }

  // Fetch all poems for related content
  const allPoems = await client.fetch<Poem[]>(poemsQuery)

  const languageLabels: Record<string, string> = {
    hi: 'हिंदी',
    ur: 'اردو',
    en: 'English',
  }

  const formLabels: Record<string, string> = {
    ghazal: 'ग़ज़ल',
    freeVerse: 'कविता',
    storyPoem: 'कथा काव्य',
  }

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Poetry', href: '/poetry' },
            { label: poem.title || 'Poem' },
          ]}
        />

        {/* Header */}
        <header className="mb-8 mt-12">
          <div className="flex items-center gap-2 mb-4">
            {poem.language && (
              <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
                {languageLabels[poem.language]}
              </span>
            )}
            {poem.form && (
              <span className="px-2 py-1 text-xs bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded">
                {formLabels[poem.form]}
              </span>
            )}
            {poem.audioFile && (
              <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded flex items-center gap-1">
                <Music className="w-3 h-3" /> Audio
              </span>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-4 font-hindi">
            {poem.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
            {poem.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={poem.date}>
                  {format(new Date(poem.date), 'MMMM d, yyyy')}
                </time>
              </div>
            )}
            {poem.author?.name && <span>• {poem.author.name}</span>}
          </div>

          {poem.tags && poem.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {poem.tags.map((tag) => (
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

        {/* Audio Player */}
        {poem.audioFile && (
          <div className="mb-8 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <audio controls className="w-full">
              <source src={poem.audioFile} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}

        {/* Poem Content with Toggle Sections */}
        <PoemContent
          body={poem.body}
          transliteration={poem.transliteration}
          translation={poem.translation}
        />

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
          <BackLink href="/poetry" label="Back to Poetry" />
        </div>

        {/* Related Poems */}
        <RelatedContent
          currentSlug={poem.slug?.current || ''}
          currentTags={poem.tags || []}
          allItems={allPoems
            .filter(p => p.slug?.current && p.title && p.date)
            .map((p) => ({
              slug: p.slug!.current!,
              title: p.title!,
              description: undefined,
              date: p.date!,
              tags: p.tags || [],
            }))}
          sectionName="Poems"
          sectionHref="/poetry"
        />
      </article>
    </Container>
  )
}
