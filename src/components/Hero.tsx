import Link from 'next/link'
import Image from 'next/image'
import EmailCaptureForm from './EmailCaptureForm'

export default function Hero() {
  return (
    <div className="px-6 sm:px-0 py-12 sm:py-16">
      <h1 className="pt-4 sm:pt-18 text-2xl sm:text-4xl lg:text-5.5xl font-bold tracking-tight mb-8 text-brand-text-primary leading-tight text-center sm:text-left">
        <span className="inline-block relative">
          Field Notes
          <div className="absolute left-1/2 -bottom-1 w-12 h-0.5 -translate-x-1/2 sm:static sm:left-0 sm:translate-x-0 sm:w-full sm:h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
        </span>{' '}
        from a Builder Learning Marketing
      </h1>

      <div className="prose prose-lg max-w-none text-brand-text-primary space-y-4 sm:space-y-8 text-center sm:text-left">
        <div className="flex items-center gap-3 pt-8 sm:pt-12">
          <Image
            src="/founder_v1.jpg"
            alt="Sushant Jain"
            width={40}
            height={40}
            className="rounded-full"
          />
          <p className="text-base sm:text-2xl leading-relaxed">
            Hey, I&apos;m{' '}
            <Link
              href="/about"
              className="font-semibold text-brand-text-primary underline decoration-brand-coral hover:decoration-brand-coral-dark transition-colors"
            >
              Sushant Jain
            </Link>
            {' '}- founder of{' '}
            <a
              href="https://lessgo.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-brand-text-primary underline decoration-brand-coral hover:decoration-brand-coral-dark transition-colors"
            >
              Lessgo.ai
            </a>
            .
          </p>
        </div>

        <p className="text-xl leading-relaxed">
          I&apos;ve spent <span style={{background: 'linear-gradient(transparent 60%, rgba(255, 193, 7, 0.3) 40%)'}}> 14 years building </span>, 7 years in dev and 7 years in B2B sales, and a handful of side ventures along the way: life coaching, ecommerce, internet marketing.
        </p>

        <p className="text-lg leading-relaxed">
          I&apos;ve built a lot, but never gone all-in on my own product.
        </p>

        <p className="text-lg leading-relaxed font-semibold italic">
          Until now.
        </p>

        <p className="text-lg leading-relaxed">
          Lessgo.ai is my first full-time bet. And this time, I'm applying 14 years of side projects and €600M in B2B sales experience - documenting every step as I grow Lessgo.ai from early adopters to enterprise customers.
        </p>

        <p className="text-2xl leading-relaxed">
          These are my field notes from the journey - <strong>the experiments, the insights, the wins, and the flops.</strong>
        </p>

        <p className="text-lg leading-relaxed">
          If you&apos;re building something that matters and figuring out how to get it in front of people, subscribe to my newsletter to join the ride.
        </p>
      </div>

      <EmailCaptureForm />
    </div>
  )
}