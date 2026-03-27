'use client'

import Link from 'next/link'

export default function HomepageHero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-end overflow-hidden bg-[#0A0A0A]">

      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/hero.webm" type="video/webm" />
        <source src="/videos/hero.mp4" type="video/mp4" />
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* CONTENT */}
      <div className="relative z-20 px-6 md:px-16 lg:px-24 pb-20 md:pb-28 w-full max-w-5xl">
        <h1 className="font-display text-[clamp(3.6rem,8.8vw,8rem)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
          Where flowers<br />
          <em>tell your story.</em>
        </h1>
        <p className="text-base text-white/70 mb-10 max-w-sm">
          Premium floral and event decor. Dubai.
        </p>
        <Link
          href="/enquire"
          className="inline-block px-7 py-3.5 bg-[#D4A5B5] text-white text-sm tracking-widest uppercase hover:bg-[#E8C4D0] transition-colors duration-300"
        >
          Enquire Now
        </Link>
      </div>

    </section>
  )
}
