'use client'

import { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { SITE } from '@/lib/content'

export default function HomepageHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <section ref={ref} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y }}>
        <Image
          src="/images/portfolio/arabic-wedding/arabic-wedding-01.webp"
          alt="Firenze Flora — wedding decor Dubai"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
      </motion.div>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container-site pb-16 md:pb-24 w-full">
        <h1 className="font-display text-display-xl text-[#FDFCFA] mb-5 max-w-4xl leading-[1.05]">
          Where flowers<br />
          <em>tell your story.</em>
        </h1>
        <p className="font-body text-base text-[#F5F0E8]/60 mb-8">
          Premium floral and event decor. Dubai.
        </p>
        <div className="flex flex-col sm:flex-row items-start gap-4">
          <Link
            href="/enquire"
            className="px-7 py-3 bg-[#B8963E] text-white font-body text-sm tracking-widest uppercase hover:bg-[#D4B062] transition-colors"
          >
            Enquire Now
          </Link>
        </div>
      </div>
    </section>
  )
}
