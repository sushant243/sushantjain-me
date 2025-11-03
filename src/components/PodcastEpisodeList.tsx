import Link from 'next/link'
import { format } from 'date-fns'
import type { LatestContentQueryResult } from '@/lib/sanity.types'

interface PodcastEpisodeListProps {
  podcasts: LatestContentQueryResult['podcasts']
}

function truncateExcerpt(text: string | undefined | null, maxLength: number): string {
  if (!text) return ''
  if (text.length <= maxLength) return text
  return text.slice(0, maxLength).trim() + '...'
}

export default function PodcastEpisodeList({ podcasts }: PodcastEpisodeListProps) {
  // Always show empty state since podcasts schema doesn't exist yet
  return (
    <div className="text-brand-text-secondary text-sm">
      No episodes yet. First one coming soon!
    </div>
  )
}
