'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'

export default function HomepageHero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return
    video.muted = true
    video.play().catch((err) => {
      console.warn('Autoplay failed:', err)
    })
  }, [])

  return (
    <section
      className="relative h-screen min-h-[600px] flex items-end overflow-hidden"
      style={{ backgroundColor: '#111' }}
    >
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/images/heroes/hero-weddings.webp"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/dpnfzkl8n/video/upload/sp_auto/herovideo101_hghzzs.m3u8"
          type="application/x-mpegURL"
        />
        <source
          src="https://res.cloudinary.com/dpnfzkl8n/video/upload/vc_h264,q_auto:good/herovideo101_hghzzs.mp4"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 bg-black/45" style={{ zIndex: 1 }} />

      <div
        className="relative w-full max-w-5xl px-6 md:px-16 lg:px-24 pb-20 md:pb-28"
        style={{ zIndex: 2 }}
      >
        <h1 className="font-display text-[clamp(3.6rem,8.8vw,8rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
          Where flowers<br />
          <em>tell your story.</em>
        </h1>
        <p className="text-base text-white/70 mb-10 max-w-sm">
          Premium floral and event decor. Dubai.
        </p>
        <Link
          href="/enquire"
          className="inline-block px-7 py-3.5 text-sm tracking-widest uppercase text-white transition-colors duration-300"
          style={{ backgroundColor: '#D4A5B5' }}
        >
          Enquire Now
        </Link>
      </div>
    </section>
  )
}
