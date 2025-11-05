import Link from 'next/link'

interface RelatedItem {
  slug: string
  title: string
  description?: string
  date: string
  tags?: string[]
}

interface RelatedContentProps {
  currentSlug: string
  currentTags: string[]
  allItems: RelatedItem[]
  sectionName: string
  sectionHref: string
}

export default function RelatedContent({
  currentSlug,
  currentTags,
  allItems,
  sectionName,
  sectionHref,
}: RelatedContentProps) {
  // Filter out current item and find items with matching tags
  const related = allItems
    .filter((item) => item.slug !== currentSlug)
    .map((item) => {
      const matchingTags = item.tags?.filter((tag) =>
        currentTags.includes(tag)
      ) || []
      return {
        ...item,
        matchScore: matchingTags.length,
      }
    })
    .filter((item) => item.matchScore > 0)
    .sort((a, b) => {
      // Sort by matching tags first, then by date (newest first)
      if (b.matchScore !== a.matchScore) {
        return b.matchScore - a.matchScore
      }
      return new Date(b.date).getTime() - new Date(a.date).getTime()
    })
    .slice(0, 3)

  if (related.length === 0) {
    return null
  }

  return (
    <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <h2 className="text-xl font-semibold mb-6">
        Related {sectionName}
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((item) => (
          <Link
            key={item.slug}
            href={`${sectionHref}/${item.slug}`}
            className="group block p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
          >
            <h3 className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors mb-2">
              {item.title}
            </h3>
            {item.description && (
              <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                {item.description}
              </p>
            )}
            <time className="text-xs text-zinc-500 dark:text-zinc-500 mt-2 block">
              {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </Link>
        ))}
      </div>
    </div>
  )
}
