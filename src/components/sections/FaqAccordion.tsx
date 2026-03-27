'use client'

import { useState } from 'react'

export interface FaqItem {
  question: string
  answer: string
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} className="border-b border-[#242424]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between py-5 text-left group"
          >
            <span className="font-body text-base text-[#F5F0E8] group-hover:text-[#D4A5B5] transition-colors">{item.question}</span>
            <span className="text-[#D4A5B5] text-xl leading-none ml-4 shrink-0 select-none">
              {open === i ? '−' : '+'}
            </span>
          </button>
          {open === i && (
            <p className="font-body text-base text-[#8C8279] leading-relaxed pb-5">
              {item.answer}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}
