import Link from 'next/link'
import Container from './Container'
import { Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 py-12">
      <Container>
        <div className="space-y-8">
          <div className="text-center py-8">
            <p className="text-lg text-brand-text-secondary leading-relaxed max-w-2xl mx-auto">
              I&apos;m building Lessgo.ai, learning marketing in public, and leaving field notes along the way. Join the ride.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com/LessgoSushant"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-secondary hover:text-brand-coral transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/lessgosushant/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-secondary hover:text-brand-coral transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://www.youtube.com/@SushantJainSpace"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-text-secondary hover:text-brand-coral transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-sm text-brand-text-secondary">
              © {new Date().getFullYear()} Sushant Jain. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}