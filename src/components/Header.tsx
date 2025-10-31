'use client'

import { useState } from 'react'
import Link from 'next/link'
import Container from './Container'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-black backdrop-blur-md">
        <Container>
          <nav className="flex h-16 items-center justify-between">
            <Link href="/" className="text-3xl font-semibold text-white">
              Sushant Jain
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-6 lg:gap-10 text-xl">
              <Link
                href="/journal"
                className="text-white/80 hover:text-white transition-colors"
              >
                Journal
              </Link>

              <Link
                href="/essays"
                className="text-white/80 hover:text-white transition-colors"
              >
                Essays
              </Link>

              <Link
                href="/podcast"
                className="text-white/80 hover:text-white transition-colors"
              >
                Podcast
              </Link>

              <Link
                href="/about"
                className="text-white/80 hover:text-white transition-colors"
              >
                About
              </Link>
            </div>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden text-white"
              aria-label="Open menu"
            >
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  )
}