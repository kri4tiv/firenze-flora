import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import Hero from '@/components/sections/Hero'
import ServiceCards from '@/components/sections/ServiceCards'
import WorkGrid from '@/components/sections/WorkGrid'
import EnquireCTA from '@/components/sections/EnquireCTA'

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
            Every celebration deserves to be unforgettable.
          </h2>
          <p className="font-body text-base font-light text-[#8C8279] leading-relaxed">
            We are a Dubai-based floral and event design studio. From intimate proposals to
            grand wedding receptions, we craft environments that leave a lasting impression.
            Detail-obsessed. Concept-driven. Built for discerning clients.
          </p>
        </div>
      </section>

      {/* Services */}
      <ServiceCards />

      {/* Work Preview */}
      <WorkGrid preview />

      {/* Enquire CTA Strip */}
      <EnquireCTA />
    </>
  )
}
