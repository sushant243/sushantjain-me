import Link from 'next/link'
import { format } from 'date-fns'
import type { Essay } from '@/lib/sanity.types'

interface EssayListProps {
  essays: Essay[]
}

function truncateExcerpt(text: string | undefined, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export default function EssayList({ essays }: EssayListProps) {
  if (essays.length === 0) {
    return (
      <div className="text-brand-text-secondary text-sm">
        No essays yet. Working on the first one!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {essays.map((essay) => (
        <Link
          key={essay._id}
          href={`/essays/${essay.slug.current}`}
          className="block group"
        >
          <article className="border-b border-gray-200 pb-3 last:border-0">
            <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-coral transition-colors mb-1">
              {essay.title}
            </h3>
            <time className="text-xs text-brand-text-secondary block mb-2">
              {format(new Date(essay.date), 'd MMM yyyy')}
            </time>
            {essay.excerpt && (
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {truncateExcerpt(essay.excerpt, 200)}
              </p>
            )}
          </article>
        </Link>
      ))}
    </div>
  )
}
