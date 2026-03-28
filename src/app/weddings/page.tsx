import type { Metadata } from 'next'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import CTAStrip from '@/components/sections/CTAStrip'
import FaqAccordion from '@/components/sections/FaqAccordion'
import WeddingTypesSection from '@/components/sections/WeddingTypesSection'

const Lightbox = dynamic(() => import('@/components/gallery/Lightbox'), {
  loading: () => <div className="w-full h-64 bg-[#141414] animate-pulse" />,
  ssr: false,
})

export const metadata: Metadata = {
  title: 'Weddings | Wedding Decor in Dubai | Firenze Flora',
  description: 'Premium wedding floral decor in Dubai. Arabic, Indian, Iranian, Western and destination weddings. Enquire today.',
}

const faqs = [
  {
    question: 'How far in advance should I book?',
    answer: 'We recommend 3 to 6 months for wedding dates. Peak season, October to April, books quickly.',
  },
  {
    question: 'Do you handle setup and breakdown?',
    answer: 'Yes. Full delivery, setup, and post-event breakdown at your Dubai venue.',
  },
  {
    question: 'Fresh or artificial flowers?',
    answer: 'Primarily fresh flowers imported directly from Holland. Artificial available on request.',
  },
  {
    question: 'Do you cover all of Dubai?',
    answer: 'Yes. All major venues including Jumeirah, DIFC, Palm, Downtown, Madinat, and beyond.',
  },
]

function makeImages(folder: string, count: number, altText: string) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/portfolio/${folder}/${folder}-${String(i + 1).padStart(2, '0')}.webp`,
    alt: altText,
  }))
}

const galleryImages = [
  ...makeImages('arabic-wedding',  5, 'Arabic wedding floral decor Dubai'),
  ...makeImages('indian-wedding',  5, 'Indian wedding decor Dubai'),
  ...makeImages('iranian-wedding', 5, 'Iranian wedding florals Dubai'),
  ...makeImages('centrepiece',     5, 'Wedding centrepiece Dubai'),
  ...makeImages('flower-arch',     5, 'Flower arch Dubai'),
  ...makeImages('reception-decor', 5, 'Reception decor Dubai'),
]

export default function WeddingsPage() {
  return (
    <>
      {/* Combined hero + intro */}
      <section className="relative overflow-hidden" style={{ minHeight: '80vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-weddings.webp"
            alt="Wedding floral decor Dubai"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.85) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/30" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        {/* Hero title */}
        <div className="relative z-10 flex items-center justify-center text-center pt-40 pb-16 px-6">
          <div>
            <h1 className="font-display text-display-md md:text-display-lg text-[#F5F0E8]">Weddings</h1>
            <p className="mt-4 text-lg text-[#F5F0E8]/80 max-w-xl mx-auto">
              From intimate ceremonies to grand celebrations. Every culture, every detail, flawlessly executed in Dubai.
            </p>
          </div>
        </div>

        {/* Intro text */}
        <div className="relative z-10 pb-24 px-6">
          <div className="max-w-2xl mx-auto text-center">
            <p className="font-body text-lg text-[#F5F0E8]/80 leading-[1.85]">
              Firenze Flora has been crafting wedding florals in Dubai for over 14 years. We work across all cultures
              and styles, bringing the same level of precision and passion to every event, regardless of scale.
              We import flowers directly from Holland to ensure every arrangement is fresh and distinctive.
            </p>
          </div>
        </div>
      </section>

      {/* Wedding types */}
      <WeddingTypesSection />

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
