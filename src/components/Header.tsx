import Link from 'next/link'
import Container from './Container'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md dark:border-gray-800 dark:bg-gray-950/80">
      <Container>
        <nav className="flex h-16 items-center justify-between">
          <Link href="/" className="text-xl font-semibold">
            Sushant Jain
          </Link>

          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/subscribe"
              className="hover:text-blue-600 transition-colors"
            >
              Subscribe to new posts
            </Link>
            <span className="text-gray-300 dark:text-gray-700">·</span>
            <Link
              href="/about"
              className="hover:text-blue-600 transition-colors"
            >
              About me
            </Link>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
            <Link
              href="/video-course"
              className="hidden sm:inline hover:text-blue-600 transition-colors"
            >
              Free video course
            </Link>
            <span className="hidden sm:inline text-gray-300 dark:text-gray-700">·</span>
            <Link
              href="/TYC-book"
              className="hidden sm:inline hover:text-blue-600 transition-colors"
            >
              My Book
            </Link>
          </div>
        </nav>
      </Container>
    </header>
  )
}