import Container from '@/components/Container'
import { CheckCircle } from 'lucide-react'

export default function SubscribePage() {
  return (
    <Container className="py-12">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">Subscribe to Updates</h1>

        <div className="prose prose-lg dark:prose-invert mb-8">
          <p>
            Join my newsletter to receive thoughtful updates about new essays, poetry,
            and insights from my journey building products and writing.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">What You&apos;ll Get</h2>

          <div className="space-y-3 mb-8">
            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">New Essays & Posts</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Thoughtful long-form writing on technology, startups, and philosophy
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Poetry & Creative Writing</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Original poetry in Hindi/Urdu and short stories
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Building in Public Updates</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Behind-the-scenes insights from building Lessgo.ai
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium">Exclusive Resources</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Early access to courses, tools, and special content
                </p>
              </div>
            </div>
          </div>

          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800"
              />
            </div>

            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                First Name (Optional)
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your name"
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent bg-white dark:bg-gray-800"
              />
            </div>

            <button
              type="submit"
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe Now
            </button>
          </form>

          <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
            I respect your privacy. Unsubscribe at any time. No spam, ever.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-6">
          <h3 className="font-semibold mb-2">Frequency</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            I typically send 1-2 emails per month, sometimes less. Quality over quantity.
          </p>

          <h3 className="font-semibold mb-2">Privacy</h3>
          <p className="text-gray-600 dark:text-gray-400">
            Your email is safe with me. I use ConvertKit to manage subscriptions, and I never
            share your information with third parties. You can unsubscribe anytime with a single click.
          </p>
        </div>
      </div>
    </Container>
  )
}