'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import LightboxGallery from '@/components/gallery/LightboxGallery'

type Category = 'All' | 'Weddings' | 'Events' | 'Corporate'

const categories: Category[] = ['All', 'Weddings', 'Events', 'Corporate']

const portfolioItems = [
  // Real imported images
  { id: 1,  src: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp',  aspect: 'landscape', category: 'Weddings',  alt: 'Arabic wedding floral arch Dubai',               seed: 10 },
  { id: 2,  src: '/images/portfolio/indian-wedding/indian-wedding-01.webp',  aspect: 'portrait',  category: 'Weddings',  alt: 'Indian wedding mandap florals Dubai',            seed: 20 },
  { id: 3,  src: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp',aspect: 'landscape', category: 'Weddings',  alt: 'Iranian wedding floral decor Dubai',             seed: 30 },
  { id: 4,  src: '/images/portfolio/centrepiece/centrepiece-01.webp',         aspect: 'portrait',  category: 'Weddings',  alt: 'Wedding centrepiece floral arrangement Dubai',  seed: 40 },
  { id: 5,  src: '/images/portfolio/flower-arch/flower-arch-01.webp',         aspect: 'landscape', category: 'Weddings',  alt: 'Flower arch installation wedding Dubai',         seed: 50 },
  { id: 6,  src: '/images/portfolio/reception-decor/reception-decor-01.webp', aspect: 'landscape', category: 'Events',    alt: 'Reception decor florals Dubai',                 seed: 60 },
  { id: 7,  src: '/images/portfolio/arabic-wedding/arabic-wedding-02.webp',  aspect: 'portrait',  category: 'Weddings',  alt: 'Arabic wedding decoration Dubai',               seed: 70 },
  { id: 8,  src: '/images/portfolio/flower-arch/flower-arch-02.webp',         aspect: 'landscape', category: 'Events',    alt: 'Corporate event flower arch Dubai',             seed: 80 },
  { id: 9,  src: '/images/portfolio/centrepiece/centrepiece-02.webp',         aspect: 'landscape', category: 'Corporate', alt: 'Corporate gala centrepiece Dubai',              seed: 15 },
  { id: 10, src: '/images/portfolio/indian-wedding/indian-wedding-02.webp',  aspect: 'landscape', category: 'Weddings',  alt: 'Indian wedding decor Dubai',                    seed: 25 },
  { id: 11, src: '/images/portfolio/iranian-wedding/iranian-wedding-02.webp',aspect: 'portrait',  category: 'Weddings',  alt: 'Iranian wedding florals Dubai',                 seed: 35 },
  { id: 12, src: '/images/portfolio/reception-decor/reception-decor-02.webp', aspect: 'landscape', category: 'Corporate', alt: 'Corporate reception decor Dubai',               seed: 45 },
]

interface WorkGridProps {
  preview?: boolean
  category?: Category
}

export default function WorkGrid({ preview = false, category }: WorkGridProps) {
  const [activeCategory, setActiveCategory] = useState<Category>(category ?? 'All')
  const [failedImages, setFailedImages] = useState<Set<number>>(new Set())
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const filtered = portfolioItems.filter(
    (item) => activeCategory === 'All' || item.category === activeCategory
  )
  const items = preview ? filtered.slice(0, 6) : filtered

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
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <span className="gold-line mb-4" />
              {preview
                ? <h2 className="font-display text-display-md text-[#1C1C1A]">Selected Work</h2>
                : <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-1">Portfolio</p>
              }
            </div>
            <div className="flex items-center gap-1">
              {!preview && categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    'font-body text-xs tracking-wider uppercase px-4 py-2 transition-all duration-250',
                    activeCategory === cat
                      ? 'bg-[#B8963E] text-white'
                      : 'text-[#8C8279] hover:text-[#1C1C1A]'
                  )}
                >
                  {cat}
                </button>
              ))}
              {preview && (
                <Link
                  href="/work"
                  className="font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors duration-250 hidden md:block"
                >
                  View all →
                </Link>
              )}
            </div>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="columns-1 sm:columns-2 lg:columns-3 gap-3 space-y-3"
            >
              {items.map((item, i) => (
                <motion.button
                  key={item.id}
                  type="button"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
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

                    {/* Hover overlay — dark + warm gold tint */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-[#B8963E]/10 group-hover:bg-gradient-to-t group-hover:from-[#1C1C1A]/50 transition-all duration-450 flex items-end justify-between p-4">
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
            </motion.div>
          </AnimatePresence>

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
