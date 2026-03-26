import type { Metadata } from 'next'
import Image from 'next/image'
import CTAStrip from '@/components/sections/CTAStrip'
import FaqAccordion from '@/components/sections/FaqAccordion'
import Lightbox from '@/components/gallery/Lightbox'

export const metadata: Metadata = {
  title: 'Events | Premium Event Decor in Dubai | Firenze Flora',
  description: 'Corporate, private, and brand event decor in Dubai. Birthday parties, anniversaries, corporate galas, openings. Creative concept, flawless setup.',
}

const eventTypes = [
  'Private Parties', 'Corporate Events', 'Brand Activations', 'Product Launches',
  'Openings & Ceremonies', 'Birthdays', 'Anniversaries', 'Baby Showers', 'Proposals', 'Graduations',
]

const faqs = [
  {
    question: 'What is your minimum event budget?',
    answer: 'We work with events from AED 3,000 upwards. Corporate and large-scale events typically start from AED 15,000.',
  },
  {
    question: 'Do you handle concept and design?',
    answer: 'Yes — full concept development, material sourcing, professional setup, and post-event breakdown.',
  },
  {
    question: 'How quickly can you turn around an event?',
    answer: 'For smaller events, we can often accommodate 2–3 weeks notice. Larger productions require 4–8 weeks.',
  },
  {
    question: 'Do you work with corporate clients?',
    answer: 'Yes — we have extensive experience with corporate galas, brand activations, product launches, and opening ceremonies.',
  },
]

const galleryImages = [
  { src: '/images/portfolio/reception-decor/reception-decor-01.webp', alt: 'Reception decor Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-02.webp', alt: 'Event florals Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-03.webp', alt: 'Corporate event Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-04.webp', alt: 'Event decor Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-05.webp', alt: 'Event styling Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-06.webp', alt: 'Reception florals Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-07.webp', alt: 'Event setup Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-08.webp', alt: 'Event backdrop Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-09.webp', alt: 'Corporate florals Dubai' },
  { src: '/images/portfolio/reception-decor/reception-decor-10.webp', alt: 'Event centrepiece Dubai' },
  { src: '/images/portfolio/corporate-hero.webp',    alt: 'Corporate event Dubai' },
  { src: '/images/portfolio/brand-wall.webp',        alt: 'Brand flower wall Dubai' },
  { src: '/images/portfolio/brand-activation.webp',  alt: 'Brand activation Dubai' },
  { src: '/images/portfolio/private-event.webp',     alt: 'Private event Dubai' },
  { src: '/images/portfolio/birthday-event.webp',    alt: 'Birthday decor Dubai' },
  { src: '/images/portfolio/anniversary-event.webp', alt: 'Anniversary decor Dubai' },
  { src: '/images/portfolio/proposal-event.webp',    alt: 'Proposal florals Dubai' },
  { src: '/images/portfolio/soft-opening.webp',      alt: 'Opening ceremony Dubai' },
  { src: '/images/portfolio/theme-party.webp',       alt: 'Theme party decor Dubai' },
  { src: '/images/portfolio/corporate-gifting.webp', alt: 'Corporate gifting Dubai' },
  { src: '/images/portfolio/corporate-lunch.webp',   alt: 'Corporate lunch decor Dubai' },
  { src: '/images/portfolio/events-hero.webp',       alt: 'Events florals Dubai' },
]

export default function EventsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/portfolio/corporate-hero.webp"
          alt="Event decor Dubai"
          fill className="object-cover" priority sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-display-lg text-[#F5F0E8]">Events</h1>
          <p className="font-body text-base text-[#F5F0E8]/60 mt-4 max-w-xl mx-auto">
            Corporate galas, private celebrations, brand activations. We bring every event to life.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site max-w-2xl mx-auto text-center">
          <p className="font-body text-base text-[#8C8279] leading-relaxed">
            Firenze Flora handles events of every scale — from intimate private gatherings to large-scale
            corporate productions. Our team manages everything: concept, florals, decor, setup, and breakdown.
            One call is all it takes.
          </p>
        </div>
      </section>

      {/* Event types */}
      <section className="bg-[#141414] py-16">
        <div className="container-site">
          <h2 className="font-display text-display-sm text-[#F5F0E8] text-center mb-12">
            Events we cover
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {eventTypes.map(type => (
              <span
                key={type}
                className="border border-[#242424] px-5 py-2.5 text-sm text-[#8C8279] font-body hover:border-[#B8963E] hover:text-[#F5F0E8] transition-all duration-200"
              >
                {type}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-sm text-[#F5F0E8] mb-10">Events Gallery</h2>
          <Lightbox images={galleryImages} className="columns-1 sm:columns-2 lg:columns-3 gap-3" />
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#141414] py-24">
        <div className="container-site max-w-2xl mx-auto">
          <h2 className="font-display text-display-sm text-[#F5F0E8] mb-10">Common questions</h2>
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
