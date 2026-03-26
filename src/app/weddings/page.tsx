import type { Metadata } from 'next'
import Image from 'next/image'
import CTAStrip from '@/components/sections/CTAStrip'
import FaqAccordion from '@/components/sections/FaqAccordion'
import Lightbox from '@/components/gallery/Lightbox'
import TypeCards from '@/components/sections/TypeCards'

export const metadata: Metadata = {
  title: 'Weddings | Wedding Decor in Dubai | Firenze Flora',
  description: 'Premium wedding floral decor in Dubai. Arabic, Indian, Iranian, Western & destination weddings. Enquire today.',
}

const weddingTypeCards = [
  { name: 'Arabic Weddings',      image: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp' },
  { name: 'Indian Weddings',      image: '/images/portfolio/indian-wedding/indian-wedding-01.webp' },
  { name: 'Iranian Weddings',     image: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp' },
  { name: 'Western Weddings',     image: '/images/portfolio/centrepiece/centrepiece-01.webp' },
  { name: 'Destination Weddings', image: '/images/portfolio/flower-arch/flower-arch-01.webp' },
]

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend 3–6 months for wedding dates. Peak season October–April books quickly.',
  },
  {
    question: 'Do you handle setup and breakdown?',
    answer: 'Yes — full delivery, setup, and post-event breakdown at your Dubai venue.',
  },
  {
    question: 'Fresh or artificial flowers?',
    answer: 'Primarily fresh flowers imported directly from Holland. Artificial available on request.',
  },
  {
    question: 'Do you cover all of Dubai?',
    answer: 'Yes — all major venues including Jumeirah, DIFC, Palm, Downtown, Madinat, and beyond.',
  },
]

function makeImages(folder: string, count: number, altText: string) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/portfolio/${folder}/${folder}-${String(i + 1).padStart(2, '0')}.webp`,
    alt: altText,
  }))
}

const galleryImages = [
  ...makeImages('arabic-wedding',  28, 'Arabic wedding floral decor Dubai'),
  ...makeImages('indian-wedding',  20, 'Indian wedding decor Dubai'),
  ...makeImages('iranian-wedding', 24, 'Iranian wedding florals Dubai'),
  ...makeImages('centrepiece',     23, 'Wedding centrepiece Dubai'),
  ...makeImages('flower-arch',     15, 'Flower arch Dubai'),
  ...makeImages('reception-decor', 10, 'Reception decor Dubai'),
]

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/portfolio/arabic-wedding/arabic-wedding-01.webp"
          alt="Wedding decor Dubai"
          fill className="object-cover" priority sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-display-lg text-[#F5F0E8]">Weddings</h1>
          <p className="font-body text-lg text-[#F5F0E8]/90 mt-4 max-w-xl mx-auto">
            From intimate ceremonies to grand celebrations. Every culture, every detail, flawlessly executed in Dubai.
          </p>
        </div>
      </div>

      {/* Intro */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site max-w-2xl mx-auto text-center">
          <p className="font-body text-lg text-[#B0A89E] leading-[1.85]">
            Firenze Flora has been crafting wedding florals in Dubai for over 14 years. We work across all cultures
            and styles — bringing the same level of precision and passion to every event, regardless of scale.
            We import flowers directly from Holland to ensure every arrangement is fresh and distinctive.
          </p>
        </div>
      </section>

      {/* Wedding types */}
      <TypeCards heading="Weddings we specialise in" cards={weddingTypeCards} />

      {/* Gallery */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-sm text-[#F5F0E8] mb-10">Wedding Gallery</h2>
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
