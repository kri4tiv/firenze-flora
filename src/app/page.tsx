import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServiceCards from '@/components/sections/ServiceCards'
import WorkGrid from '@/components/sections/WorkGrid'
import StatsStrip from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
import ProcessSteps from '@/components/sections/ProcessSteps'
import VenueStrip from '@/components/sections/VenueStrip'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { HOME } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Firenze Flora | Wedding & Event Decor in Dubai',
  description:
    'Premium floral and event decor studio in Dubai. Bespoke wedding styling, corporate events, and private celebrations. Enquire today.',
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Brand Statement — asymmetric two-column */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="gold-line mb-5" />
              <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase">
                Our Philosophy
              </p>
            </div>
            <div>
              <h2 className="font-display text-display-md text-[#1C1C1A] mb-7 leading-tight">
                {HOME.brandStatement}
              </h2>
              <p className="font-body text-base font-light text-[#8C8279] leading-relaxed max-w-prose">
                {HOME.brandBody}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Services */}
      <ServiceCards />

      {/* Process */}
      <ProcessSteps />

      {/* Work Preview */}
      <WorkGrid preview />

      {/* Testimonials */}
      <Testimonials />

      {/* Venue Strip */}
      <VenueStrip />

      {/* Enquire CTA */}
      <EnquireCTA />
    </>
  )
}
