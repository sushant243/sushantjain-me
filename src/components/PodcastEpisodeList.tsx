import Link from 'next/link'
import { format } from 'date-fns'
import type { Podcast } from '@/lib/sanity.types'

interface PodcastEpisodeListProps {
  podcasts: Podcast[]
}

function truncateExcerpt(text: string | undefined, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export default function PodcastEpisodeList({ podcasts }: PodcastEpisodeListProps) {
  if (podcasts.length === 0) {
    return (
      <div className="text-brand-text-secondary text-sm">
        No episodes yet. First one coming soon!
      </div>
    )
  }

  return (
    <div className="space-y-4">
      {podcasts.map((podcast) => (
        <Link
          key={podcast._id}
          href={`/podcast/${podcast.slug.current}`}
          className="block group"
        >
          <article className="border-b border-gray-200 pb-3 last:border-0">
            <h3 className="font-semibold text-brand-text-primary group-hover:text-brand-coral transition-colors mb-1">
              {podcast.title}
            </h3>
            <div className="flex items-center gap-2 text-xs text-brand-text-secondary mb-2">
              <time>{format(new Date(podcast.date), 'd MMM yyyy')}</time>
              {podcast.duration && (
                <>
                  <span>•</span>
                  <span>{podcast.duration}</span>
                </>
              )}
            </div>
            {podcast.excerpt && (
              <p className="text-sm text-brand-text-secondary leading-relaxed">
                {truncateExcerpt(podcast.excerpt, 200)}
              </p>
            )}
          </article>
        </Link>
      ))}
    </div>
  )
}
