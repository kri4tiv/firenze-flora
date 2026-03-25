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
    accent: 'Wedding Decor',
    num: '01',
    src: '/images/portfolio/indian-wedding/indian-wedding-01.webp',
    seed: 11,
    hero: true,
  },
  {
    href: '/services/events',
    title: 'Events',
    subtitle: 'Private · Corporate · Openings',
    description:
      'Birthday celebrations, corporate galas, product launches, and intimate gatherings.',
    accent: 'Event Decor',
    num: '02',
    src: '/images/portfolio/flower-arch/flower-arch-01.webp',
    seed: 22,
    hero: false,
  },
  {
    href: '/services/other-services',
    title: 'Other',
    subtitle: 'Housewarming · Gifting · Installations',
    description:
      'Bespoke floral gifting, home decoration, and custom installations.',
    accent: 'More Services',
    num: '03',
    src: '/images/portfolio/centrepiece/centrepiece-01.webp',
    seed: 33,
    hero: false,
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
            All Services →
          </Link>
        </div>

        {/* Asymmetric grid: large card + two smaller stacked */}
        <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-px bg-[#EDE6D8]">
          {/* Hero card — full background image with text overlay */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="group relative overflow-hidden bg-[#1C1C1A] min-h-[520px] md:min-h-[600px] flex flex-col justify-end"
          >
            <Image
              src={services[0].src}
              alt={services[0].accent}
              fill
              className="object-cover scale-[1.03] group-hover:scale-100 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 60vw"
              onError={(e) => {
                const el = e.currentTarget as HTMLImageElement
                el.src = `https://picsum.photos/seed/${services[0].seed}/1200/900`
              }}
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/90 via-[#1C1C1A]/30 to-transparent" />

            {/* Text */}
            <div className="relative z-10 p-8 md:p-12">
              <span className="font-accent text-[#B8963E] text-[10px] tracking-[0.25em] uppercase block mb-3">
                {services[0].accent} in Dubai
              </span>
              <h3 className="font-display text-4xl md:text-5xl text-[#F5F0E8] mb-3 leading-tight">
                {services[0].title}
              </h3>
              <p className="font-body text-[11px] text-[#F5F0E8]/50 tracking-wide mb-5">
                {services[0].subtitle}
              </p>
              <p className="font-body text-sm font-light text-[#F5F0E8]/80 leading-relaxed mb-8 max-w-sm">
                {services[0].description}
              </p>
              <Link
                href={services[0].href}
                className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] group/link"
              >
                <span>Explore Weddings</span>
                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
              </Link>
            </div>

            {/* Number watermark */}
            <span
              className="absolute top-6 right-8 font-display text-6xl leading-none select-none text-white/10 group-hover:text-white/18 transition-colors duration-500"
              aria-hidden="true"
            >
              {services[0].num}
            </span>
          </motion.div>

          {/* Two smaller cards stacked */}
          <div className="grid grid-rows-2 gap-px bg-[#EDE6D8]">
            {services.slice(1).map((service, i) => (
              <motion.div
                key={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: (i + 1) * 0.13, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="bg-[#F5F0E8] group relative overflow-hidden flex flex-col"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden flex-shrink-0">
                  <Image
                    src={service.src}
                    alt={service.accent}
                    fill
                    className="object-cover scale-[1.06] group-hover:scale-100 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, 40vw"
                    onError={(e) => {
                      const el = e.currentTarget as HTMLImageElement
                      el.src = `https://picsum.photos/seed/${service.seed}/800/600`
                    }}
                  />
                  <div className="absolute inset-0 bg-[#1C1C1A]/35 group-hover:bg-[#1C1C1A]/15 transition-colors duration-500" />
                  <span
                    className="absolute top-3 right-4 font-display text-4xl leading-none select-none text-white/15 group-hover:text-white/25 transition-colors duration-500"
                    aria-hidden="true"
                  >
                    {service.num}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-1">
                  <span className="font-accent text-[#B8963E] text-[9px] tracking-[0.25em] uppercase block mb-2">
                    {service.accent} in Dubai
                  </span>
                  <h3 className="font-display text-2xl text-[#1C1C1A] mb-1 group-hover:text-[#B8963E] transition-colors duration-300 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body text-[10px] text-[#8C8279] tracking-wide mb-3">
                    {service.subtitle}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 font-body text-xs text-[#B8963E] self-start mt-auto group/link"
                  >
                    <span>Explore</span>
                    <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Gold underline reveal */}
                <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B8963E] group-hover:w-full transition-all duration-500 ease-out" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center md:hidden">
          <Link
            href="/services"
            className="font-body text-sm text-[#B8963E] border border-[#B8963E] px-6 py-3 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
          >
            All Services →
          </Link>
        </div>
      </div>
    </section>
  )
}
