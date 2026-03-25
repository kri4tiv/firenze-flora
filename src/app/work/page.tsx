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
      <div className="pt-32 pb-10 container-site">
        <span className="font-accent text-[#B8963E] text-xs tracking-widest uppercase block mb-4">
          Selected Work
        </span>
        <h1 className="font-display text-display-lg text-[#1C1C1A]">
          Portfolio
        </h1>
      </div>
      <WorkGrid />
      <EnquireCTA />
    </>
  )
}
