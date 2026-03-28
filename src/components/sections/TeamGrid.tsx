'use client'

import Image from 'next/image'
import { motion, LazyMotion, domAnimation } from 'framer-motion'

const team = [
  { name: 'Laxman',  role: 'CEO',                image: '/images/team/laxman-v2.webp' },
  { name: 'Ranbir',  role: 'Operations Head',     image: '/images/team/ranbir-v2.webp' },
  { name: 'Sanjay',  role: 'Event Consultant',    image: '/images/team/sanjay-v2.webp' },
  { name: 'Gulrukh', role: 'IT & Marketing',      image: '/images/team/gulrukh-v2.webp' },
  { name: 'Monila',  role: 'Wedding Consultant',  image: '/images/team/monila-v2.webp' },
  { name: 'JP',      role: 'Sales Manager',       image: '/images/team/jp.webp' },
]

const photoVariants = {
  rest:  { scale: 1 },
  hover: { scale: 1.04, transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const nameVariants = {
  rest:  { color: '#F5F0E8' },
  hover: { color: '#D4A5B5', transition: { duration: 0.3 } },
}

export default function TeamGrid() {
  return (
    <LazyMotion features={domAnimation}>
      <section className="bg-[#141414] py-24">
        <div className="container-site">
          <h2 className="font-display text-display-md text-[#F5F0E8] mb-12 text-center">Meet the team</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {team.map((member) => (
              <motion.div
                key={member.name}
                initial="rest"
                animate="rest"
                whileHover="hover"
                className="text-center"
              >
                <motion.div
                  variants={photoVariants}
                  className="overflow-hidden mx-auto"
                  style={{ maxWidth: 160 }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={160}
                    height={160}
                    className="aspect-square object-cover object-top w-full"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                  />
                </motion.div>
                {/* @ts-ignore framer-motion color variant typing */}
                <motion.p
                  variants={nameVariants}
                  className="text-sm font-medium mt-3 font-body"
                >
                  {member.name}
                </motion.p>
                <p className="text-xs text-[#8C8279] mt-0.5 font-body">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </LazyMotion>
  )
}
