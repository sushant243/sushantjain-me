import Container from '@/components/Container'
import EmailCaptureForm from '@/components/EmailCaptureForm'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <Container className="py-36">
      <div className="max-w-5xl mx-auto space-y-28">
        {/* Opening Hook */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text-primary">
            I've Been Trying to Crack This for{' '}
            <span className="inline-block relative">
              14 Years
              <div className="absolute left-0 -bottom-1 w-full h-1.5 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full"></div>
            </span>
            . Now I'm All In.
          </h2>

          <div className="flex items-center gap-3 pt-8">
            <Image
              src="/founder_v1.jpg"
              alt="Sushant Jain"
              width={40}
              height={40}
              className="rounded-full"
            />
            <p className="text-xl leading-relaxed text-brand-text-primary">
              Hey, I'm Sushant Jain.
            </p>
          </div>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            For 14 years, I had a comfortable tech career:
          </p>

          {/* Timeline */}
          <div className="relative pl-8 space-y-6">
            {/* Vertical line */}
            <div className="absolute left-2 top-2 bottom-2 w-0.5 bg-gray-200"></div>

            {/* Timeline items */}
            <div className="relative flex gap-4 items-start">
              <div className="absolute -left-6 w-3 h-3 bg-brand-coral rounded-full"></div>
              <p className="text-lg text-brand-text-primary">
                <span className="font-semibold">First 7 years:</span> Software developer
              </p>
            </div>

            <div className="relative flex gap-4 items-start">
              <div className="absolute -left-6 w-3 h-3 bg-brand-coral rounded-full"></div>
              <p className="text-lg text-brand-text-primary">
                <span className="font-semibold">Last 7 years:</span> B2B sales (closed €600M+ in enterprise deals)
              </p>
            </div>

            <div className="relative flex gap-4 items-start">
              <div className="absolute -left-6 w-3 h-3 bg-gray-300 rounded-full"></div>
              <p className="text-lg text-brand-text-primary">
                <span className="font-semibold">Whole time:</span> Building on the side
              </p>
            </div>

            <div className="relative flex gap-4 items-start">
              <div className="absolute -left-6 w-3 h-3 bg-brand-coral rounded-full ring-4 ring-brand-coral/20"></div>
              <p className="text-lg text-brand-text-primary font-semibold">
                April 2025: Quit with 18 months runway
              </p>
            </div>
          </div>

          <p className="text-lg leading-relaxed text-brand-text-primary pt-12">
            I kept trying different side projects: Internet marketing projects. Ecommerce stores. Startups. Side hustles. Some made a little money. Most went nowhere.
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            I kept thinking: <em>"If I just had more time... if I could just focus full-time... then I'd figure it out."</em>
          </p>

          <p className="text-xl font-bold leading-relaxed text-brand-text-primary pt-4">
            Now I have no excuses. Just one question:
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            <span style={{background: 'linear-gradient(transparent 60%, rgba(255, 193, 7, 0.3) 40%)'}}>
              Can 14 years of dev, sales, and failed side projects finally add up to one profitable B2B SaaS?
            </span>
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/40"></div>

        {/* The Hypothesis */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text-primary">
            The Hypothesis I'm Testing
          </h2>

          <p className="text-lg leading-relaxed text-brand-text-primary pt-8">
            After 14 years of trying, I've noticed something:
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            Most projects fail because founders fail to market. Some because of lack of knowledge, some because of lack of interest.
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            And there is a lot of misinformation in the "marketing first" approach. Most people think it means posting on Twitter and getting waitlist signups. That's not marketing. That's content.
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            I've closed €600M+ in B2B sales. Real marketing means finding people already paying for bad solutions and confirming they'll switch to yours.
          </p>

          <p className="text-lg font-bold leading-relaxed text-brand-text-primary">
            <span style={{background: 'linear-gradient(transparent 60%, rgba(255, 193, 7, 0.3) 40%)'}}>
              I'm testing a systematic approach to go from early adopters to enterprise customers
            </span>... the kind of path that actually works when you're bootstrapping B2B SaaS.
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            And I'm documenting every step.
          </p>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/40"></div>

        {/* For You / Not For You */}
        <div className="space-y-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text-primary pb-12">
            Who This Is For
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-orange-100/50 rounded-lg p-8 border-l-4 border-brand-coral shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-brand-text-primary">This Is For You If:</h3>
              <ul className="space-y-4 text-lg text-brand-text-primary">
                <li>✓ You've tried building things before (maybe they didn't work out)</li>
                <li>✓ You're building now or about to start</li>
                <li>✓ You want to learn the real marketing-first approach, not "build and pray"</li>
                <li>✓ You value watching someone with real experience figure this out in real-time</li>
              </ul>
            </div>

            <div className="rounded-lg p-8 border-l-4 border-gray-300 shadow-sm space-y-4">
              <h3 className="text-xl font-bold text-brand-text-primary">This Is NOT For You If:</h3>
              <ul className="space-y-4 text-lg text-brand-text-primary">
                <li>✗ You need a proven step-by-step system (I'm testing one, not teaching one... yet)</li>
                <li>✗ You want only highlight reels (you'll see the failures too)</li>
                <li>✗ You're already past $10K MRR (you're ahead of where I am)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full border-t border-gray-200/40"></div>

        {/* What You'll Get */}
        <div className="space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-text-primary pb-8">
            What You'll Get
          </h2>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            One email every Thursday. 5-minute read.
          </p>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            Real experiments. Real conversations with customers. Real results (good and bad).
          </p>

          <p className="text-lg font-bold leading-relaxed text-brand-text-primary">
            Recent topics:
          </p>

          <ul className="list-disc list-outside ml-6 space-y-2 text-lg text-brand-text-primary">
            <li>"How I got 72 waitlist signups before writing code"</li>
            <li>"Why I'm building case studies at $0 MRR"</li>
            <li>"What 7 years of closing enterprise deals taught me about early-stage positioning"</li>
            <li>"The side project mistakes I made for 14 years (and what I'm doing differently now)"</li>
          </ul>

          <p className="text-lg leading-relaxed text-brand-text-primary">
            This isn't a course. It's field notes from someone who's been in the trenches for 14 years, finally going all-in.
          </p>

          <p className="text-xl font-bold leading-relaxed text-brand-text-primary">
            If you're tired of building in the dark, join me. Let's test, learn, and grow... one real experiment at a time.
          </p>
        </div>

        

        {/* Email Signup */}
        <div >
          <EmailCaptureForm />
          
        </div>

        {/* P.S. Section */}
        <div className="border-t border-brand-text-secondary/20 pt-16">
          <p className="text-lg leading-relaxed text-brand-text-primary">
            <strong>P.S.</strong> After 14 years of side projects and a corporate career, I quit in April 2025 with 18 months of runway. If this works, I'll have cracked what I've been chasing for over a decade. If it doesn't, you'll learn what NOT to do. Either way, you get the real story.
          </p>
        </div>
      </div>
    </Container>
  )
}