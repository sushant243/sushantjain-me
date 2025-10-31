import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { client, urlFor } from '@/lib/sanity.client'
import { essaysQuery } from '@/lib/sanity.queries'
import type { Essay } from '@/lib/sanity.types'

async function getEssays() {
  const essays = await client.fetch<Essay[]>(essaysQuery)
  return essays
}

export default async function EssaysPage() {
  const essays = await getEssays()
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Essays</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Long-form thoughts on technology, startups, philosophy, and the human experience
            in the digital age.
          </p>
        </div>

        {/* Featured Essay */}
        {essays.slice(0, 1).map((essay) => (
          <div
            key={essay.slug.current}
            className="mb-12 p-6 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-lg border border-blue-200 dark:border-blue-800"
          >
            <div className="mb-2 text-sm font-medium text-blue-600">Featured Essay</div>
            <Link href={`/essays/${essay.slug.current}`} className="group">
              <h2 className="text-3xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                {essay.title}
              </h2>
              <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                <span className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  {format(new Date(essay.date), 'MMMM d, yyyy')}
                </span>
                {essay.author && (
                  <span className="text-gray-600 dark:text-gray-400">
                    by {essay.author.name}
                  </span>
                )}
              </div>
              {essay.excerpt && (
                <p className="text-gray-700 dark:text-gray-300">
                  {essay.excerpt}
                </p>
              )}
            </Link>
          </div>
        ))}

        {/* All Essays */}
        <div className="space-y-8">
          {essays.slice(1).map((essay) => (
            <article
              key={essay._id}
              className="border-b border-gray-200 dark:border-gray-800 pb-8 last:border-0"
            >
              <Link href={`/essays/${essay.slug.current}`} className="group block">
                {essay.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={urlFor(essay.coverImage).width(800).height(400).url()}
                      alt={essay.coverImage.alt || essay.title}
                      width={800}
                      height={400}
                      className="w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}
                <h2 className="text-2xl font-semibold mb-2 group-hover:text-blue-600 transition-colors">
                  {essay.title}
                </h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {format(new Date(essay.date), 'MMMM d, yyyy')}
                  </span>
                  {essay.author && (
                    <span className="text-gray-600 dark:text-gray-400">
                      by {essay.author.name}
                    </span>
                  )}
                </div>
                {essay.excerpt && (
                  <p className="text-gray-600 dark:text-gray-400">
                    {essay.excerpt}
                  </p>
                )}
                {essay.tags && essay.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {essay.tags.map((tag) => (
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

        {essays.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              No essays published yet. Check back soon!
            </p>
          </div>
        )}
      </div>
    </Container>
  )
}