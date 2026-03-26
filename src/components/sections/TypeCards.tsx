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

const arrowVariants = {
  rest:  { opacity: 0, x: -8 },
  hover: { opacity: 1, x: 0, transition: { duration: 0.3 } },
}

export default function TypeCards({ heading, cards }: TypeCardsProps) {
  return (
    <LazyMotion features={domAnimation}>
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
                animate="rest"
                whileHover="hover"
                className="relative aspect-[3/4] overflow-hidden cursor-pointer"
              >
                {/* Image */}
                <motion.div className="absolute inset-0" variants={imageVariants}>
                  <Image
                    src={card.image}
                    alt={card.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                  />
                </motion.div>

                {/* Base gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Gold hover overlay */}
                <motion.div
                  className="absolute inset-0 bg-[#B8963E]/20"
                  variants={overlayVariants}
                />

                {/* Text */}
                <motion.div className="absolute bottom-0 left-0 p-5" variants={textVariants}>
                  <span className="font-display text-xl text-white font-[500] block">{card.name}</span>
                  <motion.span
                    className="block text-[#B8963E] text-sm mt-1"
                    variants={arrowVariants}
                  >
                    Explore →
                  </motion.span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
