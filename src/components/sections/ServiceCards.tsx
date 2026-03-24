'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const services = [
  {
    href: '/services/weddings',
    title: 'Weddings',
    subtitle: 'Arabic · Indian · Iranian · Western · Destination',
    description:
      'Floral installations, reception styling, arches, centrepieces, and everything in between. Crafted for the couple, styled for Dubai.',
    accent: 'Wedding Decor in Dubai',
    num: '01',
    seed: 11,
  },
  {
    href: '/services/events',
    title: 'Events',
    subtitle: 'Private · Corporate · Openings',
    description:
      'Birthday celebrations, corporate galas, product launches, and intimate gatherings. We handle concept through to complete setup.',
    accent: 'Event Decor in Dubai',
    num: '02',
    seed: 22,
  },
  {
    href: '/services/other-services',
    title: 'Other Services',
    subtitle: 'Housewarming · Gifting · Installations',
    description:
      'Bespoke floral gifting, home decoration, housewarming styling, and custom installations for spaces that deserve attention.',
    accent: 'More in Dubai',
    num: '03',
    seed: 33,
  },
]

export default function ServiceCards() {
  return (
    <section className="section-padding bg-[#F5F0E8]">
      <div className="container-site">
        {/* Section header */}
        <div className="mb-12 flex items-end justify-between">
          <div>
            <span className="gold-line mb-4" />
            <h2 className="font-display text-display-md text-[#1C1C1A]">Services</h2>
          </div>
          <Link
            href="/services"
            className="hidden md:inline-flex items-center gap-1.5 font-body text-sm text-[#B8963E] hover:text-[#D4B062] transition-colors duration-250"
          >
            All Services
            <span className="transition-transform duration-250 group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#EDE6D8]">
          {services.map((service, i) => (
            <motion.div
              key={service.href}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: i * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="bg-[#F5F0E8] group relative overflow-hidden flex flex-col"
            >
              {/* Image with zoom + overlay */}
              <div className="relative h-52 overflow-hidden flex-shrink-0">
                <Image
                  src={`https://picsum.photos/seed/${service.seed}/800/600`}
                  alt={service.accent}
                  fill
                  className="object-cover scale-[1.06] group-hover:scale-100 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  unoptimized
                />
                {/* Dark overlay that lightens on hover */}
                <div className="absolute inset-0 bg-[#1C1C1A]/45 group-hover:bg-[#1C1C1A]/20 transition-colors duration-500" />
                {/* Number watermark */}
                <span
                  className="absolute top-4 right-5 font-display text-5xl leading-none select-none text-white/15 group-hover:text-white/25 transition-colors duration-500"
                  aria-hidden="true"
                >
                  {service.num}
                </span>
              </div>

              {/* Card body */}
              <div className="p-8 md:p-9 flex flex-col flex-1">
                <span className="font-accent text-[#B8963E] text-[10px] tracking-[0.25em] uppercase block mb-3">
                  {service.accent}
                </span>
                <h3 className="font-display text-[2rem] text-[#1C1C1A] mb-2 group-hover:text-[#B8963E] transition-colors duration-300 leading-tight">
                  {service.title}
                </h3>
                <p className="font-body text-[11px] text-[#8C8279] tracking-wide mb-4">
                  {service.subtitle}
                </p>
                <p className="font-body text-sm font-light text-[#2E2E2C] leading-relaxed mb-8 flex-1">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] self-start group/link"
                >
                  <span>Explore</span>
                  <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                </Link>
              </div>

              {/* Gold underline reveal on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B8963E] group-hover:w-full transition-all duration-500 ease-out" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
