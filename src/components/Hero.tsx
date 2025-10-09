import Link from 'next/link'

export default function Hero() {
  return (
    <div className="py-12 sm:py-16">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
        Welcome, friend
      </h1>
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <p>
          I&apos;m{' '}
          <Link
            href="/about"
            className="text-blue-600 hover:text-blue-700 no-underline hover:underline"
          >
            Sushant Jain
          </Link>{' '}
          and this is my home on the internet.
        </p>
        <p>
          These days, I&apos;m building a startup called{' '}
          <a
            href="https://lessgo.ai"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-700 no-underline hover:underline"
          >
            Lessgo.ai
          </a>
        </p>
      </div>
    </div>
  )
}