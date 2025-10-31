import Container from '@/components/Container'
import Hero from '@/components/Hero'
import ContentCardGrid from '@/components/ContentCardGrid'
import EarlierBuilds from '@/components/EarlierBuilds'
import ArtAndWords from '@/components/ArtAndWords'
import { client } from '@/lib/sanity.client'
import { latestContentQuery } from '@/lib/sanity.queries'
import type { Journal, Podcast, Essay } from '@/lib/sanity.types'

async function getLatestContent() {
  const content = await client.fetch<{
    journals: Journal[]
    podcasts: Podcast[]
    essays: Essay[]
  }>(latestContentQuery)
  return content
}

export default async function Home() {
  const { journals, podcasts, essays } = await getLatestContent()

  return (
    <Container className="py-8">
      <Hero />
      <ContentCardGrid
        journals={journals}
        podcasts={podcasts}
        essays={essays}
      />
      <EarlierBuilds />
      <ArtAndWords />
    </Container>
  )
}
