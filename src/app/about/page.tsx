import type { Metadata } from 'next'
import Image from 'next/image'
import StatsStrip from '@/components/sections/StatsStrip'
import CTAStrip from '@/components/sections/CTAStrip'
import { ABOUT, TESTIMONIALS } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

const team = [
  { name: 'Laxman',  role: 'CEO',                  image: '/images/team/laxman.webp' },
  { name: 'Ranbir',  role: 'Operations Head',       image: '/images/team/ranbir.webp' },
  { name: 'Sanjay',  role: 'Event Consultant',      image: '/images/team/sanjay.webp' },
  { name: 'Gulrukh', role: 'IT & Marketing',        image: '/images/team/gulrukh.webp' },
  { name: 'Monila',  role: 'Wedding Consultant',    image: '/images/team/monila.webp' },
  { name: 'JP',      role: 'Sales Manager',         image: '/images/team/jp.webp' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <div className="bg-[#0A0A0A] pt-40 pb-24">
        <div className="container-site">
          <h1 className="font-display text-display-lg text-[#F5F0E8]">About</h1>
          <p className="font-display text-display-sm text-[#F5F0E8]/60 italic mt-4">
            We don&apos;t decorate spaces. We compose experiences.
          </p>
        </div>
      </div>

      {/* Brand story — 2 col */}
      <section className="bg-[#141414] py-24">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
            <div className="space-y-6">
              {ABOUT.body.map((para, i) => (
                <p key={i} className="font-body text-base text-[#8C8279] leading-relaxed">{para}</p>
              ))}
            </div>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/about/about-intro.webp"
                alt="Firenze Flora studio Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Testimonials */}
      <section className="bg-[#0A0A0A] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-16">What clients say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {TESTIMONIALS.map((t) => {
              const initial = t.author.charAt(0).toUpperCase()
              return (
                <div key={t.id} className="bg-[#0A0A0A] p-10 flex flex-col">
                  <div className="flex gap-1 mb-6" aria-label={`${t.rating} stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <span key={i} className="text-[#B8963E] text-sm" aria-hidden="true">★</span>
                    ))}
                  </div>
                  <blockquote className="font-display text-xl italic text-[#F5F0E8]/80 leading-relaxed flex-1 mb-8">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full bg-[#242424] border border-[#B8963E]/40 flex items-center justify-center shrink-0"
                      aria-hidden="true"
                    >
                      <span className="font-display text-base text-[#B8963E]">{initial}</span>
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-[#F5F0E8]">{t.author}</p>
                      <p className="font-body text-xs text-[#B8963E] tracking-wide mt-0.5">{t.venue}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#141414] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-12 text-center">Meet the team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </div>
                <p className="font-body text-sm font-medium text-[#F5F0E8]">{member.name}</p>
                <p className="font-body text-xs text-[#B8963E] tracking-wide mt-0.5">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip />
    </>
  )
}
