import type { Metadata } from 'next'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Services | Wedding and Event Decor in Dubai',
  description:
    'Explore weddings, events, corporate decor, and other floral installations in Dubai. Fast enquiry, premium execution.',
}

const cards = [
  {
    href: '/services/weddings',
    label: 'Wedding Decor in Dubai',
    title: 'Weddings',
    desc: 'Arabic, Indian, Iranian, Western, and destination weddings. Reception styling, floral arches, centrepieces, flower walls, and more.',
  },
  {
    href: '/services/events',
    label: 'Event Decor in Dubai',
    title: 'Events',
    desc: 'Private celebrations, corporate galas, product launches, and openings. Full concept-to-setup service across Dubai.',
  },
  {
    href: '/services/other-services',
    label: 'More Services in Dubai',
    title: 'Other Services',
    desc: 'Housewarming florals, bespoke gifting, and custom installations for spaces that deserve premium attention.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <div className="pt-32 pb-20 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">What We Do</span>
        <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">Services</h1>
        <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed">
          From intimate proposals to grand celebration halls — every engagement is approached with
          the same standard of detail and craftsmanship.
        </p>
      </div>

      <section className="container-site pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EDE6D8]">
          {cards.map((card) => (
            <Link
              key={card.href}
              href={card.href}
              className="bg-[#F5F0E8] p-10 group hover:bg-[#EDE6D8] transition-colors duration-250 block"
            >
              <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">
                {card.label}
              </span>
              <h2 className="font-display text-3xl text-[#1C1C1A] mb-4">{card.title}</h2>
              <p className="font-body text-sm font-light text-[#2E2E2C] leading-relaxed mb-6">{card.desc}</p>
              <span className="font-body text-sm text-[#B8963E] group-hover:gap-3 inline-flex items-center gap-2 transition-all duration-250">
                Explore <span>→</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="mt-8 p-6 border border-[#EDE6D8] bg-[#FDFCFA] inline-block">
          <p className="font-body text-sm text-[#8C8279] mb-2">Looking for package options?</p>
          <Link href="/packages" className="font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors">
            View Packages →
          </Link>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
