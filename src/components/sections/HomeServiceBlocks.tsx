'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'

const blocks = [
  {
    slug: 'weddings',
    href: '/services/weddings',
    title: 'WEDDINGS',
    heroImage: '/images/portfolio/arabic-wedding/arabic-wedding-03.webp',
    heroSeed: 11,
    description: 'Our wedding decor and signature floral arrangements are the heartbeats of your special day.',
    items: [
      {
        title: 'Wedding Centrepiece',
        desc: 'Elevating tables to artistic statements, they infuse every moment with elegance.',
        src: '/images/portfolio/centrepiece/centrepiece-01.webp', seed: 40,
      },
      {
        title: 'Ceiling Overhanging Florals',
        desc: 'The overhead masterpiece that turns ordinary venues into captivating realms.',
        src: '/images/portfolio/flower-arch/flower-arch-01.webp', seed: 50,
      },
      {
        title: 'Arabic Weddings',
        desc: 'Where the timeless elegance of flowers meets the vibrant spirit of celebration.',
        src: '/images/portfolio/arabic-wedding/arabic-wedding-01.webp', seed: 30,
      },
      {
        title: 'Indian Wedding',
        desc: 'Florals are a symphony of fragrances, colours, and emotions reflecting the grandeur of the occasion.',
        src: '/images/portfolio/indian-wedding/indian-wedding-01.webp', seed: 20,
      },
      {
        title: 'Bridal Bouquet',
        desc: 'A symbol of love and a piece of art, walking down the aisle as the bride\'s radiant companion.',
        src: '/images/portfolio/centrepiece/centrepiece-02.webp', seed: 45,
      },
    ],
  },
  {
    slug: 'events',
    href: '/services/events',
    title: 'EVENTS',
    heroImage: '/images/portfolio/reception-decor/reception-decor-01.webp',
    heroSeed: 22,
    description: 'Flower decor transforms spaces into captivating havens where the beauty of nature harmonises with the spirit of celebration.',
    items: [
      {
        title: 'Private Events',
        desc: 'From intimate gatherings to grand celebrations, we handle concept through to complete setup.',
        src: '/images/portfolio/reception-decor/reception-decor-02.webp', seed: 60,
      },
      {
        title: 'Anniversary Events',
        desc: 'Floral decoration that symbolises enduring love and the blossoming of cherished memories.',
        src: '/images/portfolio/iranian-wedding/iranian-wedding-03.webp', seed: 62,
      },
      {
        title: 'Birthday Party',
        desc: 'From charming centrepieces to statement installations, we create atmospheres where wishes come true.',
        src: '/images/portfolio/arabic-wedding/arabic-wedding-05.webp', seed: 65,
      },
      {
        title: 'Proposals',
        desc: 'A scene of timeless romance where every detail speaks of your love story.',
        src: '/images/portfolio/flower-arch/flower-arch-02.webp', seed: 70,
      },
      {
        title: 'Theme Parties',
        desc: 'Where imagination meets design, turning an event into an unforgettable experience.',
        src: '/images/portfolio/iranian-wedding/iranian-wedding-05.webp', seed: 75,
      },
    ],
  },
  {
    slug: 'corporate',
    href: '/services/events',
    title: 'CORPORATE',
    heroImage: '/images/portfolio/flower-arch/flower-arch-03.webp',
    heroSeed: 33,
    description: 'Decor is the visual language of your brand — shaping a memorable and impactful experience for clients, partners, and employees.',
    items: [
      {
        title: 'Corporate Lunch Table Decor',
        desc: 'Elevating the ambiance to foster connections and productive conversations.',
        src: '/images/portfolio/centrepiece/centrepiece-03.webp', seed: 80,
      },
      {
        title: 'Branded Flower Wall',
        desc: 'A captivating visual expression of a brand\'s identity, leaving a lasting impact at events.',
        src: '/images/portfolio/flower-arch/flower-arch-04.webp', seed: 82,
      },
      {
        title: 'Opening Ceremony',
        desc: 'Sets the stage for a memorable introduction, blending elegance and excitement.',
        src: '/images/portfolio/reception-decor/reception-decor-03.webp', seed: 85,
      },
      {
        title: 'Exhibitions',
        desc: 'Where brand identity and creativity converge, turning spaces into engaging showcases.',
        src: '/images/portfolio/flower-arch/flower-arch-05.webp', seed: 88,
      },
      {
        title: 'Corporate Gifting',
        desc: 'A strategic tool reinforcing connections and leaving a positive impression.',
        src: '/images/portfolio/centrepiece/centrepiece-04.webp', seed: 90,
      },
    ],
  },
]

