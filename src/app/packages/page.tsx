import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Packages | Firenze Flora Dubai',
  description: 'Explore example package ranges and what is included. For premium custom work, enquire for a tailored proposal.',
}

const packages = [
  {
    name: 'Essentials',
    range: 'From AED 3,000',
    note: 'Starting range',
    items: ['Bridal bouquet', 'Centrepiece arrangements (up to 8 tables)', 'Welcome floral arrangement', 'Cake flowers'],
  },
  {
    name: 'Signature',
    range: 'From AED 12,000',
    note: 'Most popular',
    items: ['All Essentials', 'Flower arch or backdrop', 'Aisle arrangements', 'Full reception styling', 'Setup & breakdown'],
  },
  {
    name: 'Bespoke',
    range: 'Custom quote',
    note: 'For discerning clients',
    items: ['Fully custom concept', 'Dedicated lead designer', 'Site visit included', 'Unlimited revisions', 'Full venue transformation'],
  },
]

export default function PackagesPage() {
  return (
    <>
      <div className="pt-32 pb-20 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Investment</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-4">Packages</h1>
        <p className="font-body text-base font-light text-[#8C8279] max-w-lg leading-relaxed">
          These are starting ranges to give you a sense of scale. Every event is unique — enquire for a tailored proposal.
        </p>
      </div>

      <section className="container-site pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EDE6D8]">
          {packages.map((pkg) => (
            <div key={pkg.name} className="bg-[#F5F0E8] p-10 flex flex-col">
              <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-3">{pkg.note}</span>
              <h2 className="font-display text-3xl text-[#1C1C1A] mb-2">{pkg.name}</h2>
              <p className="font-display text-xl text-[#B8963E] mb-8">{pkg.range}</p>
              <ul className="space-y-2 mb-10 flex-1">
                {pkg.items.map((item) => (
                  <li key={item} className="font-body text-sm font-light text-[#2E2E2C] flex items-start gap-2">
                    <span className="text-[#B8963E] mt-0.5">—</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/enquire"
                className="block text-center px-6 py-3 border border-[#B8963E] text-[#B8963E] font-body text-sm tracking-widest uppercase hover:bg-[#B8963E] hover:text-white transition-all duration-250"
              >
                Enquire
              </Link>
            </div>
          ))}
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
