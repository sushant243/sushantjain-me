import Container from '@/components/Container'
import { Download, BookOpen, Star } from 'lucide-react'

export default function BookPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Transform Your Career</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-12">
          <p className="text-xl">
            A practical guide to accelerating your career in technology and beyond.
            Learn the strategies and mindsets that separate exceptional professionals
            from the rest.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">What&apos;s Inside</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Building technical expertise that matters</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Navigating office politics with integrity</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Creating your personal brand</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Negotiation strategies that work</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Building meaningful professional relationships</span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="w-5 h-5 text-yellow-500 mt-0.5" />
                <span>Long-term career planning</span>
              </li>
            </ul>
          </div>

          <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Free Download</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Get your free copy of &quot;Transform Your Career&quot; - no email required.
              If you find value in it, consider subscribing to my newsletter for more insights.
            </p>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                <Download className="w-5 h-5" />
                Download PDF (2.3 MB)
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-6 py-3 border-2 border-gray-300 dark:border-gray-700 font-semibold rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors">
                <BookOpen className="w-5 h-5" />
                Read Online
              </button>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">About the Book</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            This book is a compilation of lessons learned over a decade in the technology
            industry, from being an individual contributor to leading teams and building
            startups. It&apos;s designed to be practical and actionable.
          </p>
          <p className="text-gray-600 dark:text-gray-400">
            The book is completely free and always will be. My goal is to help as many
            people as possible accelerate their careers and find fulfillment in their work.
          </p>
        </div>
      </div>
    </Container>
  )
}