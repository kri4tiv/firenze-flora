'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import Link from 'next/link'
import { HOME } from '@/lib/content'

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null)
  const prefersReduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  })

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0])


  return (
    <section
      ref={containerRef}
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      aria-label="Hero"
    >
      {/* ── Parallax background ── */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: prefersReduced ? '0%' : bgY }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(ellipse at 30% 60%, #D4A5B51A 0%, transparent 60%),
              radial-gradient(ellipse at 80% 20%, #8C827938 0%, transparent 55%),
              linear-gradient(160deg, #1C1C1A 0%, #2E2E2C 55%, #1C1C1A 100%)
            `,
          }}
        />

        <motion.div
          className="absolute top-1/3 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(circle, #D4A5B514 0%, transparent 70%)' }}
          animate={prefersReduced ? {} : { scale: [1, 1.25, 1], opacity: [0.4, 0.75, 0.4] }}
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.svg
          className="absolute inset-0 w-full h-full opacity-[0.07]"
          viewBox="0 0 800 800"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden="true"
          animate={prefersReduced ? {} : { rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          style={{ transformOrigin: '400px 400px' }}
        >
          <circle cx="400" cy="400" r="280" stroke="#D4A5B5" strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="400" r="200" stroke="#D4A5B5" strokeWidth="0.5" fill="none" />
          <circle cx="400" cy="400" r="120" stroke="#D4A5B5" strokeWidth="0.5" fill="none" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <line
              key={angle}
              x1="400" y1="400"
              x2={400 + 280 * Math.cos((angle * Math.PI) / 180)}
              y2={400 + 280 * Math.sin((angle * Math.PI) / 180)}
              stroke="#D4A5B5" strokeWidth="0.3"
            />
          ))}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const px = 400 + 160 * Math.cos((angle * Math.PI) / 180)
            const py = 400 + 160 * Math.sin((angle * Math.PI) / 180)
            return (
              <ellipse
                key={`p-${angle}`}
                cx={px} cy={py} rx="18" ry="38"
                stroke="#D4A5B5" strokeWidth="0.35" fill="none"
                transform={`rotate(${angle + 90}, ${px}, ${py})`}
              />
            )
          })}
        </motion.svg>

        {/* VIDEO PLACEHOLDER: swap when AI cinematic is ready:
          <video autoPlay muted loop playsInline poster="/images/hero/hero-poster.webp"
            className="absolute inset-0 w-full h-full object-cover">
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
        */}
      </motion.div>

      {/* Vignette */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/75 via-black/15 to-transparent" />

      {/* ── Content ── */}
      <motion.div
        className="relative z-20 container-site pb-20 md:pb-28 w-full"
        style={{
          y: prefersReduced ? '0%' : contentY,
          opacity: prefersReduced ? 1 : fadeOut,
        }}
      >
        <h1 className="font-display text-display-xl text-[#FDFCFA] mb-8 max-w-3xl leading-[1.05]">
          Where flowers<br />
          <em>tell your story.</em>
        </h1>

        <motion.p
          className="font-body text-base font-light text-white/70 mb-8 max-w-md leading-relaxed"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          One stop solution for all your Wedding and Event Decor needs.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-start gap-4"
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <Link
            href="/enquire"
            className="group relative px-7 py-3.5 bg-[#D4A5B5] text-white font-body text-sm tracking-widest uppercase overflow-hidden"
          >
            <span className="relative z-10">{HOME.heroCta}</span>
            <span className="absolute inset-0 bg-[#E8C4D0] -translate-x-full group-hover:translate-x-0 transition-transform duration-350 ease-out" />
          </Link>
          <Link
            href="/work"
            className="px-7 py-3.5 border border-white/30 text-white font-body text-sm tracking-widest uppercase hover:border-white/60 hover:bg-white/5 transition-all duration-250"
          >
            {HOME.heroSecondary}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="font-accent text-[8px] text-white/30 tracking-[0.3em] uppercase">Scroll</span>
        <motion.div
          className="w-px h-10 bg-white/30"
          animate={prefersReduced ? {} : { y: [0, 8, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </motion.div>
    </section>
  )
}
