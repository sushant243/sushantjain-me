import Container from '@/components/Container'
import Link from 'next/link'
import { Calendar, Music } from 'lucide-react'
import { format } from 'date-fns'
import { client } from '@/lib/sanity.client'
import { poemsQuery } from '@/lib/sanity.queries'
import type { PoemsQueryResult } from '@/lib/sanity.types'

async function getPoems() {
  const poems = await client.fetch<PoemsQueryResult>(poemsQuery)
  return poems
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

export default async function PoetryPage() {
  const poems = await getPoems()
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Poetry | कविताएं</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Ghazals, nazms, and poems in Hindi and Urdu. Exploring emotions, philosophy,
            and the human experience through verse.
          </p>
        </div>

        <div className="grid gap-6">
          {poems.map((poem) => (
            <article
              key={poem._id}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/poetry/${poem.slug?.current}`} className="block">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h2 className="text-2xl font-bold font-hindi mb-1">
                      {poem.title}
                    </h2>
                    {poem.language !== 'en' && (
                      <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                        {poem.title} (Romanized)
                      </p>
                    )}
                  </div>
                  <div className="flex gap-2">
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
                      <span className="px-2 py-1 text-xs bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded">
                        <Music className="w-3 h-3 inline" /> Audio
                      </span>
                    )}
                  </div>
                </div>

                {poem.tags && poem.tags.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
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

                {poem.date && (
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={poem.date}>
                      {format(new Date(poem.date), 'MMMM d, yyyy')}
                    </time>
                    {poem.author && (
                      <span className="ml-2">• {poem.author}</span>
                    )}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        {poems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Poetry collection coming soon!
            </p>
          </div>
        )}
      </div>
    </Container>
  )
}
