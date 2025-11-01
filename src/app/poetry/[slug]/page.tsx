import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar, Music } from 'lucide-react'
import Container from '@/components/Container'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { poemBySlugQuery } from '@/lib/sanity.queries'
import type { Poem } from '@/lib/sanity.types'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'

const poetryComponents = {
  block: {
    normal: ({ children }: { children?: ReactNode }) => (
      <p className="mb-6 whitespace-pre-line leading-relaxed">{children}</p>
    ),
  },
}

interface PoemPageProps {
  params: Promise<{ slug: string }>
}

async function getPoem(slug: string) {
  const poem = await client.fetch<Poem>(poemBySlugQuery, { slug })
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
    title: poem.title,
    description: poem.seoDescription || `${poem.form === 'ghazal' ? 'Ghazal' : 'Poem'}: ${poem.title}`,
  }
}

export default async function PoemPage({ params }: PoemPageProps) {
  const { slug } = await params
  const poem = await getPoem(slug)

  if (!poem) {
    notFound()
  }

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
        {/* Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded">
              {languageLabels[poem.language]}
            </span>
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
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <time dateTime={poem.date}>
                {format(new Date(poem.date), 'MMMM d, yyyy')}
              </time>
            </div>
            {poem.author && <span>• {poem.author.name}</span>}
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

        {/* Poem Body */}
        <div className="prose prose-lg max-w-none mb-8 font-hindi text-center">
          <PortableText value={poem.body} components={poetryComponents} />
        </div>

        {/* Transliteration */}
        {poem.transliteration && (
          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h2 className="text-xl font-bold mb-4">Transliteration</h2>
            <div className="prose prose-lg max-w-none italic text-center">
              <PortableText value={poem.transliteration} components={poetryComponents} />
            </div>
          </div>
        )}

        {/* Translation */}
        {poem.translation && (
          <div className="mb-8 p-6 bg-gray-50 dark:bg-gray-900 rounded-lg">
            <h2 className="text-xl font-bold mb-4">English Translation</h2>
            <div className="prose prose-lg max-w-none text-center">
              <PortableText value={poem.translation} components={poetryComponents} />
            </div>
          </div>
        )}
      </article>
    </Container>
  )
}
