import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'About | Firenze Flora Dubai',
  description: 'Firenze Flora is a premium floral and event design studio based in Dubai.',
}

export default function AboutPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site max-w-2xl">
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Our Story</span>
          <h1 className="font-display text-display-lg text-[#1C1C1A] mb-8">About Firenze Flora</h1>
          <div className="space-y-5 font-body text-base font-light text-[#2E2E2C] leading-relaxed">
            <p>Firenze Flora was founded with one belief: that every celebration deserves to be extraordinary. Based in Dubai, we design floral and event environments for clients who expect both creativity and precision.</p>
            <p>We work across weddings, private events, and corporate occasions — bringing the same level of detail and intention to every project, regardless of scale.</p>
            <p>Dubai is our home. Every install, every arrangement, every concept is designed for this city and its discerning clientele.</p>
          </div>
        </div>
      </div>
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-10">The team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i}>
                <div className="aspect-[3/4] bg-[#EDE6D8] placeholder-shimmer mb-4" />
                <p className="font-display text-lg text-[#1C1C1A]">Team Member</p>
                <p className="font-body text-xs text-[#8C8279] mt-1">Creative Director</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <EnquireCTA />
    </>
  )
}
