'use client'

import Link from 'next/link'
import { useEffect } from 'react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40 md:hidden"
        onClick={onClose}
      />

      {/* Menu Panel */}
      <div className="fixed inset-y-0 right-0 w-64 bg-black z-50 md:hidden transform transition-transform duration-300 ease-in-out">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white"
          aria-label="Close menu"
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="flex flex-col items-center justify-center h-full gap-8">
          <Link
            href="/journal"
            onClick={onClose}
            className="text-2xl text-white/80 hover:text-white transition-colors"
          >
            Journal
          </Link>

          <Link
            href="/essays"
            onClick={onClose}
            className="text-2xl text-white/80 hover:text-white transition-colors"
          >
            Essays
          </Link>

          <Link
            href="/podcast"
            onClick={onClose}
            className="text-2xl text-white/80 hover:text-white transition-colors"
          >
            Podcast
          </Link>

          <Link
            href="/about"
            onClick={onClose}
            className="text-2xl text-white/80 hover:text-white transition-colors"
          >
            About
          </Link>
        </nav>
      </div>
    </>
  )
}
