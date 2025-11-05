import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { Calendar } from 'lucide-react'
import Container from '@/components/Container'
import PortableText from '@/components/PortableText'
import Breadcrumb from '@/components/Breadcrumb'
import BackLink from '@/components/BackLink'
import RelatedContent from '@/components/RelatedContent'
import { client, urlFor } from '@/lib/sanity.client'
import { essayBySlugQuery, essaysQuery } from '@/lib/sanity.queries'
import type { EssayBySlugQueryResult, EssaysQueryResult } from '@/lib/sanity.types'
import type { Metadata } from 'next'
import Image from 'next/image'

interface EssayPageProps {
  params: Promise<{ slug: string }>
}

async function getEssay(slug: string) {
  const essay = await client.fetch<EssayBySlugQueryResult>(essayBySlugQuery, { slug })
  return essay
}

export async function generateMetadata({ params }: EssayPageProps): Promise<Metadata> {
  const { slug } = await params
  const essay = await getEssay(slug)

  if (!essay) {
    return {
      title: 'Essay Not Found',
    }
  }

  return {
    title: essay.title,
    description: essay.seoDescription || essay.excerpt || `Essay: ${essay.title}`,
  }
}

export default async function EssayPage({ params }: EssayPageProps) {
  const { slug } = await params
  const essay = await getEssay(slug)

  if (!essay) {
    notFound()
  }

  // Fetch all essays for related content
  const allEssays = await client.fetch<EssaysQueryResult>(essaysQuery)

  return (
    <Container className="py-12">
      <article className="max-w-3xl mx-auto">
        {/* Breadcrumb */}
        <Breadcrumb
          items={[
            { label: 'Essays', href: '/essays' },
            { label: essay.title || 'Essay' },
          ]}
        />

        {/* Header */}
        <header className="mb-8 mt-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-brand-text-primary">
            {essay.title}
          </h1>

          <div className="flex items-center flex-wrap gap-4 text-sm text-brand-text-secondary mb-4">
            {essay.date && (
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <time dateTime={essay.date}>
                  {format(new Date(essay.date), 'MMMM d, yyyy')}
                </time>
              </div>
            )}
            {essay.author?.name && (
              <div>
                By {essay.author.name}
              </div>
            )}
            {essay.tags && essay.tags.length > 0 && (
              <>
                {essay.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-gray-100 rounded-full text-brand-text-secondary"
                  >
                    {tag}
                  </span>
                ))}
              </>
            )}
          </div>
        </header>

        {/* Cover Image */}
        {essay.coverImage && (
          <figure className="mb-16">
            <div className="rounded-lg overflow-hidden">
              <Image
                src={urlFor(essay.coverImage).url()}
                alt={essay.coverImage.alt || essay.title || 'Essay cover'}
                width={1200}
                height={630}
                className="w-full h-auto"
                priority
              />
            </div>
            {essay.coverImage.caption && (
              <figcaption className="mt-2 text-center text-sm text-gray-600">
                {essay.coverImage.caption}
              </figcaption>
            )}
          </figure>
        )}

        {/* Body */}
        {essay.body && (
          <div className="mb-12">
            <PortableText value={essay.body} />
          </div>
        )}

        {/* Author Bio */}
        {essay.author && (essay.author.bio || essay.author.image) && (
          <div className="border-t border-gray-200 pt-8 mt-12">
            <div className="flex gap-4">
              {essay.author.image && (
                <div className="flex-shrink-0">
                  <Image
                    src={urlFor(essay.author.image).url()}
                    alt={essay.author.name || 'Author'}
                    width={64}
                    height={64}
                    className="rounded-full"
                  />
                </div>
              )}
              <div>
                {essay.author.name && (
                  <div className="font-semibold text-brand-text-primary mb-1">
                    {essay.author.name}
                  </div>
                )}
                {essay.author.bio && (
                  <div className="text-sm text-brand-text-secondary">
                    {essay.author.bio}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Bottom Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <BackLink href="/essays" label="Back to Essays" />
        </div>

        {/* Related Essays */}
        <RelatedContent
          currentSlug={essay.slug?.current || ''}
          currentTags={essay.tags || []}
          allItems={allEssays
            .filter(e => e.slug?.current && e.title && e.date)
            .map((e) => ({
              slug: e.slug!.current!,
              title: e.title!,
              description: e.excerpt || undefined,
              date: e.date!,
              tags: e.tags || [],
            }))}
          sectionName="Essays"
          sectionHref="/essays"
        />
      </article>
    </Container>
  )
}
