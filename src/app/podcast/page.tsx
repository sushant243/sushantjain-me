import Container from '@/components/Container'
import EmailCaptureForm from '@/components/EmailCaptureForm'

export default function PodcastPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-brand-text-primary">Marketing Insights Podcast</h1>
          <p className="text-xl text-brand-text-secondary leading-relaxed">
            Short podcast-style videos breaking down real SaaS growth experiments and insights.
          </p>
        </div>

        <div className="mt-12 max-w-2xl">
          <div className="bg-white border border-gray-300 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-brand-text-primary">Coming Soon</h2>
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              I&apos;m creating short, focused videos where I break down real marketing experiments, successful campaigns I&apos;m studying, and tactical insights from growing Lessgo.ai.
            </p>
            <p className="text-brand-text-secondary leading-relaxed mb-6">
              The first episodes are in production. Subscribe below to get notified when they&apos;re live.
            </p>
            <EmailCaptureForm />
          </div>
        </div>
      </div>
    </Container>
  )
}
