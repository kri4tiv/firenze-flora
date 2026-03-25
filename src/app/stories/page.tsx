import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Stories | Firenze Flora',
  description: 'Selected stories and case studies from weddings and events in Dubai.',
}

const stories = [
  {
    slug: 'arabic-wedding-downtown-dubai',
    title: 'An Arabic Wedding in Downtown Dubai',
    excerpt: 'A grand ballroom transformation at Address Downtown — cascading white florals, chandeliers draped in roses, and an aisle that stopped guests mid-breath.',
    category: 'Weddings',
    date: 'March 2025',
  },
  {
    slug: 'corporate-gala-difc',
    title: 'A Corporate Gala at DIFC',
    excerpt: 'Five hundred guests, a brand-aligned palette of deep navy and gold, and installations that turned a conference hall into a gallery event.',
    category: 'Corporate',
    date: 'February 2025',
  },
  {
    slug: 'indian-wedding-palm',
    title: 'An Indian Wedding on the Palm',
    excerpt: 'Three days. Three mandaps. Marigolds sourced from Rajasthan, orchids flown in from Bangkok, and a couple who had been planning this for two years.',
    category: 'Weddings',
    date: 'January 2025',
  },
  {
    slug: 'intimate-proposal-jumeirah',
    title: 'An Intimate Proposal in Jumeirah',
    excerpt: 'A private beach setting at sunset — rose petals spelling out a question, a canopy of jasmine, and a yes that echoed across the water.',
    category: 'Private',
    date: 'December 2024',
  },
  {
    slug: 'brand-launch-event',
    title: 'A Brand Launch That Turned Heads',
    excerpt: 'A luxury fragrance house needed a debut moment. We built a floral room that became the most photographed activation at Dubai Design Week.',
    category: 'Corporate',
    date: 'November 2024',
  },
  {
    slug: 'western-garden-wedding',
    title: 'A Western Garden Wedding',
    excerpt: 'Outdoor, intimate, and utterly English — peonies, foxgloves, and wild greenery spilling over iron arches at a private villa in the hills.',
    category: 'Weddings',
    date: 'October 2024',
  },
]

export default function StoriesPage() {
  return (
    <>
      <div className="bg-[#1C1C1A] pt-32 pb-16">
        <div className="container-site">
          <span className="gold-line mb-5" />
          <h1 className="font-display text-display-lg text-[#F5F0E8]">Stories</h1>
        </div>
      </div>

      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EDE6D8]">
            {stories.map((story) => (
              <Link key={story.slug} href={`/stories/${story.slug}`} className="bg-[#F5F0E8] group block">
                <div className="relative aspect-[16/9] bg-[#EDE6D8] placeholder-shimmer overflow-hidden">
                  <span className="absolute top-4 left-4 font-accent text-[10px] tracking-[0.2em] text-white uppercase bg-[#B8963E] px-2.5 py-1 z-10">
                    {story.category}
                  </span>
                </div>
                <div className="p-8">
                  <p className="font-body text-xs text-[#8C8279] mb-3">{story.date}</p>
                  <h2 className="font-display text-2xl md:text-3xl text-[#1C1C1A] group-hover:text-[#B8963E] transition-colors leading-tight mb-4">
                    {story.title}
                  </h2>
                  <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">
                    {story.excerpt}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
