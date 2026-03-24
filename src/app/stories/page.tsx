import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Stories | Firenze Flora',
  description: 'Selected stories and case studies from weddings and events in Dubai.',
}

const stories = [
  { slug: 'arabic-wedding-downtown-dubai', title: 'An Arabic Wedding in Downtown Dubai', category: 'Weddings', date: 'March 2025' },
  { slug: 'corporate-gala-difc', title: 'A Corporate Gala at DIFC', category: 'Corporate', date: 'February 2025' },
  { slug: 'indian-wedding-palm', title: 'An Indian Wedding on the Palm', category: 'Weddings', date: 'January 2025' },
  { slug: 'intimate-proposal-jumeirah', title: 'An Intimate Proposal in Jumeirah', category: 'Private', date: 'December 2024' },
  { slug: 'brand-launch-event', title: 'A Brand Launch That Turned Heads', category: 'Corporate', date: 'November 2024' },
  { slug: 'western-garden-wedding', title: 'A Western Garden Wedding', category: 'Weddings', date: 'October 2024' },
]

export default function StoriesPage() {
  return (
    <>
      <div className="pt-32 pb-16 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">From Our Studio</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A]">Stories</h1>
      </div>
      <section className="container-site pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#EDE6D8]">
          {stories.map((story) => (
            <Link key={story.slug} href={`/stories/${story.slug}`} className="bg-[#F5F0E8] group block">
              <div className="aspect-[3/2] bg-[#EDE6D8] placeholder-shimmer" />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase">{story.category}</span>
                  <span className="text-[#8C8279] text-xs">·</span>
                  <span className="font-body text-xs text-[#8C8279]">{story.date}</span>
                </div>
                <h2 className="font-display text-xl text-[#1C1C1A] group-hover:text-[#B8963E] transition-colors">{story.title}</h2>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <EnquireCTA />
    </>
  )
}
