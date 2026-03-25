'use client'

import { motion } from 'framer-motion'
import { TESTIMONIALS } from '@/lib/content'

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1 mb-5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }).map((_, i) => (
        <span key={i} className="text-[#B8963E] text-sm" aria-hidden="true">★</span>
      ))}
    </div>
  )
}

interface TestimonialsProps {
  dark?: boolean
}

export default function Testimonials({ dark = false }: TestimonialsProps) {
  const bg = dark ? 'bg-[#1C1C1A]' : 'bg-[#F5F0E8]'
  const cardBg = dark ? 'bg-[#2E2E2C]' : 'bg-[#F5F0E8]'
  const divider = dark ? 'bg-[#3A3A38]' : 'bg-[#EDE6D8]'
  const quoteColor = dark ? 'text-[#F5F0E8]' : 'text-[#1C1C1A]'
  const authorColor = dark ? 'text-[#F5F0E8]' : 'text-[#1C1C1A]'
  const venueColor = 'text-[#8C8279]'
  const borderColor = dark ? 'border-[#3A3A38]' : 'border-[#EDE6D8]'
  const headingColor = dark ? 'text-[#F5F0E8]' : 'text-[#1C1C1A]'

  return (
    <section className={`section-padding ${bg}`}>
      <div className="container-site">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          {dark ? (
            <>
              <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
                Our Clients
              </p>
              <h2 className={`font-display text-display-md ${headingColor} mb-3`}>
                Our Top Cherished Clients: The Heart of Our Success
              </h2>
              <p className="font-body text-sm font-light text-[#8C8279] max-w-2xl leading-relaxed">
                A symphony of success stories: each client we&apos;ve had the privilege to serve has
                contributed to our journey, enriching it with their unique stories, visions, and aspirations.
              </p>
            </>
          ) : (
            <h2 className={`font-display text-display-md ${headingColor}`}>What our clients say</h2>
          )}
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-3 gap-px ${divider}`}>
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`${cardBg} p-8 md:p-10 flex flex-col`}
            >
              <StarRating rating={t.rating} />

              <blockquote className={`font-display text-lg md:text-xl italic ${quoteColor} leading-snug flex-1 mb-8`}>
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className={`border-t ${borderColor} pt-5`}>
                <p className={`font-body text-sm font-medium ${authorColor}`}>{t.author}</p>
                <p className={`font-accent text-xs tracking-[0.15em] uppercase text-[#B8963E] mt-1`}>
                  {t.venue}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
