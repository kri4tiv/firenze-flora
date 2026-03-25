import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { ABOUT, SITE } from '@/lib/content'

export const metadata: Metadata = {
  title: ABOUT.metaTitle,
  description: ABOUT.metaDescription,
}

const team = [
  {
    name: 'Laxman Singh Butola',
    title: 'CEO',
    bio: 'Believes that excellence isn\'t just a goal — it\'s a way of life. With a unique ability to envision the extraordinary in the unexplored, Laxman has built Firenze Flora into one of Dubai\'s most trusted names in event decor.',
    src: '/images/team/laxman.webp',
  },
  {
    name: 'Ranbir Singh',
    title: 'Operations Head',
    bio: 'As Event Operations Head, Ranbir is the driving force behind flawless execution — translating visions into reality with precision and passion, ensuring every detail aligns to create memorable experiences.',
    src: '/images/team/ranbir.webp',
  },
  {
    name: 'Sanjay Bahuguna',
    title: 'Event Consultant — International',
    bio: 'As International Event Consultant, Sanjay bridges cultures and creates unforgettable global experiences. His passion is turning your event vision into a borderless reality.',
    src: '/images/team/sanjay.webp',
  },
  {
    name: 'Gulrukh Beg',
    title: 'IT & Marketing',
    bio: 'The marketing maestro of the event world, harmonising strategies to create a symphony of excitement and anticipation for each unique occasion — and ensuring Firenze Flora\'s voice reaches the right clients.',
    src: '/images/team/gulrukh.webp',
  },
  {
    name: 'Monila Arora',
    title: 'Wedding Consultant',
    bio: 'Specialising in crafting events that are as unique as the couples who commission them. Monila brings warmth, attention to detail, and a deep understanding of what makes a wedding day truly unforgettable.',
    src: '/images/team/monila.webp',
  },
  {
    name: 'JP Negi',
    title: 'Sales Manager',
    bio: 'JP thrives on building client connections and driving the studio\'s growth with a results-driven approach. His deep knowledge of the Dubai events market ensures every enquiry becomes a conversation about possibility.',
    src: '/images/team/jp.webp',
  },
]

const stats = [
  { value: '14', label: 'Years in Service' },
  { value: '5,000+', label: 'Events Delivered' },
  { value: '3,000+', label: 'Delighted Clients' },
  { value: '4', label: 'Global Footprint' },
  { value: '99%', label: 'Client Satisfaction' },
]

const pillars = [
  {
    title: 'Artistry',
    body: 'Every arrangement is a composition. We treat florals as light — something that shapes the emotional temperature of a space.',
  },
  {
    title: 'Precision',
    body: 'Logistics, timelines, and supplier relationships built over 14 years ensure the day runs as designed. Beautiful without drama.',
  },
  {
    title: 'Restraint',
    body: 'We resist excess. One perfect focal point outweighs ten competing ones. Confidence in simplicity is the most expensive-looking thing of all.',
  },
]

