import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar, Clock } from 'lucide-react'
import Container from '@/components/Container'
import { PortableText } from '@portabletext/react'
import { client } from '@/lib/sanity.client'
import { journalBySlugQuery } from '@/lib/sanity.queries'
import type { Journal } from '@/lib/sanity.types'
import type { Metadata } from 'next'

interface JournalPageProps {
  params: Promise<{ slug: string }>
}

async function getJournal(slug: string) {
  const journal = await client.fetch<Journal>(journalBySlugQuery, { slug })
  return journal
}

export async function generateMetadata({ params }: JournalPageProps): Promise<Metadata> {
  const { slug } = await params
  const journal = await getJournal(slug)

  if (!journal) {
    return {
      title: 'Journal Entry Not Found',
    }
  }

  return {
    title: journal.title,
    description: journal.seoDescription || journal.excerpt || `Journal entry: ${journal.title}`,
  }
}

export default async function JournalEntryPage({ params }: JournalPageProps) {
  const { slug } = await params
  const journal = await getJournal(slug)

  if (!journal) {
    notFound()
  }

  // Calculate progress bar
  const progressBar = journal.stats?.goalProgress
    ? '█'.repeat(Math.floor(journal.stats.goalProgress / 10)) +
      '░'.repeat(10 - Math.floor(journal.stats.goalProgress / 10))
    : null

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          {journal.dayNumber && (
            <div className="text-sm text-brand-text-secondary mb-2">
              Day {journal.dayNumber}
            </div>
          )}
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-brand-text-primary">
            {journal.title}
          </h1>

          <div className="flex items-center gap-4 text-sm text-brand-text-secondary mb-4">
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

          {journal.tags && journal.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
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
        </header>

        {/* Body */}
        <div className="prose prose-lg max-w-none mb-12">
          <PortableText value={journal.body} />
        </div>

        {/* Stats Section */}
        {journal.stats && (
          <div className="border-t border-gray-200 pt-8">
            <div className="text-2xl mb-4">📊 Current State:</div>
            <ul className="space-y-2 text-brand-text-secondary">
              {(journal.stats.marketing !== undefined && journal.stats.building !== undefined) && (
                <li>
                  <strong>Marketing/Building:</strong> {journal.stats.marketing}% / {journal.stats.building}%
                </li>
              )}
              {journal.stats.conversationsTotal !== undefined && (
                <li>
                  <strong>This Week&apos;s Conversations:</strong> {journal.stats.conversationsTotal}
                  {' '}
                  ({journal.stats.conversationsQualified || 0} qualified,
                  {' '}{journal.stats.conversationsGhost || 0} ghost,
                  {' '}{journal.stats.conversationsWrongFit || 0} wrong fit)
                </li>
              )}
              {journal.stats.goalProgress !== undefined && (
                <li>
                  <strong>Current Goal:</strong> First $ by Nov 30 [{progressBar}] {journal.stats.goalProgress}%
                </li>
              )}
              {(journal.stats.runwayCurrent !== undefined && journal.stats.runwayTotal !== undefined) && (
                <li>
                  <strong>Runway:</strong> Month {journal.stats.runwayCurrent}/{journal.stats.runwayTotal}
                </li>
              )}
            </ul>
          </div>
        )}
      </article>
    </Container>
  )
}
