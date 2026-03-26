'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

interface TypeCard {
  name: string
  image: string
}

interface TypeCardsProps {
  heading: string
  cards: TypeCard[]
}

export default function TypeCards({ heading, cards }: TypeCardsProps) {
  return (
    <section className="bg-[#141414] py-16">
      <div className="container-site">
        <h2 className="font-display text-display-sm text-[#F5F0E8] text-center mb-12">
          {heading}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
          {cards.map((card, i) => (
            <motion.div
              key={card.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ scale: 1.03 }}
              className="relative aspect-[3/4] overflow-hidden cursor-default"
            >
              <Image
                src={card.image}
                alt={card.name}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <p className="font-body text-sm font-medium text-[#F5F0E8] leading-tight">{card.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
