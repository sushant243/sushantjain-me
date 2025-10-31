import Container from '@/components/Container'
import { PlayCircle } from 'lucide-react'

export default function VideoCoursePage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Life Mastery with Sushant Jain</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p>
            A comprehensive video course on personal and professional growth, covering
            productivity, mindset, career development, and life philosophy.
          </p>
        </div>

        <div className="bg-gradient-to-r from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-4">Course Modules</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <PlayCircle className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Module 1: Foundation</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Understanding yourself and setting the right goals
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PlayCircle className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Module 2: Productivity Systems</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Building systems that work for your life
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PlayCircle className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Module 3: Career Growth</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Strategies for accelerating your career
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <PlayCircle className="w-6 h-6 text-purple-600 mt-0.5" />
              <div>
                <h3 className="font-semibold">Module 4: Life Philosophy</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Developing a philosophy for a meaningful life
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors">
            Coming Soon
          </button>
          <p className="text-gray-600 dark:text-gray-400 mt-4">
            Free access for newsletter subscribers
          </p>
        </div>
      </div>
    </Container>
  )
}