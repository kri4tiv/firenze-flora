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
  aspectRatio?: string
  splitAt?: number
  onCardClick?: (name: string) => void
  bg?: string
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

function CardItem({
  card,
  index,
  aspectRatio,
  onCardClick,
}: {
  card: TypeCard
  index: number
  aspectRatio: string
  onCardClick?: (name: string) => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07, ease: [0.25, 0.46, 0.45, 0.94] }}
      animate="rest"
      whileHover="hover"
      onClick={() => onCardClick?.(card.name)}
      className={`relative ${aspectRatio} overflow-hidden ${onCardClick ? 'cursor-pointer' : ''}`}
    >
      <motion.div className="absolute inset-0" variants={imageVariants}>
        <Image
          src={card.image}
          alt={card.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
        />
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

      <motion.div
        className="absolute inset-0 bg-[#D4A5B5]/20"
        variants={overlayVariants}
      />

      <motion.div className="absolute bottom-0 left-0 p-4" variants={textVariants}>
        <span className="font-display text-lg text-white block">{card.name}</span>
      </motion.div>
    </motion.div>
  )
}

export default function TypeCards({
  heading,
  cards,
  aspectRatio = 'aspect-[4/3]',
  splitAt,
  onCardClick,
  bg = '#141414',
}: TypeCardsProps) {
  const row1 = splitAt != null ? cards.slice(0, splitAt) : cards
  const row2 = splitAt != null ? cards.slice(splitAt) : []

  return (
    <LazyMotion features={domAnimation}>
      <section className="w-full py-16" style={{ backgroundColor: bg }}>
        <div className="px-6 mb-10">
          <h2 className="font-display text-display-md text-[#F5F0E8] text-center">
            {heading}
          </h2>
        </div>

        {/* Row 1 — full width */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-1">
          {row1.map((card, i) => {
            const isLastOdd = row1.length % 2 !== 0 && i === row1.length - 1
            return (
              <div key={card.name} className={isLastOdd ? 'col-span-2 md:col-span-1' : ''}>
                <CardItem card={card} index={i} aspectRatio={aspectRatio} onCardClick={onCardClick} />
              </div>
            )
          })}
        </div>

        {/* Row 2 — only when splitAt is set */}
        {row2.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-1 mt-1 lg:px-[10%]">
            {row2.map((card, i) => {
              const isLastOdd = row2.length % 2 !== 0 && i === row2.length - 1
              return (
                <div key={card.name} className={isLastOdd ? 'col-span-2 md:col-span-1' : ''}>
                  <CardItem card={card} index={row1.length + i} aspectRatio={aspectRatio} onCardClick={onCardClick} />
                </div>
              )
            })}
          </div>
        )}
      </section>
    </LazyMotion>
  )
}