export default function AboutPage() {
  const waUrl = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(SITE.whatsappMessage)}`

  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="gold-line mb-5" />
              <span className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase">
                About Us
              </span>
            </div>
            <div>
              <h1 className="font-display text-display-lg text-[#1C1C1A] mb-8 leading-tight">
                Our Event Alchemists
              </h1>
              <div className="space-y-5 font-body text-base font-light text-[#2E2E2C] leading-relaxed max-w-prose">
                <p>At Firenze Flora, we have what it takes to create some of the most breathtaking floral environments in Dubai. Whether it&apos;s a floral arrangement for a wedding, corporate event, or birthday celebration, we turn your vision into reality with gorgeous blooms that will be remembered by all who attend.</p>
                <p>Our team of expert designers work closely with you to craft beautiful flower arrangements that fit your vision and budget. From wedding florals to corporate arrangements in Dubai, we have it all covered — and we take pride in being considered among the top event decor studios in the UAE.</p>
                <p>If you want your event to stand out, look no further than Firenze Flora. With extensive experience creating floral masterpieces for weddings and corporate events alike, our talented design team crafts unique arrangements that take your breath away.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pull quote */}
      <section className="py-20 bg-[#1C1C1A]">
        <div className="container-site max-w-3xl">
          <blockquote className="text-center">
            <p className="font-display text-display-sm md:text-display-md text-[#F5F0E8] italic leading-tight mb-6">
              &ldquo;{ABOUT.mission}&rdquo;
            </p>
            <span className="gold-line mx-auto" />
          </blockquote>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <div className="mb-12">
            <span className="gold-line mb-4" />
            <h2 className="font-display text-display-md text-[#1C1C1A]">
              Unlocking Our Success in Numbers
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="font-display text-4xl md:text-5xl text-[#B8963E] mb-2">{s.value}</p>
                <p className="font-accent text-xs tracking-widest text-[#8C8279] uppercase">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work — 3 columns */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <div className="mb-14">
            <span className="gold-line mb-4" />
            <h2 className="font-display text-display-md text-[#1C1C1A]">How we work</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {pillars.map((pillar) => (
              <div key={pillar.title}>
                <h3 className="font-display text-2xl text-[#1C1C1A] mb-4">{pillar.title}</h3>
                <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">
                  {pillar.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <div className="mb-14">
            <span className="gold-line mb-4" />
            <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase mb-3">
              The Team
            </p>
            <h2 className="font-display text-display-md text-[#1C1C1A] mb-4">
              Meet Our Team: The Creative Minds<br className="hidden md:block" /> Behind the Magic
            </h2>
            <p className="font-body text-sm font-light text-[#8C8279] max-w-2xl leading-relaxed">
              We proudly introduce the brilliant minds behind our floral wonderland — artists, visionaries,
              and creators who weave enchantment into every petal.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-[#EDE6D8]">
            {team.map((member) => (
              <div key={member.name} className="bg-[#F5F0E8] group">
                <div className="relative aspect-[3/4] overflow-hidden bg-[#EDE6D8]">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl text-[#1C1C1A] mb-1">{member.name}</h3>
                  <p className="font-accent text-[10px] tracking-[0.2em] text-[#B8963E] uppercase mb-3">
                    {member.title}
                  </p>
                  <p className="font-body text-xs font-light text-[#8C8279] leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="section-padding bg-[#1C1C1A]">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="gold-line mb-5" />
              <h2 className="font-display text-display-md text-[#F5F0E8] mb-5">
                We Are Here To Help You
              </h2>
              <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed mb-8 max-w-prose">
                At Firenze Flora, we specialise in wedding and event floral decor. We&apos;re here to
                transform your special day into a captivating and elegant affair. Our skilled artisans
                create exquisite floral arrangements that reflect your unique style, leaving a lasting
                impression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/enquire"
                  className="inline-flex items-center gap-2 font-body text-sm text-white bg-[#B8963E] px-6 py-3 hover:bg-[#D4B062] transition-colors duration-250 tracking-widest uppercase"
                >
                  Start an Enquiry
                </Link>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-body text-sm text-[#25D366] border border-[#25D366]/40 px-6 py-3 hover:border-[#25D366] transition-colors duration-250"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279]/60 uppercase mb-1">
                  Email
                </p>
                <a
                  href={`mailto:${SITE.email}`}
                  className="font-body text-sm text-[#F5F0E8]/80 hover:text-[#B8963E] transition-colors"
                >
                  {SITE.email}
                </a>
              </div>
              <div>
                <p className="font-accent text-[10px] tracking-[0.2em] text-[#8C8279]/60 uppercase mb-1">
                  Phone / WhatsApp
                </p>
                <a
                  href={`tel:${SITE.phoneTel}`}
                  className="font-body text-sm text-[#F5F0E8]/80 hover:text-[#B8963E] transition-colors"
                >
                  {SITE.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
