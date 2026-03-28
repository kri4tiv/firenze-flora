import type { Metadata } from 'next'
import Image from 'next/image'
import StatsStrip from '@/components/sections/StatsStrip'
import CTAStrip from '@/components/sections/CTAStrip'
import TeamGrid from '@/components/sections/TeamGrid'
import { ABOUT, TESTIMONIALS } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

export default function AboutPage() {
  return (
    <>
      {/* Combined hero + brand story */}
      <section className="relative overflow-hidden" style={{ minHeight: '90vh' }}>
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/heroes/hero-about.webp"
            alt="Firenze Flora studio Dubai"
            fill
            priority
            quality={90}
            className="object-cover object-center"
            sizes="100vw"
          />
          <div
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.88) 100%)',
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#0A0A0A] to-transparent" />
        </div>

        <div className="relative z-10 flex items-center justify-center text-center pt-40 pb-16 px-6">
          <div>
            <h1 className="font-display text-display-md md:text-display-lg text-[#F5F0E8]">About</h1>
            <p className="mt-4 text-lg text-[#F5F0E8]/80 max-w-xl mx-auto italic font-display">
              14 years. 5,000+ events. One obsession.
            </p>
          </div>
        </div>

        <div className="relative z-10 pb-28 px-6">
          <div className="max-w-2xl mx-auto">
            {ABOUT.body.map((para: string, i: number) => (
              <p key={i} className="font-body text-base md:text-lg text-[#F5F0E8]/80 leading-[1.85] mb-6">
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Testimonials */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-8">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {TESTIMONIALS.map((t) => {
              const initial = t.author.charAt(0).toUpperCase()
              return (
                <div key={t.id} className="bg-[#0A0A0A] p-10 flex flex-col">
                  <div className="flex gap-1 mb-6" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-[#D4A5B5] text-sm" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="font-display text-xl italic text-[#F5F0E8]/80 leading-relaxed flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-[#242424] border border-[#D4A5B5]/40 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-display text-base text-[#D4A5B5]">{initial}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-[#F5F0E8]">{t.author}</p>
                      <p className="font-body text-xs text-[#D4A5B5] tracking-wide mt-0.5">{t.venue}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <TeamGrid />

      <CTAStrip />
    </>
  )
}