type BlockKey = typeof blocks[number]['slug']

export default function HomeServiceBlocks() {
  const [activeBlock, setActiveBlock] = useState<BlockKey>('weddings')
  const [failedHero, setFailedHero] = useState<Set<string>>(new Set())
  const [failedItems, setFailedItems] = useState<Set<string>>(new Set())

  const block = blocks.find((b) => b.slug === activeBlock) ?? blocks[0]

  return (
    <section className="section-padding bg-[#FDFCFA]">
      <div className="container-site">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A]">Our Services</h2>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-0 mb-12 border-b border-[#EDE6D8]">
          {blocks.map((b) => (
            <button
              key={b.slug}
              onClick={() => setActiveBlock(b.slug)}
              className={`font-accent text-xs tracking-[0.2em] uppercase px-6 py-3 border-b-2 transition-all duration-250 ${
                activeBlock === b.slug
                  ? 'border-[#B8963E] text-[#B8963E]'
                  : 'border-transparent text-[#8C8279] hover:text-[#1C1C1A]'
              }`}
            >
              {b.title}
            </button>
          ))}
        </div>

        {/* Active block */}
        <motion.div
          key={activeBlock}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Hero image + description */}
          <div className="grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 mb-10 items-center">
            <div className="relative h-[340px] md:h-[420px] overflow-hidden bg-[#EDE6D8]">
              <Image
                src={failedHero.has(block.slug)
                  ? `https://picsum.photos/seed/${block.heroSeed}/1200/900`
                  : block.heroImage}
                alt={block.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 60vw"
                onError={() => setFailedHero((p) => new Set(p).add(block.slug))}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1A]/60 to-transparent flex items-end p-8">
                <h3 className="font-display text-4xl md:text-5xl text-[#F5F0E8]">
                  {block.title}
                </h3>
              </div>
            </div>
            <div>
              <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed mb-6">
                {block.description}
              </p>
              <Link
                href={block.href}
                className="inline-flex items-center gap-2 font-body text-sm text-[#B8963E] border border-[#B8963E] px-5 py-2.5 hover:bg-[#B8963E] hover:text-white transition-all duration-250"
              >
                Explore {block.title.charAt(0) + block.title.slice(1).toLowerCase()} →
              </Link>
            </div>
          </div>

          {/* Sub-items grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[#EDE6D8]">
            {block.items.map((item, i) => (
              <div key={item.title} className="bg-[#FDFCFA] group overflow-hidden">
                <div className="relative h-36 overflow-hidden bg-[#EDE6D8]">
                  <Image
                    src={failedItems.has(`${block.slug}-${i}`)
                      ? `https://picsum.photos/seed/${item.seed}/400/300`
                      : item.src}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 50vw, 20vw"
                    onError={() => setFailedItems((p) => new Set(p).add(`${block.slug}-${i}`))}
                  />
                  <div className="absolute inset-0 bg-[#1C1C1A]/20 group-hover:bg-[#1C1C1A]/10 transition-colors duration-300" />
                </div>
                <div className="p-4">
                  <h4 className="font-display text-sm text-[#1C1C1A] mb-1.5 leading-tight group-hover:text-[#B8963E] transition-colors">
                    {item.title}
                  </h4>
                  <p className="font-body text-[11px] font-light text-[#8C8279] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
