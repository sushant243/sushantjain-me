import Container from '@/components/Container'
import EmailCaptureForm from '@/components/EmailCaptureForm'

export default function VideoCoursePage() {
  return (
    <Container className="py-12">
      <div className="max-w-4xl mx-auto">
        {/* Section 1: Opening Frame */}
        <h1 className="text-5xl font-bold my-6">Life Mastery Academy (2017 Edition)</h1>
        <p className="text-2xl text-gray-600 dark:text-gray-400 mb-24">The info product I built before I understood marketing... and what it taught me about building things that don&apos;t spread.</p>

        <div className="prose prose-lg dark:prose-invert max-w-none mb-24 space-y-6">
          <p> <span className='font-bold'>In 2017</span>, I spent months creating this <span className='italic'>10-module video course on personal transformation.</span></p>

          <p><span className='font-bold'>The production quality?</span> Professional. I hired a crew, rented a studio, scripted everything. It cost around <span className='font-bold'>$2K.</span></p>

          <p><span className='font-bold'>The problem?</span> I had no idea who it was for or how to reach them. <br /> I thought a good product would sell itself.</p>

          <p className='font-extrabold'>It didn&apos;t. I never launched it publicly.</p>

          <hr className="border-t border-neutral-200 my-6" />

          <p> I also wasn&apos;t a natural on camera. <br /> <span className='italic'>English isn&apos;t my first language</span>... I grew up in Hindi medium school so speaking for five hours on video was a stretch. <br /> But <span className='font-bold'>I practiced for 90 days</span> and did it anyway.
<br /> <br />Looking back, <span className='font-bold'>I&apos;m proud of that version of me.</span> <br />He didn&apos;t have perfect delivery, but he had courage.</p>

          <hr className="border-t border-neutral-200 my-6" />

          <p>Eight years later, I&apos;m making it available - not because it&apos;s my best work, but because it’s part of the journey that got me here.</p>

         

          <p><span className="font-bold">The irony?</span> The course content on transformation and goal-setting is solid. <br /> But I couldn&apos;t transform it into a business because I didn&apos;t understand marketing.</p>

          <p className="font-bold text-xl pt-4">Now I&apos;m building <span className="italic">Lessgo.ai</span> with a marketing first approach.</p>
        </div>

        {/* Section 2: The Videos */}
        <h2 className="text-3xl font-semibold mb-12 underline">All 10 Modules</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 mb-12">
          {/* Module 1 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/WTtedKmhHqw"
                title="Life Mastery Academy - Module 1: Success Is For Everyone"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 1: Success Is For Everyone</h3>
          </div>

          {/* Module 2 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/9O-MyQ1CYDg"
                title="Life Mastery Academy - Module 2: The First Rule Of Success"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 2: The First Rule Of Success</h3>
          </div>

          {/* Module 3 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/i1rC5tWQL4A"
                title="Life Mastery Academy - Module 3: The Area of Excellence"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 3: The Area of Excellence</h3>
          </div>

          {/* Module 4 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/p6WdGZb0FJo"
                title="Life Mastery Academy - Module 4: Communicate to Convince"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 4: Communicate to Convince</h3>
          </div>

          {/* Module 5 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/VUxFUbsaxqQ"
                title="Life Mastery Academy - Module 5: The Road to Financial Freedom"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 5: The Road to Financial Freedom</h3>
          </div>

          {/* Module 6 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/bkzMZuhxS-Y"
                title="Life Mastery Academy - Module 6: How to Control Time"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 6: How to Control Time</h3>
          </div>

          {/* Module 7 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/Oxehtj8pLCc"
                title="Life Mastery Academy - Module 7: How to Stay Motivated"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 7: How to Stay Motivated</h3>
          </div>

          {/* Module 8 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/-Ym16GivQsU"
                title="Life Mastery Academy - Module 8: Affirmations and Visualization"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 8: Affirmations and Visualization</h3>
          </div>

          {/* Module 9 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/eIOKcdWbwU0"
                title="Life Mastery Academy - Module 9: How to Control Our Environment"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 9: How to Control Our Environment</h3>
          </div>

          {/* Module 10 */}
          <div>
            <div className="aspect-video mb-3">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/DFX2RyPFI38"
                title="Life Mastery Academy - Module 10: Go Insane or Go Home"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg"
              ></iframe>
            </div>
            <h3 className="font-semibold text-lg">Module 10: Go Insane or Go Home</h3>
          </div>
        </div>

        {/* Section 3: Closing + CTA */}

         <div className="my-6 space-y-5">
          <h2 className='text-2xl font-semibold mb-6 underline pt-24'> Here’s what I learned the hard way: </h2>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">I optimized for production quality instead of audience clarity.</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">I created content I wanted to make, not content people were asking for.</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">I assumed &quot;build it and they will come.&quot;</p>
            </div>
            <div className="flex items-start gap-3">
              <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              <p className="text-lg">They didn&apos;t.</p>
            </div>
          </div>

          <hr className="border-t border-neutral-200 my-6" />
        <div className="prose prose-lg dark:prose-invert max-w-none mb-8 pt-12 space-y-8">
          <p>A polished course with no audience is just expensive self-expression.</p>

          <p>I spent $2K on production. €0 on validating if anyone wanted this.</p>

          <p>With Lessgo.ai, I&apos;m doing the opposite - 72 people on the waitlist before writing a single line of code. That&apos;s the difference between building something and building something people will pay for.</p>

          <p className="text-xl font-semibold">Want to follow the new journey?</p>
        </div>

        <EmailCaptureForm />
      </div>
    </Container>
  )
}