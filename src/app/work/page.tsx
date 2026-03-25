import type { Metadata } from 'next'
import WorkGrid from '@/components/sections/WorkGrid'
import EnquireCTA from '@/components/sections/EnquireCTA'

export const metadata: Metadata = {
  title: 'Work | Firenze Flora Dubai',
  description: 'Selected portfolio of weddings and events styled by Firenze Flora in Dubai.',
}

export default function WorkPage() {
  return (
    <>
      {/* Full-width dark hero bar */}
      <div className="bg-[#1C1C1A] pt-32 pb-16">
        <div className="container-site">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="gold-line mb-5" />
              <h1 className="font-display text-display-lg text-[#F5F0E8]">
                Our Work
              </h1>
            </div>
            <p className="font-accent text-xs tracking-[0.2em] text-[#8C8279] uppercase md:text-right pb-1">
              120+ Projects&nbsp;&nbsp;·&nbsp;&nbsp;Weddings&nbsp;&nbsp;·&nbsp;&nbsp;Events&nbsp;&nbsp;·&nbsp;&nbsp;Corporate&nbsp;&nbsp;·&nbsp;&nbsp;Dubai
            </p>
          </div>
        </div>
      </div>

      <WorkGrid />
      <EnquireCTA />
    </>
  )
}
