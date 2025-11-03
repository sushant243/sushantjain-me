import Container from '@/components/Container'
import Link from 'next/link'
import Image from 'next/image'
import { Calendar } from 'lucide-react'
import { format } from 'date-fns'
import { client, urlFor } from '@/lib/sanity.client'
import { storiesQuery } from '@/lib/sanity.queries'
import type { StoriesQueryResult } from '@/lib/sanity.types'

async function getStories() {
  const stories = await client.fetch<StoriesQueryResult>(storiesQuery)
  return stories
}

const languageLabels: Record<string, string> = {
  hi: 'हिंदी',
  en: 'English',
}

export default async function StoriesPage() {
  const stories = await getStories()
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Short Stories | कहानियां</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Short stories in Hindi exploring human relationships, emotions, and
            the complexities of modern life.
          </p>
        </div>

        <div className="space-y-8">
          {stories.map((story) => (
            <article
              key={story._id}
              className="border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <Link href={`/stories/${story.slug?.current}`} className="block">
                {story.coverImage && (
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <Image
                      src={urlFor(story.coverImage).width(800).height(400).url()}
                      alt={story.coverImage.alt || story.title || 'Story cover'}
                      width={800}
                      height={400}
                      className="w-full object-cover"
                    />
                  </div>
                )}
                <div className="mb-4">
                  <h2 className="text-2xl font-bold font-hindi mb-1">
                    {story.title}
                  </h2>
                  {story.language === 'hi' && (
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                      {story.title} (Hindi)
                    </p>
                  )}
                </div>

                {story.excerpt && (
                  <p className="font-hindi text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                    {story.excerpt}
                  </p>
                )}

                <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                  {story.date && (
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(story.date), 'MMMM d, yyyy')}
                    </span>
                  )}
                  {story.language && (
                    <span className="px-2 py-1 bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 rounded text-xs">
                      {languageLabels[story.language]}
                    </span>
                  )}
                  {story.author && (
                    <span className="text-gray-600 dark:text-gray-400">
                      by {story.author}
                    </span>
                  )}
                </div>
                {story.tags && story.tags.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {story.tags.map((tag) => (
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

        {stories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400">
              Stories collection coming soon!
            </p>
          </div>
        )}
      </div>
    </Container>
  )
}
