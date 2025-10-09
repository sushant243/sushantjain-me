import Container from '@/components/Container'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'
import { format } from 'date-fns'
import { client } from '@/lib/sanity.client'
import { journalsQuery } from '@/lib/sanity.queries'
import type { Journal } from '@/lib/sanity.types'

async function getJournals() {
  const journals = await client.fetch<Journal[]>(journalsQuery)
  return journals
}

export default async function JournalPage() {
  const journals = await getJournals()
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Public Journal</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Building in public. Raw thoughts, lessons learned, and insights from my journey
            as a founder and engineer.
          </p>
        </div>

        <div className="space-y-8">
          {journals.map((journal) => (
            <article
              key={journal._id}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
            >
              <Link
                href={`/journal/${journal.slug.current}`}
                className="group block"
              >
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {journal.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <time dateTime={journal.date}>
                      {format(new Date(journal.date), 'MMMM d, yyyy')}
                    </time>
                  </div>
                  {journal.cadence && (
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span className="capitalize">{journal.cadence}</span>
                    </div>
                  )}
                </div>
                {journal.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400">
                    {journal.excerpt}
                  </p>
                )}
                {journal.tags && journal.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {journal.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-800 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </Link>
            </article>
          ))}
        </div>

        {journals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No journal entries yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Container>
  )
}