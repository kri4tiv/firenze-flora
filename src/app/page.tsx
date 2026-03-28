import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { TESTIMONIALS, SITE } from '@/lib/content'
import HomepageHero from '@/components/sections/HomepageHero'

export const metadata: Metadata = {
  title: 'Firenze Flora | Wedding & Event Decor in Dubai',
  description: 'Premium floral and event decor studio in Dubai. Bespoke wedding styling, corporate events, and private celebrations. Enquire today.',
}

const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

export default function HomePage() {
  return (
    <>
      {/* ── 1. HERO ── */}
      <HomepageHero />

      {/* ── 2. BRAND STATEMENT ── */}
      <section className="bg-[#141414] py-24 md:py-32">
        <div className="container-site max-w-3xl mx-auto text-center">
          <p className="font-display text-display-sm text-[#F5F0E8]/90 italic leading-snug">
            &ldquo;At Firenze Flora, we possess the artistry and passion to craft the extraordinary.
            Whether it&apos;s a wedding, a corporate event, or a private celebration, we transform
            your vision into reality.&rdquo;
          </p>
          <div className="w-[60px] h-px bg-[#D4A5B5] mx-auto my-8" />
          <p className="font-body text-sm tracking-widest text-[#8C8279] uppercase">
            14 Years &nbsp;·&nbsp; 5,000+ Events &nbsp;·&nbsp; 3,000+ Clients
          </p>
        </div>
      </section>

      {/* 3. SERVICES: two cards */}
      <div className="flex flex-col md:flex-row">
        {/* Card 1: Weddings */}
        <Link href="/weddings" className="relative flex-1 min-h-[70vh] group block overflow-hidden">
          <Image
            src="/images/heroes/hero-weddings.webp"
            alt="Wedding decor Dubai"
            fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-10 md:p-14" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            <p className="font-body text-lg tracking-[0.2em] uppercase text-white mb-3">Weddings</p>
            <h2 className="font-display text-display-md text-white font-[400] leading-tight">
              Where your story begins.
            </h2>
            <span className="block font-body text-sm text-white/70 group-hover:text-white mt-4 transition-colors">
              Explore →
            </span>
          </div>
        </Link>

        {/* Card 2: Events */}
        <Link href="/events" className="relative flex-1 min-h-[70vh] group block overflow-hidden">
          <Image
            src="/images/heroes/hero-events.webp"
            alt="Event decor Dubai"
            fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-700" />
          <div className="absolute bottom-0 left-0 p-10 md:p-14" style={{ textShadow: '0 1px 6px rgba(0,0,0,0.5)' }}>
            <p className="font-body text-lg tracking-[0.2em] uppercase text-white mb-3">Events</p>
            <h2 className="font-display text-display-md text-white font-[400] leading-tight">
              Every moment, perfected.
            </h2>
            <span className="block font-body text-sm text-white/70 group-hover:text-white mt-4 transition-colors">
              Explore →
            </span>
          </div>
        </Link>
      </div>

      {/* ── 4. TESTIMONIALS ── */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-16">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-[#0A0A0A] p-10 flex flex-col">
                <div className="flex gap-1 mb-6" aria-label={`${t.rating} stars`}>
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-[#D4A5B5] text-sm" aria-hidden="true">★</span>
                  ))}
                </div>
                <blockquote className="font-display text-xl italic text-[#F5F0E8]/80 leading-relaxed flex-1 mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div>
                  <p className="font-body text-sm font-medium text-[#F5F0E8]">{t.author}</p>
                  <p className="font-body text-xs text-[#D4A5B5] tracking-wide mt-1">{t.venue}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. CTA STRIP ── */}
      <section className="bg-gradient-to-r from-[#B8849A] to-[#E8C4D0] py-20 text-center">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#0A0A0A]">
            Ready to create something extraordinary?
          </h2>
          <p className="font-body text-base text-[#0A0A0A]/70 mt-4 mb-10">
            Tell us your vision. We&apos;ll handle the rest.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/enquire"
              className="bg-[#0A0A0A] text-[#F5F0E8] px-8 py-4 font-body text-sm tracking-widest uppercase hover:bg-[#1A1A1A] transition-colors"
            >
              Start Your Enquiry
            </Link>
            <a
              href={`tel:${SITE.phoneTel}`}
              className="border border-[#0A0A0A]/30 text-[#0A0A0A] px-8 py-4 font-body text-sm tracking-widest uppercase hover:border-[#0A0A0A] transition-colors"
            >
              Call {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
