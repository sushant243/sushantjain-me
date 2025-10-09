import Container from '@/components/Container'
import Hero from '@/components/Hero'
import ExploreGrid from '@/components/ExploreGrid'

export default function Home() {
  return (
    <Container className="py-8">
      <Hero />

      <section className="mt-12 sm:mt-16">
        <h2 className="text-2xl font-bold mb-8">Explore</h2>
        <ExploreGrid />
      </section>
    </Container>
  )
}
