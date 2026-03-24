import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Events | Premium Event Decor in Dubai',
  description: 'Corporate, private, and brand event decor in Dubai. Creative concept, premium materials, flawless setup.',
}

const privateEvents = ['Birthday Parties', 'Anniversary Events', 'Baby Showers', 'Proposals', 'Graduation']
const corporateEvents = ['Office Decoration', 'Business Meetings', 'Conferences', 'Openings & Launches', 'Corporate Gifting']
const otherEvents = ['Housewarming', 'Home Decoration']

export default function EventsPage() {
  return (
    <>
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Dubai Event Florist</span>
          <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">Event decor in Dubai</h1>
          <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed">
            Whether you're celebrating a personal milestone or hosting a corporate showcase,
            we bring concept to life with precision and premium materials.
          </p>
        </div>
      </div>

      {[
        { title: 'Private Events', items: privateEvents, label: 'Personal Celebrations' },
        { title: 'Corporate', items: corporateEvents, label: 'Business & Brand Events' },
        { title: 'Other Decorations', items: otherEvents, label: 'Additional Services' },
      ].map((section) => (
        <section key={section.title} className="section-padding border-b border-[#EDE6D8]">
          <div className="container-site">
            <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-3">{section.label}</span>
            <h2 className="font-display text-display-md text-[#1C1C1A] mb-8">{section.title}</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {section.items.map((item) => (
                <div key={item} className="p-5 bg-[#F5F0E8] border border-[#EDE6D8]">
                  <span className="font-body text-sm font-light text-[#2E2E2C]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      <EnquireCTA />
    </>
  )
}
