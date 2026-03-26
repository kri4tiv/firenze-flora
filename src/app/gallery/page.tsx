import type { Metadata } from 'next'
import Lightbox from '@/components/gallery/Lightbox'

export const metadata: Metadata = {
  title: 'Gallery | Firenze Flora Dubai',
  description: '14 years of floral and event decor across Dubai\'s finest venues. Browse our full portfolio.',
}

function makeImages(folder: string, count: number, altText: string) {
  return Array.from({ length: count }, (_, i) => ({
    src: `/images/portfolio/${folder}/${folder}-${String(i + 1).padStart(2, '0')}.webp`,
    alt: altText,
  }))
}

const weddingImages = [
  ...makeImages('arabic-wedding',  28, 'Arabic wedding decor Dubai'),
  ...makeImages('indian-wedding',  20, 'Indian wedding florals Dubai'),
  ...makeImages('iranian-wedding', 24, 'Iranian wedding decor Dubai'),
  ...makeImages('centrepiece',     23, 'Wedding centrepiece Dubai'),
  ...makeImages('flower-arch',     15, 'Flower arch Dubai'),
]

const eventImages = [
  ...makeImages('reception-decor', 10, 'Reception decor Dubai'),
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

export default function GalleryPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#141414] pt-40 pb-24 text-center">
        <h1 className="font-display text-display-lg text-[#F5F0E8]">Gallery</h1>
        <p className="font-body text-base text-[#8C8279] mt-4">
          14 years of florals across Dubai&apos;s finest venues.
        </p>
      </div>

      {/* Weddings section */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-10">Weddings</h2>
          <Lightbox images={weddingImages} className="columns-1 sm:columns-2 lg:columns-3 gap-3" />
        </div>
      </section>

      <div className="border-b border-[#242424] my-0" />

      {/* Events section */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-10">Events</h2>
          <Lightbox images={eventImages} className="columns-1 sm:columns-2 lg:columns-3 gap-3" />
        </div>
      </section>
    </>
  )
}
