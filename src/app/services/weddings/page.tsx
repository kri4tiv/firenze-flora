import type { Metadata } from 'next'
import Image from 'next/image'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { SERVICES } from '@/lib/content'

const w = SERVICES.weddings

export const metadata: Metadata = {
  title: w.metaTitle,
  description: w.metaDescription,
}

export default function WeddingsPage() {
  return (
    <>
      {/* Hero */}
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Dubai Wedding Florist</span>
          <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">{w.headline}</h1>
          <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed mb-4">
            {w.intro}
          </p>
          <p className="font-body text-sm font-light text-[#2E2E2C] max-w-2xl leading-relaxed">
            {w.body}
          </p>
        </div>
      </div>

      {/* Cultures carousel */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-10">Wedding styles</h2>
          <div className="flex gap-4 overflow-x-auto pb-4" style={{ scrollbarWidth: 'none' }}>
            {w.cultures.map((culture) => (
              <div
                key={culture.id}
                className="flex-none w-56 aspect-[3/4] relative overflow-hidden group cursor-pointer"
              >
                <Image
                  src={culture.image}
                  alt={culture.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="224px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <span className="font-display text-xl text-white mb-1">{culture.title}</span>
                  <p className="font-body text-xs font-light text-white/70 leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-350">
                    {culture.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we deliver */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-8">What we deliver</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {w.whatWeDeliver.map((el) => (
              <div key={el} className="p-5 border border-[#EDE6D8] bg-[#F5F0E8]">
                <span className="font-body text-sm font-light text-[#2E2E2C]">{el}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site max-w-2xl">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-10">Common questions</h2>
          <div className="space-y-6">
            {w.faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#EDE6D8] pb-6">
                <h3 className="font-body text-sm font-medium text-[#1C1C1A] mb-2">{faq.question}</h3>
                <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
