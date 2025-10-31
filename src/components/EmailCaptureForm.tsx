'use client'

export default function EmailCaptureForm() {
  return (
    <div className="mt-12">
      
      <form
        action={`https://app.convertkit.com/forms/${process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID}/subscriptions`}
        method="post"
        className="flex flex-col sm:flex-row gap-4 max-w-2xl"
      >
        <input
          type="email"
          name="email_address"
          placeholder="Enter your email address"
          required
          className="flex-1 px-6 py-4 text-lg rounded-full border border-gray-400 focus:outline-none focus:ring-3 focus:ring-brand-coral focus:border-transparent bg-white text-brand-text-primary placeholder:text-gray-400"
        />
        <button
          type="submit"
          className="px-10 py-3 text-lg font-semibold text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 rounded-full shadow-md hover:shadow-lg transition-all duration-300 ease-out whitespace-nowrap"
        >
          Get weekly Field Notes
        </button>
      </form>
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
