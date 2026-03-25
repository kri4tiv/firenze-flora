import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import Hero from '@/components/sections/Hero'
import StatsStrip from '@/components/sections/StatsStrip'
import HomepagePortfolio from '@/components/sections/HomepagePortfolio'
import HomeServiceBlocks from '@/components/sections/HomeServiceBlocks'
import Testimonials from '@/components/sections/Testimonials'
import VenueStrip from '@/components/sections/VenueStrip'
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

      {/* About / Brand Intro — image left, text right */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            {/* Left: image */}
            <div className="relative h-[380px] md:h-[500px] overflow-hidden">
              <Image
                src="/images/about/about-intro.webp"
                alt="Firenze Flora floral studio Dubai"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Right: text */}
            <div>
              <span className="gold-line mb-5" />
              <h2 className="font-display text-display-md text-[#1C1C1A] mb-5 leading-tight">
                Firenze Flora
              </h2>
              <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed mb-8">
                We possess the artistry and passion to craft the extraordinary. Whether it&apos;s
                an enchanting wedding, a corporate event that leaves a lasting impression, or a
                birthday celebration filled with vibrant colour, we transform your vision into
                reality with stunning decor and floral arrangements.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] group"
              >
                <span>Read More</span>
                <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <StatsStrip />

      {/* Portfolio Preview */}
      <HomepagePortfolio />

      {/* Service Blocks — Weddings / Events / Corporate */}
      <HomeServiceBlocks />

      {/* Testimonials on dark bg */}
      <Testimonials dark />

      {/* Venue Strip */}
      <VenueStrip />

      {/* Enquire CTA */}
      <EnquireCTA />
    </>
  )
}
