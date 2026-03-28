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
      {/* Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/heroes/hero-weddings.webp"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      >
        <source
          src="https://res.cloudinary.com/dpnfzkl8n/video/upload/sp_auto/herovideo101_hghzzs.m3u8"
          type="application/x-mpegURL"
        />
        <source
          src="https://res.cloudinary.com/dpnfzkl8n/video/upload/vc_h264,q_auto:eco,w_854/herovideo101_hghzzs.mp4"
          media="(max-width: 768px)"
          type="video/mp4"
        />
        <source
          src="https://res.cloudinary.com/dpnfzkl8n/video/upload/vc_h264,q_auto:good/herovideo101_hghzzs.mp4"
          type="video/mp4"
        />
      </video>

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 1,
          background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)',
        }}
      />

      {/* Film grain */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '200px 200px',
        }}
      />

      {/* Content: bottom-left */}
      <div
        className="relative w-full px-8 md:px-12 lg:px-16 pb-10 md:pb-14"
        style={{ zIndex: 3 }}
      >
        <h1 className="font-display text-[clamp(2.8rem,8.8vw,8rem)] leading-[0.95] tracking-[-0.03em] text-white mb-5 md:mb-6">
          Where flowers<br />
          <em>tell your story.</em>
        </h1>
        <p className="text-sm md:text-base text-white/70 mb-8 md:mb-10 max-w-sm">
          Premium floral and event decor. Dubai.
        </p>
        <Link
          href="/enquire"
          className="inline-block w-full md:w-auto px-7 py-3.5 text-sm tracking-widest uppercase bg-[#D4A5B5] text-white hover:bg-[#E8C4D0] hover:text-black transition-all duration-300 text-center"
        >
          Enquire Now
        </Link>
      </div>
    </section>
  )
}
