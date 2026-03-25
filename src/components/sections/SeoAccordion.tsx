'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const items = [
  {
    title: 'Wedding Decoration in Dubai',
    body: 'Firenze Flora is one of Dubai\'s most trusted wedding decoration studios, delivering breathtaking floral environments for Arabic, Indian, Iranian, Western, and destination weddings. We source fresh flowers directly from Holland and premium global suppliers, ensuring every centrepiece, arch, and arrangement carries our signature quality. Whether you envision a grand ballroom transformation or an intimate garden ceremony, our team crafts every detail with precision.',
  },
  {
    title: 'Event Decorations in Dubai',
    body: 'From intimate private celebrations to large-scale galas, our event decoration team transforms any space into an extraordinary experience. We handle complete concept development, material sourcing, professional setup, and post-event breakdown. Our event designs blend fresh florals, lighting coordination, and bespoke installations to create environments that guests remember long after the occasion.',
  },
  {
    title: 'Corporate Events Decor',
    body: 'Firenze Flora is a leading corporate event decor company in the UAE, renowned for services that consistently exceed expectations. We create visually captivating environments for product launches, conferences, brand activations, opening ceremonies, and corporate galas. Our designs communicate your brand\'s identity while leaving a lasting impression on clients, partners, and employees.',
  },
  {
    title: 'Arabic Weddings Decoration',
    body: 'Arabic weddings carry centuries of cultural tradition — and our team understands every nuance. We specialise in elegant floral designs that honour Arabic aesthetic sensibilities, from grand reception halls adorned with cascading florals to intimate ceremony spaces that balance tradition and modernity. Each arrangement is crafted to complement the grandeur of your celebration.',
  },
  {
    title: 'Indian Wedding Decoration',
    body: 'Indian weddings are a symphony of colour, fragrance, and emotion spread across multiple celebrations. Our team has extensive experience decorating mehndi, baraat, and reception events, working with the vibrant palette and intricate details that make Indian weddings extraordinary. We source marigolds, roses, orchids, and rare blooms to create mandaps, centrepieces, and installations that reflect the magnificence of the occasion.',
  },
  {
    title: 'Flower Arrangements in Dubai',
    body: 'Our flower arrangements go beyond decoration — they are compositions crafted to evoke emotion and elevate space. Whether for a corporate reception, a private home, or a grand event venue, Firenze Flora designs arrangements that balance colour, texture, and proportion with an editorial eye. We work with fresh flowers imported from premium global sources for maximum impact and longevity.',
  },
  {
    title: 'Bridal Bouquet',
    body: 'The bridal bouquet is one of the most personal elements of your wedding day — a handcrafted piece carried through every photograph and memory. Our designers work closely with each bride to understand her style, colour palette, and the flowers that resonate with her story. From cascading garden rose arrangements to compact, structured bouquets in rare seasonal blooms, each piece is assembled the morning of the wedding for maximum freshness.',
  },
  {
    title: 'Wedding Centrepieces in Dubai',
    body: 'Table centrepieces set the tone for your entire reception. Firenze Flora designs centrepieces that anchor the visual experience of your event — from tall, dramatic floral towers to low, lush arrangements that encourage conversation. We work in a range of vessels, from antique brass and oxidised silver to clean acrylic and mirrored bases, ensuring the presentation is as refined as the flowers themselves.',
  },
]

export default function SeoAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section-padding bg-[#F5F0E8]">
      <div className="container-site">
        <div className="mb-12">
          <span className="gold-line mb-4" />
          <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
            More About Our Services
          </p>
          <h2 className="font-display text-display-md text-[#1C1C1A]">
            Firenze Flora: Transforming Moments,<br className="hidden md:block" /> Elevating Events
          </h2>
        </div>

        <div className="divide-y divide-[#EDE6D8]">
          {items.map((item, i) => (
            <div key={item.title}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-5 text-left group"
                aria-expanded={open === i}
              >
                <span className="font-display text-lg md:text-xl text-[#1C1C1A] group-hover:text-[#B8963E] transition-colors duration-250">
                  {item.title}
                </span>
                <span
                  className="text-[#B8963E] text-xl leading-none shrink-0 ml-4 transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                    className="overflow-hidden"
                  >
                    <p className="font-body text-sm font-light text-[#2E2E2C] leading-relaxed pb-6 max-w-3xl">
                      {item.body}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
