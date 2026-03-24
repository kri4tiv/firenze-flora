import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

// Canonical story data — must stay in sync with /stories/page.tsx
const stories = [
  { slug: 'arabic-wedding-downtown-dubai', title: 'An Arabic Wedding in Downtown Dubai',  category: 'Weddings',  date: 'March 2025',    service: '/services/weddings' },
  { slug: 'corporate-gala-difc',           title: 'A Corporate Gala at DIFC',             category: 'Corporate', date: 'February 2025', service: '/services/events' },
  { slug: 'indian-wedding-palm',           title: 'An Indian Wedding on the Palm',         category: 'Weddings',  date: 'January 2025',  service: '/services/weddings' },
  { slug: 'intimate-proposal-jumeirah',    title: 'An Intimate Proposal in Jumeirah',      category: 'Private',   date: 'December 2024', service: '/services/events' },
  { slug: 'brand-launch-event',            title: 'A Brand Launch That Turned Heads',      category: 'Corporate', date: 'November 2024', service: '/services/events' },
  { slug: 'western-garden-wedding',        title: 'A Western Garden Wedding',              category: 'Weddings',  date: 'October 2024',  service: '/services/weddings' },
]

// Placeholder image seeds for the 5-image gallery strip
const gallerySeedsMap: Record<string, number[]> = {
  'arabic-wedding-downtown-dubai': [96, 10, 58, 64, 40],
  'corporate-gala-difc':           [38, 1, 2, 30, 62],
  'indian-wedding-palm':           [81, 20, 40, 58, 10],
  'intimate-proposal-jumeirah':    [62, 20, 50, 70, 80],
  'brand-launch-event':            [2, 1, 38, 30, 62],
  'western-garden-wedding':        [10, 58, 96, 64, 81],
}

interface Props {
  params: { slug: string }
}

export async function generateStaticParams() {
  return stories.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const story = stories.find((s) => s.slug === params.slug)
  const title = story?.title ?? 'Story'
  return {
    title: `${title} | Firenze Flora`,
    description: `${title} — a story of beauty and precision, crafted in Dubai by Firenze Flora.`,
  }
}

export default function StoryPage({ params }: Props) {
  const story = stories.find((s) => s.slug === params.slug)
  const title = story?.title ?? toTitleCase(params.slug.replace(/-/g, ' '))
  const category = story?.category ?? 'Stories'
  const date = story?.date ?? ''
  const serviceHref = story?.service ?? '/services'
  const serviceLabel = serviceHref.includes('weddings') ? 'Wedding Services' : 'Event Services'
  const seeds = gallerySeedsMap[params.slug] ?? [10, 20, 30, 40, 50]

  return (
    <>
      {/* Page header */}
      <div className="pt-32 pb-12 container-site">
        <div className="flex items-center gap-3 mb-5">
          <Link
            href="/stories"
            className="font-body text-xs text-[#8C8279] hover:text-[#B8963E] transition-colors"
          >
            ← Stories
          </Link>
          <span className="text-[#EDE6D8]">·</span>
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase">{category}</span>
          {date && (
            <>
              <span className="text-[#EDE6D8]">·</span>
              <span className="font-body text-xs text-[#8C8279]">{date}</span>
            </>
          )}
        </div>
        <h1 className="font-display text-display-lg text-[#1C1C1A] max-w-2xl">{title}</h1>
      </div>

      {/* 5-image gallery strip */}
      <section className="container-site pb-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {seeds.map((seed, i) => (
            <div
              key={i}
              className={
                'relative overflow-hidden bg-[#EDE6D8] ' +
                (i === 0 ? 'col-span-2 md:col-span-2 aspect-[3/2]' : 'aspect-square')
              }
            >
              {/* Shimmer placeholder — swap for real story images when available */}
              <div className="absolute inset-0 placeholder-shimmer" />
            </div>
          ))}
        </div>
      </section>

      {/* Editorial narrative */}
      <section className="container-site pb-16 max-w-2xl">
        <span className="gold-line mb-6" />
        <p className="font-display text-xl text-[#1C1C1A] italic leading-relaxed mb-6">
          A story of beauty and precision, crafted in Dubai.
        </p>
        <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed mb-6">
          Every detail was considered. From the first consultation to the final arrangement, the
          Firenze Flora team brought together florals, lighting, and concept to create an environment
          that exceeded every expectation. This is what we do — and we do it with intention.
        </p>
        <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">
          If you&apos;re planning something similar, we&apos;d love to hear your vision.
        </p>

        {/* Internal links */}
        <div className="flex flex-wrap gap-4 mt-10">
          <Link
            href={serviceHref}
            className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] border border-[#B8963E] px-5 py-2.5 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
          >
            {serviceLabel} →
          </Link>
          <Link
            href="/stories"
            className="inline-flex items-center gap-2 font-body text-sm text-[#8C8279] border border-[#EDE6D8] px-5 py-2.5 hover:border-[#8C8279] transition-colors duration-250"
          >
            More Stories
          </Link>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}

function toTitleCase(str: string): string {
  return str.replace(/\b\w/g, (c) => c.toUpperCase())
}
