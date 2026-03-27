'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { motion, useScroll, useTransform, LazyMotion, domAnimation } from 'framer-motion'
import { SITE } from '@/lib/content'

export default function HomepageHero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  return (
    <LazyMotion features={domAnimation}>
      <section ref={ref} className="relative h-screen min-h-[600px] flex items-end overflow-hidden">
        {/* Video background */}
        <motion.div className="absolute inset-0 z-0 bg-[#0A0A0A]" style={{ y }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="absolute inset-0 w-full h-full object-cover"
            poster="/images/heroes/hero-weddings.webp"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-black/55" />
        </motion.div>

        {/* Content */}
        <div className="relative z-10 container-site pb-16 md:pb-24 w-full">
          <h1 className="font-display text-display-xl-sm text-[#FDFCFA] mb-5 max-w-4xl leading-[0.95]">
            Where flowers<br />
            <em>tell your story.</em>
          </h1>
          <p className="font-body text-base text-[#F5F0E8]/60 mb-8">
            Premium floral and event decor. Dubai.
          </p>
          <div className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/enquire"
              className="px-7 py-3 bg-[#D4A5B5] text-white font-body text-sm tracking-widest uppercase hover:bg-[#E8C4D0] transition-colors"
            >
              Enquire Now
            </Link>
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
