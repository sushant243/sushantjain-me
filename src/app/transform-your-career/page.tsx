import Container from '@/components/Container'
import EmailCaptureForm from '@/components/EmailCaptureForm'
import { Download } from 'lucide-react'

export default function BookPage() {
  return (
    <Container className="py-36">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Title & Subtitle */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold">
            Transform Your Career (2016) - The Creativity Playbook
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400">
            A short, practical book about being intentionally creative in your work, projects or business.
          </p>
        </div>

        {/* Why it matters now */}
        <div className="border-l-4 border-brand-coral pl-6 space-y-3">
          <h2 className="text-2xl font-semibold">Why it matters now</h2>
          <p className="text-lg text-gray-700 dark:text-gray-300">
            It shows how{' '}
            <span style={{ background: 'linear-gradient(transparent 60%, rgba(255, 193, 7, 0.3) 40%)' }}>
              a well written asset can still miss when the message and product don&apos;t align
            </span>
            ... the lesson that pushed me toward going all in on marketing craft.
          </p>
        </div>

        <hr className="border-t border-gray-200 dark:border-gray-800" />

        {/* Who & What */}
        <div className="space-y-8">
          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">Who it&apos;s for now</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              Early-stage builders who want to learn the art and science to be intentionally creative → how ideas move from thought to action.
            </p>
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl font-semibold">What you&apos;ll get</h2>
            <p className="text-lg text-gray-700 dark:text-gray-300">
              A simple, easy-to-follow framework to gather insights, generate ideas, and take bold action.
            </p>
          </div>
        </div>

        <hr className="border-t border-gray-200 dark:border-gray-800" />

        {/* Provenance */}
        <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8">
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Written in 2016. Re-released in 2025 with a new foreword and updated author note.
          </p>
        </div>

        {/* Download CTA */}
        <div className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-lg p-8 space-y-4">
          <h3 className="text-2xl font-semibold">Download the book</h3>
          <p className="text-lg text-gray-600 dark:text-gray-400 italic">
            No email required. Read the 2025 Foreword first.
          </p>

          <a
            href="/Transform-Your-Career-2017-Sushant-Jain.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-out"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        <hr className="border-t border-gray-200 dark:border-gray-800 mt-56" />

        {/* Newsletter signup - footer element */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Get weekly Field Notes</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Marketing lessons from building Lessgo.ai in public. Honest, short, and practical.
          </p>
          <EmailCaptureForm />
        </div>
      </div>
    </Container>
  )
}