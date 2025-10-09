import Link from 'next/link'
import Container from './Container'
import { Twitter, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-200 dark:border-gray-800 py-12">
      <Container>
        <div className="space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </Link>
            </div>

            <div className="text-sm text-gray-600 dark:text-gray-400">
              © {new Date().getFullYear()} Sushant Jain. All rights reserved.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}