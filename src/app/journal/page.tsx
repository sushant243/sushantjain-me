import Container from '@/components/Container'
import EmailCaptureForm from '@/components/EmailCaptureForm'
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
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-brand-text-primary">Public Journal</h1>
          <p className="text-xl text-brand-text-secondary leading-relaxed">
            Daily reflections, experiments, and honest lessons from building Lessgo.ai — no polish, just real progress.
          </p>
        </div>

        {journals.length === 0 ? (
          <div className="mt-12 max-w-2xl">
            <div className="bg-white border border-gray-300 rounded-lg p-8">
              <h2 className="text-2xl font-bold mb-4 text-brand-text-primary">Coming Soon</h2>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                I&apos;m documenting my journey learning SaaS marketing in public. The first field notes are being written right now.
              </p>
              <p className="text-brand-text-secondary leading-relaxed mb-6">
                Want to get notified when I publish? Subscribe below to get weekly field notes delivered to your inbox.
              </p>
              <EmailCaptureForm />
            </div>
          </div>
        ) : (
          <div className="space-y-8">
            {journals.map((journal) => (
              <article
                key={journal._id}
                className="border-b border-gray-200 pb-8 last:border-0"
              >
                <Link
                  href={`/journal/${journal.slug?.current}`}
                  className="group block"
                >
                  <h2 className="text-2xl font-semibold mb-2 text-brand-text-primary group-hover:text-brand-coral transition-colors">
                    {journal.title}
                  </h2>
                  <div className="flex items-center gap-4 text-sm text-brand-text-secondary mb-3">
                    {journal.date && (
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <time dateTime={journal.date}>
                          {format(new Date(journal.date), 'MMMM d, yyyy')}
                        </time>
                      </div>
                    )}
                    {journal.cadence && (
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span className="capitalize">{journal.cadence}</span>
                      </div>
                    )}
                  </div>
                  {journal.excerpt && (
                    <p className="text-brand-text-secondary">
                      {journal.excerpt}
                    </p>
                  )}
                  {journal.tags && journal.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {journal.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-gray-100 rounded-full text-brand-text-secondary"
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
        )}
      </div>
    </Container>
  )
}
