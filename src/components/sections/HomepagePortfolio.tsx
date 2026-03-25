'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import LightboxGallery from '@/components/gallery/LightboxGallery'

const images = [
  { src: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp', alt: 'Arabic wedding floral arch Dubai', seed: 10 },
  { src: '/images/portfolio/indian-wedding/indian-wedding-01.webp',  alt: 'Indian wedding mandap florals Dubai', seed: 20 },
  { src: '/images/portfolio/flower-arch/flower-arch-01.webp',         alt: 'Flower arch installation Dubai', seed: 30 },
  { src: '/images/portfolio/centrepiece/centrepiece-01.webp',         alt: 'Wedding centrepiece arrangement Dubai', seed: 40 },
  { src: '/images/portfolio/iranian-wedding/iranian-wedding-01.webp', alt: 'Iranian wedding decoration Dubai', seed: 50 },
  { src: '/images/portfolio/reception-decor/reception-decor-01.webp', alt: 'Reception decor florals Dubai', seed: 60 },
]

export default function HomepagePortfolio() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [failed, setFailed] = useState<Set<number>>(new Set())

  const lightboxItems = images.map((img, i) => ({
    id: i,
    src: failed.has(i) ? `https://picsum.photos/seed/${img.seed}/1200/900` : img.src,
    alt: img.alt,
    category: 'Portfolio',
  }))

  return (
    <>
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="gold-line mb-4" />
              <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
                Portfolio
              </p>
              <h2 className="font-display text-display-md text-[#1C1C1A]">
                Explore Our Creative Portfolio
              </h2>
            </div>
            <div>
              <p className="font-body text-sm font-light text-[#8C8279] max-w-xs leading-relaxed mb-4 md:mb-0 md:text-right">
                We don&apos;t follow trends; we set them. Our events are a canvas of floral innovation.
              </p>
            </div>
          </div>

          {/* 6-image grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {images.map((img, i) => (
              <motion.button
                key={i}
                type="button"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="group relative overflow-hidden bg-[#EDE6D8] aspect-square cursor-pointer"
                onClick={() => setActiveIndex(i)}
                aria-label={`View ${img.alt}`}
              >
                <Image
                  src={failed.has(i) ? `https://picsum.photos/seed/${img.seed}/800/800` : img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 768px) 50vw, 33vw"
                  onError={() => setFailed((p) => new Set(p).add(i))}
                />
                <div className="absolute inset-0 bg-[#1C1C1A]/0 group-hover:bg-[#1C1C1A]/40 transition-colors duration-450 flex items-center justify-center">
                  <span className="text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-250">
                    ↗
                  </span>
                </div>
              </motion.button>
            ))}
          </div>

          <div className="mt-10 flex justify-center">
            <Link
              href="/work"
              className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] border border-[#B8963E] px-7 py-3 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
            >
              View More →
            </Link>
          </div>
        </div>
      </section>

      <LightboxGallery
        items={lightboxItems}
        currentIndex={activeIndex}
        onClose={() => setActiveIndex(null)}
        onPrev={() => setActiveIndex((i) => (i !== null ? (i - 1 + images.length) % images.length : null))}
        onNext={() => setActiveIndex((i) => (i !== null ? (i + 1) % images.length : null))}
      />
    </>
  )
}
