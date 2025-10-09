import Container from '@/components/Container'
import Link from 'next/link'
import { Twitter, Linkedin, Mail } from 'lucide-react'

export default function AboutPage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6">About Sushant Jain</h1>

        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-xl leading-relaxed mb-8">
            I&apos;m a founder, engineer, and writer passionate about building products that make
            a difference. Currently, I&apos;m building{' '}
            <a
              href="https://lessgo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-700"
            >
              Lessgo.ai
            </a>
            , helping teams ship software faster and better.
          </p>

          <h2>My Journey</h2>
          <p>
            My journey in technology began with a fascination for how things work. From writing
            my first line of code to building products used by thousands, it&apos;s been an incredible
            adventure of continuous learning and growth.
          </p>
          <p>
            I believe in the power of technology to transform lives and businesses. Through my
            work, I aim to make complex technology accessible and useful for everyone.
          </p>

          <h2>What I Do</h2>
          <ul>
            <li>
              <strong>Building Startups:</strong> Currently focused on Lessgo.ai, my latest venture
              in the developer tools space.
            </li>
            <li>
              <strong>Writing:</strong> I write about technology, startups, philosophy, and life.
              I also write poetry and short stories in Hindi and Urdu.
            </li>
            <li>
              <strong>Teaching:</strong> I create courses and content to help others on their
              journey in tech and life.
            </li>
            <li>
              <strong>Open Source:</strong> Contributing to and maintaining open source projects
              that help the developer community.
            </li>
          </ul>

          <h2>My Interests</h2>
          <p>
            Beyond technology, I&apos;m deeply interested in:
          </p>
          <ul>
            <li>Philosophy and ethics in technology</li>
            <li>Hindi and Urdu literature - especially ghazals and poetry</li>
            <li>History of computing and technological innovation</li>
            <li>Personal development and productivity</li>
            <li>Building communities and helping others grow</li>
          </ul>

          <h2>My Writing</h2>
          <p>
            I write across multiple genres and languages:
          </p>
          <ul>
            <li>
              <Link href="/essays" className="text-blue-600 hover:text-blue-700">
                Technical essays
              </Link>{' '}
              on software, startups, and innovation
            </li>
            <li>
              <Link href="/journal" className="text-blue-600 hover:text-blue-700">
                Public journal
              </Link>{' '}
              documenting my build-in-public journey
            </li>
            <li>
              <Link href="/poetry" className="text-blue-600 hover:text-blue-700">
                Poetry and ghazals
              </Link>{' '}
              in Hindi and Urdu
            </li>
            <li>
              <Link href="/stories" className="text-blue-600 hover:text-blue-700">
                Short stories
              </Link>{' '}
              exploring human experiences
            </li>
          </ul>

          <h2>Connect With Me</h2>
          <p>
            I love connecting with fellow builders, writers, and thinkers. Feel free to reach out:
          </p>

          <div className="flex gap-6 my-8 not-prose">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-500 transition-colors"
            >
              <Twitter className="w-5 h-5" />
              <span>Twitter</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 hover:text-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
            <a
              href="mailto:hello@sushantjain.com"
              className="flex items-center gap-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <Mail className="w-5 h-5" />
              <span>Email</span>
            </a>
          </div>

          <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-6 my-8 not-prose">
            <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to my newsletter for updates on new posts, projects, and insights.
            </p>
            <Link
              href="/subscribe"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Subscribe to Newsletter
            </Link>
          </div>
        </div>
      </div>
    </Container>
  )
}