'use client'

import { useState, FormEvent } from 'react'

export default function EmailCaptureForm() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('loading')

    try {
      const response = await fetch(
        `https://app.convertkit.com/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscriptions`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email_address: email }),
        }
      )

      if (response.ok) {
        setStatus('success')
        setEmail('')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <div className="mt-12 p-8 border border-gray-200 rounded-lg shadow-lg max-w-2xl bg-green-50">
        <h3 className="text-2xl font-bold text-brand-text-primary mb-4">You&apos;re in. Check your inbox for your first field note.</h3>
        <p className="text-lg text-brand-text-primary leading-relaxed pt-4">
          I&apos;m building Lessgo.ai in public and sharing what I learn about SaaS marketing... the experiments, the insights, the wins, the flops. <br /> <br /> Hit reply anytime. I read everything.
        </p>
        <p className="text-lg text-brand-text-primary mt-6"> — Sushant</p>
      </div>
    )
  }

  return (
    <div className="mt-12">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={status === 'loading'}
          className="flex-1 px-6 py-4 text-lg rounded-full border border-gray-400 focus:outline-none focus:ring-3 focus:ring-brand-coral focus:border-transparent bg-white text-brand-text-primary placeholder:text-gray-400 disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out whitespace-nowrap disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Get weekly Field Notes'}
        </button>
      </form>
      {status === 'error' && (
        <p className="text-red-600 mt-4 text-lg">Something went wrong. Please try again.</p>
      )}
      <p className="text-lg text-brand-text-secondary mt-4">
        Short and honest lessons from marketing Lessgo.ai in public.
      </p>
      {/* Trust badges */}
      <div className="flex flex-col sm:flex-row items-center justify-left gap-4 sm:gap-6 mt-8 text-lg text-brand-text-secondary">
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>No Spam</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Unsubscribe Anytime</span>
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span>Weekly Updates</span>
        </div>
      </div>

    </div>
  )
}
