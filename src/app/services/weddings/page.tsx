import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Weddings | Wedding Decor in Dubai',
  description: 'Wedding floral decor in Dubai: reception styling, centrepieces, arches, flower walls, and more. Explore wedding types and enquire.',
}

const cultures = ['Arabic', 'Indian', 'Iranian', 'Western', 'Destination']
const decorElements = [
  'Wedding Flowers', 'Bridal Bouquet', 'Flower Walls', 'Reception Styling',
  'Centrepieces', 'Flower Arches', 'Car Decoration', 'Proposals & Engagement',
]
const faqs = [
  { q: 'How far in advance should I book?', a: 'We recommend enquiring at least 3–6 months ahead for wedding dates, though we can accommodate shorter timelines depending on availability.' },
  { q: 'Do you handle venue setup and breakdown?', a: 'Yes — our team manages full delivery, setup, and post-event breakdown at your Dubai venue.' },
  { q: 'Do you use fresh or artificial flowers?', a: 'We work primarily with fresh flowers sourced from premium suppliers. Artificial options are available on request for specific elements.' },
  { q: 'Do you service all of Dubai?', a: 'Yes, we operate exclusively within Dubai and the UAE. We work across all major venues — Jumeirah, Downtown, DIFC, Palm, and beyond.' },
]

export default function WeddingsPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Dubai Wedding Florist</span>
          <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">Wedding decor in Dubai</h1>
          <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed">
            Every wedding is a reflection of the couple. We craft floral environments that honour
            your culture, your story, and your vision — with flawless execution on the day.
          </p>
        </div>
      </div>

      {/* Wedding Cultures Carousel (horizontal pick-scroll) */}
      <section className="section-padding bg-[#F5F0E8]">
        <div className="container-site">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-10">Wedding styles</h2>
          <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
            {cultures.map((culture) => (
              <div
                key={culture}
                className="flex-none w-56 aspect-[3/4] bg-[#EDE6D8] placeholder-shimmer relative group cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-5">
                  <span className="font-display text-xl text-white">{culture}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Decor Elements */}
      <section className="section-padding bg-[#FDFCFA]">
        <div className="container-site">
          <span className="gold-line mb-4" />
          <h2 className="font-display text-display-md text-[#1C1C1A] mb-8">What we deliver</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {decorElements.map((el) => (
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
            {faqs.map((faq) => (
              <div key={faq.q} className="border-b border-[#EDE6D8] pb-6">
                <h3 className="font-body text-sm font-medium text-[#1C1C1A] mb-2">{faq.q}</h3>
                <p className="font-body text-sm font-light text-[#8C8279] leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquireCTA />
    </>
  )
}
