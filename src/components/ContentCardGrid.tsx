import Link from 'next/link'
import { PenTool, Video, FileText } from 'lucide-react'
import JournalEntryList from './JournalEntryList'
import PodcastEpisodeList from './PodcastEpisodeList'
import EssayList from './EssayList'
import type { Journal, Podcast, Essay } from '@/lib/sanity.types'

interface ContentCardGridProps {
  journals: Journal[]
  podcasts: Podcast[]
  essays: Essay[]
}

export default function ContentCardGrid({ journals, podcasts, essays }: ContentCardGridProps) {
  return (
    <section className="py-16">
      <div className="mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-brand-text-primary">
          SaaS Marketing Field Notes
        </h2>
        <p className="text-lg text-brand-text-secondary leading-relaxed max-w-3xl">
          Marketing isn&apos;t theory. It&apos;s a daily craft. Every day, I document what I&apos;m learning while growing Lessgo.ai: what I&apos;m testing, studying, and refining.
        </p>
      </div>

      <div className="space-y-12">
        {/* Public Journal Section */}
        <div className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="md:col-span-3">
            <Link
              href="/journal"
              className="group p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-200 bg-white block h-full"
            >
              <div className="mb-4">
                <PenTool className="w-8 h-8 text-brand-coral" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-text-primary group-hover:text-brand-coral transition-colors">
                Public Journal
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Daily reflections, experiments, and honest lessons from building (no polish, just real progress)
              </p>
            </Link>
          </div>
          <div className="md:col-span-7">
            <JournalEntryList journals={journals} />
          </div>
        </div>

        {/* Marketing Insights Podcast Section */}
        <div className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="md:col-span-3">
            <Link
              href="/podcast"
              className="group p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-200 bg-white block h-full"
            >
              <div className="mb-4">
                <Video className="w-8 h-8 text-brand-coral" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-text-primary group-hover:text-brand-coral transition-colors">
                Marketing Insights podcast
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Short podcast-style videos breaking down real SaaS growth experiments and insights
              </p>
            </Link>
          </div>
          <div className="md:col-span-7">
            <PodcastEpisodeList podcasts={podcasts} />
          </div>
        </div>

        {/* Essays and Posts Section */}
        <div className="flex flex-col md:grid md:grid-cols-10 gap-6">
          <div className="md:col-span-3">
            <Link
              href="/essays"
              className="group p-6 border border-gray-300 rounded-lg hover:shadow-lg transition-all duration-200 bg-white block h-full"
            >
              <div className="mb-4">
                <FileText className="w-8 h-8 text-brand-coral" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-brand-text-primary group-hover:text-brand-coral transition-colors">
                Essays and deep-dives
              </h3>
              <p className="text-brand-text-secondary leading-relaxed">
                Longer breakdowns - book notes, expert interviews, and field-tested SaaS marketing frameworks
              </p>
            </Link>
          </div>
          <div className="md:col-span-7">
            <EssayList essays={essays} />
          </div>
        </div>
      </div>
    </section>
  )
}
