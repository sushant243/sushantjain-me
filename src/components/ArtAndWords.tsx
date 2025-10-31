import Link from 'next/link'

export default function ArtAndWords() {
  return (
    <section className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-text-primary">
        Art & Words
      </h2>

      <div className="max-w-3xl space-y-4 text-lg text-brand-text-secondary leading-relaxed">
        <p>
          Beyond marketing and building, I write.
        </p>

        <p>
          Seventy ghazals. A few short stories. Occasional essays on philosophy and growth.
        </p>

        <p>
          The same curiosity that drives my marketing fuels my writing: the search for rhythm, emotion, and truth. Marketing is storytelling with an outcome.
        </p>

        <p>
          Poetry is storytelling without one.
        </p>

        <p>
          Both demand care — for language, and for people.
        </p>

        <div className="pt-4 flex gap-4">
          <Link
            href="/poetry"
            className="text-brand-coral hover:text-brand-coral-dark font-medium transition-colors"
          >
            → [Read Ghazals]
          </Link>
          <span className="text-gray-400">|</span>
          <Link
            href="/stories"
            className="text-brand-coral hover:text-brand-coral-dark font-medium transition-colors"
          >
            [Short Stories]
          </Link>
        </div>
      </div>
    </section>
  )
}
