'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import LightboxGallery from '@/components/gallery/LightboxGallery'

const portfolioItems = [
  { id: 1,  src: '/images/portfolio/wedding-centrepiece.webp', aspect: 'landscape', category: 'Weddings',  alt: 'Wedding centrepiece floral arrangement Dubai',  seed: 10 },
  { id: 2,  src: '/images/portfolio/ceiling-florals.webp',     aspect: 'portrait',  category: 'Weddings',  alt: 'Ceiling floral installation wedding Dubai',      seed: 20 },
  { id: 3,  src: '/images/portfolio/arabic-wedding.webp',      aspect: 'landscape', category: 'Weddings',  alt: 'Arabic wedding floral arch Dubai',               seed: 30 },
  { id: 4,  src: '/images/portfolio/indian-wedding.webp',      aspect: 'portrait',  category: 'Weddings',  alt: 'Indian wedding mandap florals Dubai',            seed: 40 },
  { id: 5,  src: '/images/portfolio/bridal-bouquet.webp',      aspect: 'portrait',  category: 'Weddings',  alt: 'Bridal bouquet fresh flowers Dubai',             seed: 50 },
  { id: 6,  src: '/images/portfolio/events-hero.webp',         aspect: 'landscape', category: 'Events',    alt: 'Premium event decor setup Dubai',               seed: 60 },
  { id: 7,  src: '/images/portfolio/private-event.webp',       aspect: 'landscape', category: 'Private',   alt: 'Private event floral decor Dubai',              seed: 70 },
  { id: 8,  src: '/images/portfolio/corporate-hero.webp',      aspect: 'landscape', category: 'Corporate', alt: 'Corporate event floral decor Dubai',            seed: 80 },
  { id: 9,  src: '/images/portfolio/brand-wall.webp',          aspect: 'landscape', category: 'Corporate', alt: 'Brand wall floral installation Dubai',          seed: 15 },
  { id: 10, src: '/images/portfolio/birthday-event.webp',      aspect: 'landscape', category: 'Private',   alt: 'Birthday celebration floral decor Dubai',       seed: 25 },
  { id: 11, src: '/images/portfolio/proposal-event.webp',      aspect: 'portrait',  category: 'Private',   alt: 'Proposal event floral decoration Dubai',        seed: 35 },
  { id: 12, src: '/images/portfolio/theme-party.webp',         aspect: 'landscape', category: 'Private',   alt: 'Theme party floral decor Dubai',                seed: 45 },
]

interface WorkGridProps {
  preview?: boolean
}

export default function WorkGrid({ preview = false }: WorkGridProps) {
  const items = preview ? portfolioItems.slice(0, 6) : portfolioItems
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const lightboxItems = items.map((item) => ({
    id: item.id,
    src: failedImages.has(item.id)
      ? `https://picsum.photos/seed/${item.seed}/1600/1200`
      : item.src,
    alt: item.alt,
    category: item.category,
  }))

  const handleFail = (id: number) =>
    setFailedImages((prev) => new Set(prev).add(id))

  const handleClose = () => setActiveIndex(null)
  const handlePrev = () =>
    setActiveIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null))
  const handleNext = () =>
    setActiveIndex((i) => (i !== null ? (i + 1) % items.length : null))

  return (
    <>
      <section className={cn('section-padding', preview ? 'bg-[#FDFCFA]' : 'bg-[#F5F0E8]')}>
        <div className="container-site">
          <div className="flex items-end justify-between mb-12">
            <div>
              <span className="gold-line mb-4" />
              <h2 className="font-display text-display-md text-[#1C1C1A]">Work</h2>
            </div>
            {preview && (
              <Link
                href="/work"
                className="font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors duration-250 hidden md:block"
              >
                View all →
              </Link>
            )}
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3">
            {items.map((item, i) => (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                className="break-inside-avoid group relative overflow-hidden bg-[#EDE6D8] cursor-pointer w-full block text-left"
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${item.alt}`}
              >
                <div
                  className={cn(
                    'relative w-full',
                    item.aspect === 'portrait' ? 'aspect-[4/5]' : 'aspect-[3/2]'
                  )}
                >
                  {failedImages.has(item.id) ? (
                    // Fallback: picsum placeholder
                    <Image
                      src={`https://picsum.photos/seed/${item.seed}/800/600`}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      unoptimized
                    />
                  ) : (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      onError={() => handleFail(item.id)}
                    />
                  )}

                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/38 transition-colors duration-450 flex items-end justify-between p-4">
                    <span className="font-accent text-[10px] text-white tracking-[0.25em] uppercase translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-250">
                      {item.category}
                    </span>
                    <span
                      className="text-white translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 text-base leading-none"
                      aria-hidden="true"
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </motion.button>
            ))}
          </div>

          {preview && (
            <div className="mt-12 flex justify-center md:hidden">
              <Link
                href="/work"
                className="font-body text-sm text-[#B8963E] border border-[#B8963E] px-6 py-3 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
              >
                View All Work →
              </Link>
            </div>
          )}
        </div>
      </section>

      <LightboxGallery
        items={lightboxItems}
        currentIndex={activeIndex}
        onClose={handleClose}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </>
  )
}
