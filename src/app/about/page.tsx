import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { ABOUT } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

const pillars = [
  {
    title: 'Artistry',
    body: 'Every arrangement is a composition. We treat florals as we treat light — as something that shapes the emotional temperature of a space.',
  },
  {
    title: 'Precision',
    body: 'Logistics, timelines, and supplier relationships built over years ensure the day runs as designed. Beautiful without drama.',
  },
  {
    title: 'Restraint',
    body: 'We resist excess. One perfect focal point outweighs ten competing ones. Confidence in simplicity is the most expensive-looking thing of all.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — asymmetric split */}
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="gold-line mb-5" />
              <span className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase">
                Our Story
              </span>
            </div>
            <div>
              <h1 className="font-display text-display-lg text-[#1C1C1A] mb-8 leading-tight">
                {ABOUT.headline}
              </h1>
              <div className="space-y-5 font-body text-base font-light text-[#2E2E2C] leading-relaxed max-w-prose">
                {ABOUT.body.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <section className="py-20 bg-[#1C1C1A]">
        <div className="container-site max-w-3xl">
          <blockquote className="text-center">
            <p className="font-display text-display-sm md:text-display-md text-[#F5F0E8] italic leading-tight mb-6">
              &ldquo;{ABOUT.mission}&rdquo;
            </p>
            <span className="gold-line mx-auto" />
          </blockquote>
        </div>
      </section>

      {/* How we work — 3 columns */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <div className="mb-14">
            <span className="gold-line mb-4" />
            <h2 className="font-display text-display-md text-[#1C1C1A]">How we work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-display text-2xl text-[#1C1C1A] mb-4">{pillar.title}</h3>
                <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our promise */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <div className="max-w-2xl">
            <span className="gold-line mb-5" />
            <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-6">
              Our Promise
            </p>
            <p className="font-display text-display-sm text-[#1C1C1A] italic leading-tight">
              &ldquo;We will never compromise the quality of a single arrangement to save a dirham.
              If it cannot be done well, it will not be done.&rdquo;
            </p>
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
