import type { Metadata } from 'next'
import Image from 'next/image'
import StatsStrip from '@/components/sections/StatsStrip'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { ABOUT } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

const team = [
  {
    name: 'Laxman Singh Butola',
    title: 'CEO',
    src: '/images/team/laxman.webp',
  },
  {
    name: 'Ranbir Singh',
    title: 'Operations Head',
    src: '/images/team/ranbir.webp',
  },
  {
    name: 'Sanjay Bahuguna',
    title: 'Event Consultant — International',
    src: '/images/team/sanjay.webp',
  },
  {
    name: 'Gulrukh Beg',
    title: 'IT & Marketing',
    src: '/images/team/gulrukh.webp',
  },
  {
    name: 'Monila Arora',
    title: 'Wedding Consultant',
    src: '/images/team/monila.webp',
  },
  {
    name: 'JP Negi',
    title: 'Sales Manager',
    src: '/images/team/jp.webp',
  },
]

const pillars = [
  'Fresh flowers sourced directly from Holland and premium global suppliers',
  '14 years serving Dubai\'s most discerning clients',
  'End-to-end service: concept, sourcing, setup, and breakdown',
  'Specialists in Arabic, Indian, Iranian, Western, and destination weddings',
  'A team of dedicated designers, consultants, and operations professionals',
  'Trusted by 3,000+ clients across the UAE and internationally',
]

export default function AboutPage() {
  return (
    <>
      {/* Hero — text only */}
      <div className="bg-[#1C1C1A] pt-32 pb-20">
        <div className="container-site max-w-4xl">
          <span className="gold-line mb-5" />
          <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-6">
            Est. 2010 · Dubai, UAE
          </p>
          <h1 className="font-display text-display-lg text-[#F5F0E8] mb-8 leading-tight">
            Dubai&apos;s Premier Floral &amp; Event Decor Studio
          </h1>
          <p className="font-display text-display-sm text-[#B8963E] italic mb-10 leading-snug">
            &ldquo;{ABOUT.mission}&rdquo;
          </p>
          <div className="space-y-5 font-body text-base font-light text-[#F5F0E8]/70 leading-relaxed max-w-2xl">
            <p>
              At Firenze Flora, we have what it takes to create some of the most breathtaking
              floral environments in Dubai. Whether it&apos;s a wedding, corporate event, or birthday
              celebration, we turn your vision into reality with gorgeous blooms that will be
              remembered long after the occasion.
            </p>
            <p>
              Our team of expert designers work closely with you to craft arrangements that fit
              your vision and budget — from grand ballroom transformations to intimate garden
              ceremonies. We take pride in being considered among the top event decor studios in
              the UAE.
            </p>
            <p>
              We source fresh flowers directly from Holland and premium global suppliers, ensuring
              every centrepiece, arch, and installation carries our signature quality. Every detail
              is delivered with precision — beautiful without drama.
            </p>
            <p>
              With extensive experience across cultures and event formats, our talented team crafts
              unique arrangements that elevate every occasion. From the first conversation to the
              last petal, we are with you.
            </p>
          </div>
        </div>
      </div>

      {/* Stats */}
      <StatsStrip />

      {/* Promise + Differentiators */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            <div>
              <span className="gold-line mb-5" />
              <h2 className="font-display text-display-md text-[#1C1C1A] mb-6 leading-tight">
                Why Firenze Flora
              </h2>
              <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">
                We don&apos;t just decorate spaces — we create environments that carry emotional
                weight. Every arrangement is considered for proportion, light, and the story
                it tells. We resist excess. One perfect focal point outweighs ten competing
                ones. And confidence in simplicity is the most expensive-looking thing of all.
              </p>
            </div>
            <ul className="space-y-4 pt-2">
              {pillars.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-[#B8963E] mt-1 flex-shrink-0 text-lg leading-none">—</span>
                  <p className="font-body text-base font-light text-[#2E2E2C] leading-relaxed">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <div className="mb-12">
            <span className="gold-line mb-4" />
            <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
              The Team
            </p>
            <h2 className="font-display text-display-md text-[#1C1C1A]">
              The people behind the work
            </h2>
          </div>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-6">
            {team.map((member) => (
              <div key={member.name} className="text-center">
                <div className="relative aspect-square overflow-hidden bg-[#EDE6D8] mb-3 mx-auto max-w-[140px]">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top"
                    sizes="140px"
                  />
                </div>
                <p className="font-display text-sm text-[#1C1C1A] leading-tight mb-0.5">{member.name}</p>
                <p className="font-accent text-[9px] tracking-[0.15em] text-[#B8963E] uppercase leading-tight">
                  {member.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
