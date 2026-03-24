'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import LightboxGallery from '@/components/gallery/LightboxGallery'

const portfolioItems = [
  { id: 1, seed: 10, aspect: 'landscape', category: 'Weddings',  alt: 'Arabic wedding floral arch Dubai' },
  { id: 2, seed: 20, aspect: 'portrait',  category: 'Weddings',  alt: 'Indian wedding mandap florals Dubai' },
  { id: 3, seed: 30, aspect: 'landscape', category: 'Corporate', alt: 'Corporate event decor Dubai' },
  { id: 4, seed: 40, aspect: 'portrait',  category: 'Weddings',  alt: 'Wedding reception centrepieces Dubai' },
  { id: 5, seed: 50, aspect: 'landscape', category: 'Private',   alt: 'Private birthday celebration decor Dubai' },
  { id: 6, seed: 60, aspect: 'landscape', category: 'Weddings',  alt: 'Flower wall wedding backdrop Dubai' },
  { id: 7, seed: 70, aspect: 'portrait',  category: 'Corporate', alt: 'Office decoration floral Dubai' },
  { id: 8, seed: 80, aspect: 'landscape', category: 'Weddings',  alt: 'Wedding ceremony arch floral Dubai' },
]

interface WorkGridProps {
  preview?: boolean
}

export default function WorkGrid({ preview = false }: WorkGridProps) {
  const items = preview ? portfolioItems.slice(0, 6) : portfolioItems
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const lightboxItems = items.map((item) => ({
    id: item.id,
    src: `https://picsum.photos/seed/${item.seed}/1600/1200`,
    alt: item.alt,
    category: item.category,
  }))

  const handleClose = () => setActiveIndex(null)
  const handlePrev = () =>
    setActiveIndex((i) => (i !== null ? (i - 1 + items.length) % items.length : null))
  const handleNext = () =>
    setActiveIndex((i) => (i !== null ? (i + 1) % items.length : null))

  return (
    <>
      <section className={cn('section-padding', preview ? 'bg-[#FDFCFA]' : 'bg-[#F5F0E8]')}>
        <div className="container-site">
          {/* Header */}
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

          {/* Masonry grid */}
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
                  <Image
                    src={`https://picsum.photos/seed/${item.seed}/800/600`}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    unoptimized
                  />

                  {/* Hover overlay */}
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

          {/* Mobile CTA */}
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
