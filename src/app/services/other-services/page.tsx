import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Other Services | Firenze Flora Dubai',
  description: 'Housewarming florals, bespoke gifting, and custom floral installations in Dubai.',
}

export default function OtherServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Also Available</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">Other Services</h1>
        <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed">
          Beyond weddings and events, we offer bespoke florals for homes, gifting, and custom installations.
        </p>
      </div>
      <div className="container-site pb-20 grid grid-cols-1 md:grid-cols-2 gap-px bg-[#EDE6D8]">
        {['Housewarming', 'Home Decoration', 'Floral Gifting', 'Custom Installations'].map((s) => (
          <div key={s} className="bg-[#F5F0E8] p-10">
            <h2 className="font-display text-2xl text-[#1C1C1A] mb-3">{s}</h2>
            <p className="font-body text-sm font-light text-[#8C8279]">
              Premium floral design tailored to your space or occasion. Enquire for a bespoke proposal.
            </p>
          </div>
        ))}
      </div>
      <EnquireCTA />
    </>
  )
}
