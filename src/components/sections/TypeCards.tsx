'use client'

import Image from 'next/image'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

interface TypeCard {
  name: string
  image: string
}

interface TypeCardsProps {
  heading: string
  cards: TypeCard[]
  aspectRatio?: string  // default 'aspect-[4/3]'
  splitAt?: number      // if set, split into two rows at this index
}

const imageVariants = {
  rest:  { scale: 1 },
  hover: { scale: 1.08, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const overlayVariants = {
  rest:  { opacity: 0 },
  hover: { opacity: 1, transition: { duration: 0.4 } },
}

const textVariants = {
  rest:  { y: 0 },
  hover: { y: -4, transition: { duration: 0.3 } },
}

function CardItem({ card, index, aspectRatio }: { card: TypeCard; index: number; aspectRatio: string }) {
  return (
    <motion.div
      key={card.name}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      animate="rest"
      whileHover="hover"
      className={`relative ${aspectRatio} overflow-hidden`}
    >
      {/* Image */}
      <motion.div className="absolute inset-0" variants={imageVariants}>
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </motion.div>

      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      {/* Pink hover overlay */}
      <motion.div
        className="absolute inset-0 bg-[#D4A5B5]/20"
        variants={overlayVariants}
      />

      {/* Text */}
      <motion.div className="absolute bottom-0 left-0 p-4" variants={textVariants}>
        <span className="font-display text-lg text-white block">{card.name}</span>
      </motion.div>
    </motion.div>
  )
}

export default function TypeCards({ heading, cards, aspectRatio = 'aspect-[4/3]', splitAt }: TypeCardsProps) {
  const row1 = splitAt != null ? cards.slice(0, splitAt) : cards
  const row2 = splitAt != null ? cards.slice(splitAt) : []

  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-[#141414] py-16">
        <div className="container-site">
          <h2 className="font-display text-display-sm text-[#F5F0E8] text-center mb-12">
            {heading}
          </h2>

          {/* Row 1 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {row1.map((card, i) => (
              <CardItem key={card.name} card={card} index={i} aspectRatio={aspectRatio} />
            ))}
          </div>

          {/* Row 2 — only rendered when splitAt is set */}
          {row2.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-3 lg:px-[10%]">
              {row2.map((card, i) => (
                <CardItem key={card.name} card={card} index={row1.length + i} aspectRatio={aspectRatio} />
              ))}
            </div>
          )}
        </div>
      </section>
    </LazyMotion>
  )
}
