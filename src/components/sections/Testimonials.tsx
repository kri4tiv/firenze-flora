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

export default function Testimonials() {
  return (
    <section className="section-padding bg-[#F5F0E8]">
      <div className="container-site">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A]">What our clients say</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EDE6D8]">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#F5F0E8] p-8 md:p-10 flex flex-col"
            >
              <StarRating rating={t.rating} />

              <blockquote className="font-display text-lg md:text-xl italic text-[#1C1C1A] leading-snug flex-1 mb-8">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              <div className="border-t border-[#EDE6D8] pt-5">
                <p className="font-body text-sm font-medium text-[#1C1C1A]">{t.author}</p>
                <p className="font-body text-xs font-light text-[#8C8279] mt-1 leading-relaxed">
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
