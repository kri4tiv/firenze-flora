import type { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import ServiceCards from '@/components/sections/ServiceCards'
import WorkGrid from '@/components/sections/WorkGrid'
import StatsStrip from '@/components/sections/StatsStrip'
import Testimonials from '@/components/sections/Testimonials'
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

      {/* Brand Statement */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site max-w-3xl">
          <span className="gold-line mb-6" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-6">
            {HOME.brandStatement}
          </h2>
          <p className="font-body text-base font-light text-[#8C8279] leading-relaxed">
            {HOME.brandBody}
          </p>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Services */}
      <ServiceCards />

      {/* Work Preview */}
      <WorkGrid preview />

      {/* Testimonials */}
      <Testimonials />

      {/* Enquire CTA */}
      <EnquireCTA />
    </>
  )
}
