import Link from 'next/link'

const projects = [
  {
    emoji: '🎓',
    title: 'Life Mastery Academy',
    description: 'A 10-part, 5-hour video course I created years ago but never released. Not because it lacked value, but because I didn&apos;t understand marketing yet. (You can watch it free... my early attempt at teaching transformation.)',
    link: '/life-mastery-academy',
    linkText: '→ [Watch Life Mastery Academy]',
  },
  {
    emoji: '📘',
    title: 'Transform Your Career',
    description: 'An ebook people loved, but I used as a lead magnet for something unrelated. It taught me what happens when your messaging and product don&apos;t align. Those early builds shaped my current obsession: mastering the craft of marketing.',
    link: '/transform-your-career',
    linkText: '→ [Read Transform Your Career]',
  }
]

export default function EarlierBuilds() {
  return (
    <section className="py-16">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-text-primary">
        Earlier Builds (and the Lessons They Left Behind)
      </h2>
      <p className="text-lg text-brand-text-secondary leading-relaxed mb-8 max-w-3xl">
        Before Lessgo.ai, I built many things: a life-coaching academy, ecommerce stores, online ventures. Most didn&apos;t scale. Some never launched. But each one taught me something about how ideas succeed (or don&apos;t).
      </p>

      <div className="space-y-8">
        {projects.map((project) => (
          <div key={project.title} className="border-l-4 border-brand-coral pl-6 py-2">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="text-3xl">{project.emoji}</span>
              <h3 className="text-2xl font-bold text-brand-text-primary">
                {project.title}
              </h3>
            </div>
            <p className="text-brand-text-secondary leading-relaxed mb-3">
              {project.description}
            </p>
            <Link
              href={project.link}
              className="text-brand-coral hover:text-brand-coral-dark font-medium transition-colors"
            >
              {project.linkText}
            </Link>
          </div>
        ))}
      </div>
    </section>
  )
}
