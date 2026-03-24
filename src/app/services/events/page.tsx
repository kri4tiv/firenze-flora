import type { Metadata } from 'next'
import EnquireCTA from '@/components/sections/EnquireCTA'
import { SERVICES } from '@/lib/content'

const e = SERVICES.events

export const metadata: Metadata = {
  title: e.metaTitle,
  description: e.metaDescription,
}

export default function EventsPage() {
  const sections = [
    {
      label: 'Personal Celebrations',
      title: e.private.title,
      description: e.private.description,
      items: e.private.items,
    },
    {
      label: 'Business & Brand Events',
      title: e.corporate.title,
      description: e.corporate.description,
      items: e.corporate.items,
    },
    {
      label: 'Additional Services',
      title: e.other.title,
      description: '',
      items: e.other.items,
    },
  ]

  return (
    <>
      <div className="pt-32 pb-20 bg-[#FDFCFA]">
        <div className="container-site">
          <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">Dubai Event Florist</span>
          <h1 className="font-display text-display-lg text-[#1C1C1A] mb-6">{e.headline}</h1>
          <p className="font-body text-base font-light text-[#8C8279] max-w-xl leading-relaxed">
            {e.intro}
          </p>
        </div>
      </div>

      {sections.map((section, si) => (
        <section
          key={section.title}
          className="section-padding border-b border-[#EDE6D8]"
          style={{ background: si % 2 === 0 ? '#FDFCFA' : '#F5F0E8' }}
        >
          <div className="container-site">
            <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-3">
              {section.label}
            </span>
            <h2 className="font-display text-display-md text-[#1C1C1A] mb-3">{section.title}</h2>
            {section.description && (
              <p className="font-body text-sm font-light text-[#8C8279] max-w-xl leading-relaxed mb-8">
                {section.description}
              </p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
              {section.items.map((item) => (
                <div key={item.name} className="p-6 bg-[#F5F0E8] border border-[#EDE6D8]">
                  <p className="font-body text-sm font-medium text-[#1C1C1A] mb-1">{item.name}</p>
                  <p className="font-body text-xs font-light text-[#8C8279] leading-relaxed">{item.desc}</p>
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
