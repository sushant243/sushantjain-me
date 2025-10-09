import Container from '@/components/Container'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function StartHerePage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Start Here</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            Welcome to my digital garden! I&apos;m thrilled you&apos;re here. This site is a collection
            of my thoughts, experiments, and creative work spanning technology, philosophy,
            literature, and life.
          </p>

          <h2>What You&apos;ll Find Here</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 not-prose my-8">
            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Technical Writing</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Essays on technology, startups, and building products. I share lessons from
                my journey as a founder and engineer.
              </p>
              <Link
                href="/essays"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Read Essays <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Build in Public</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Follow my journey building Lessgo.ai and other projects. Raw, unfiltered
                thoughts on the startup journey.
              </p>
              <Link
                href="/journal"
                className="inline-flex items-center text-blue-600 hover:text-blue-700"
              >
                Read Journal <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Hindi Literature</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Poetry, ghazals, and short stories in Hindi and Urdu. Exploring the beauty
                of our languages and culture.
              </p>
              <div className="space-y-2">
                <Link
                  href="/poetry"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read Poetry <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <br />
                <Link
                  href="/stories"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Read Stories <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 dark:border-gray-800 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Resources</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Free resources to help you on your journey - video courses and books on
                personal and professional growth.
              </p>
              <div className="space-y-2">
                <Link
                  href="/video-course"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Video Course <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
                <br />
                <Link
                  href="/TYC-book"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  Free Book <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <h2>Stay Connected</h2>
          <p>
            The best way to stay updated is to subscribe to my newsletter. I send thoughtful
            updates about new essays, poetry, and insights from my journey.
          </p>

          <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 not-prose my-8">
            <h3 className="font-semibold text-lg mb-2">Subscribe to Updates</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Get new posts delivered directly to your inbox. No spam, unsubscribe anytime.
            </p>
            <Link
              href="/subscribe"
              className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe Now <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

          <h2>About Me</h2>
          <p>
            I&apos;m a founder, engineer, and writer. Currently building Lessgo.ai to help teams
            ship software faster. I write about technology, philosophy, and life in both
            English and Hindi.
          </p>
          <p>
            <Link
              href="/about"
              className="text-blue-600 hover:text-blue-700"
            >
              Learn more about me →
            </Link>
          </p>
        </div>
      </div>
    </Container>
  )
}