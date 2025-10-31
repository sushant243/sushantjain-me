import Link from 'next/link'
import { format } from 'date-fns'
import type { Journal } from '@/lib/sanity.types'

interface JournalEntryListProps {
  journals: Journal[]
}

function truncateExcerpt(text: string | undefined, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export default function JournalEntryList({ journals }: JournalEntryListProps) {
  if (journals.length === 0) {
    return (
      <div className="text-brand-text-secondary text-sm">
        No journal entries yet. Check back soon!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {journals.map((journal) => (
        <Link
          key={journal._id}
          href={`/journal/${journal.slug.current}`}
          className="block group"
        >
          <article className="border-b border-gray-200 pb-3 last:border-0">
            <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-coral transition-colors mb-1">
              {journal.title}
            </h3>
            <time className="text-xs text-brand-text-secondary block mb-2">
              {format(new Date(journal.date), 'd MMM yyyy')}
            </time>
            {journal.excerpt && (
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {truncateExcerpt(journal.excerpt, 200)}
              </p>
            )}
          </article>
        </Link>
      ))}
    </div>
  )
}
