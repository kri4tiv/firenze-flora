'use client'

import { useState } from 'react'
import TypeCards from './TypeCards'
import ServiceDrawer from '@/components/ui/ServiceDrawer'

const eventTypeCards = [
  { name: 'Private Parties',       image: '/images/type-cards/events-private.webp' },
  { name: 'Corporate Events',      image: '/images/type-cards/events-corporate.webp' },
  { name: 'Brand Activations',     image: '/images/type-cards/events-brand.webp' },
  { name: 'Product Launches',      image: '/images/type-cards/events-product-launches.webp' },
  { name: 'Openings & Ceremonies', image: '/images/type-cards/events-opening.webp' },
  { name: 'Birthdays',             image: '/images/type-cards/events-birthdays.webp' },
  { name: 'Anniversaries',         image: '/images/type-cards/events-anniversary.webp' },
  { name: 'Baby Showers',          image: '/images/type-cards/events-babyshower.webp' },
  { name: 'Proposals',             image: '/images/type-cards/events-proposals.webp' },
]

const eventData: Record<string, { intro: string; whatWeDo: string[]; florals: string[]; setup: string[] }> = {
  'Private Parties': {
    intro: "Private parties deserve to feel extraordinary. Whether it's an intimate gathering at home or a celebration at one of Dubai's premier venues, Firenze Flora creates floral environments that make every guest feel the occasion.",
    whatWeDo: ['Full venue floral styling', 'Welcome and entrance design', 'Table centrepieces', 'Balloon and floral mix', 'Photo backdrop creation', 'Personalised touches'],
    florals: ['Seasonal blooms in your colours', 'Candle and floral table centres', 'Flower walls and backdrops', 'Bud vases and clusters', 'Garlands and hanging installations', 'Foliage and greenery'],
    setup: ['In-home or venue setup', 'Day-of installation team', 'Post-party breakdown', 'Colour consultation', 'Custom theme matching', 'Flexible timing'],
  },
  'Corporate Events': {
    intro: "Corporate events are a direct expression of your brand. Firenze Flora creates floral and decor environments for Dubai's most discerning businesses — from intimate client dinners to large-scale conferences and awards evenings.",
    whatWeDo: ['Conference and gala styling', 'Stage and podium florals', 'Table centrepieces for dinners', 'Branded flower wall creation', 'Reception and lobby florals', 'Award ceremony decor'],
    florals: ['Brand colour-matched arrangements', 'Architectural installations', 'Tall statement centrepieces', 'Low contemporary arrangements', 'Greenery and foliage walls', 'Dried and preserved options'],
    setup: ['Brand guideline consultation', 'Multi-room installations', 'Corporate timeline adherence', 'Quiet professional setup', 'Full breakdown after event', 'Emergency on-call contact'],
  },
  'Brand Activations': {
    intro: 'Brand activations demand visual impact. Firenze Flora designs floral and botanical installations that stop people in their tracks — shareable, on-brand, and unforgettable.',
    whatWeDo: ['Statement floral installations', 'Branded flower walls', 'Interactive floral moments', 'Product launch styling', 'Social media-ready setups', 'Pop-up environment design'],
    florals: ['High-impact statement blooms', 'Brand colour florals', 'Oversized arrangements', 'Dried and artificial hybrid', 'Custom printed floral elements', 'Sculptural botanical pieces'],
    setup: ['Creative briefing session', 'Concept and mood board', 'Full installation team', 'Multi-day activation support', 'Structural rigging available', 'Branded documentation'],
  },
  'Product Launches': {
    intro: "A product launch sets the tone for everything that follows. We create elegant, brand-aligned floral environments that complement your product — enhancing the reveal, setting the mood, and ensuring every photograph tells the right story.",
    whatWeDo: ['Launch venue full styling', 'Product reveal backdrop', 'Guest table arrangements', 'Press and media area setup', 'Branded installation pieces', 'VIP area florals'],
    florals: ['Luxury editorial arrangements', 'White and neutral palettes', 'Bold statement pieces', 'Botanical and architectural', 'Scented ambient florals', 'Custom colour schemes'],
    setup: ['Pre-launch site visit', 'Brand alignment consultation', 'Media-ready installation', 'Photographer briefing', 'Full breakdown post-launch', 'Repeat booking priority'],
  },
  'Openings & Ceremonies': {
    intro: 'Grand openings and ceremonies mark the beginning of something important. Firenze Flora creates floral environments that honour the occasion — ribbon cutting ceremonies, venue openings, and official launches — with the scale and elegance the moment deserves.',
    whatWeDo: ['Ceremony arch and stage', 'Ribbon cutting florals', 'VIP entrance styling', 'Grand hall decoration', 'Official photography setups', 'Guest reception florals'],
    florals: ['Grand scale arrangements', 'National day colour schemes', 'Luxury white and gold', 'Cascading floral arches', 'Branded floral pieces', 'Fresh flower carpets'],
    setup: ['Multi-area installation', 'Coordination with officials', 'Security-approved setup', 'Advance venue access', 'Full team on-site', 'Same-day freshness'],
  },
  'Birthdays': {
    intro: "Birthdays are personal — and your florals should be too. From a child's first birthday to a landmark celebration, Firenze Flora creates bespoke floral environments that reflect the person being celebrated.",
    whatWeDo: ['Party venue full styling', 'Table centrepieces', 'Birthday backdrop design', 'Balloon and floral combos', 'Cake table styling', 'Personalised floral gifts'],
    florals: ['Theme-matching colour palettes', 'Bright seasonal flowers', 'Fun and playful arrangements', 'Flower crowns on request', 'Number and letter florals', 'Custom bouquets'],
    setup: ['Theme consultation', 'In-home or venue setup', 'Child-safe arrangements', 'Post-party breakdown', 'Surprise setup available', 'Flexible timing'],
  },
  'Anniversaries': {
    intro: 'Anniversaries celebrate the story you have built together. Firenze Flora creates romantic, intimate floral environments for anniversary celebrations — from dinner for two to large anniversary galas.',
    whatWeDo: ['Intimate dinner styling', 'Large anniversary event decor', 'Surprise setup service', 'Table and room florals', 'Rose petal arrangements', 'Personalised floral messages'],
    florals: ['Red and blush roses', 'Romantic candle and floral sets', 'Rose petal pathways', 'Cascading centrepieces', 'Scented garden roses', 'Premium imported stems'],
    setup: ['Surprise delivery available', 'Romantic atmosphere creation', 'Candle placement included', 'Hotel room setups', 'Villa and home service', 'Full cleanup after'],
  },
  'Baby Showers': {
    intro: 'Baby showers deserve softness, warmth, and beauty. Firenze Flora creates gentle, elegant floral environments for baby shower celebrations — pastel-perfect arrangements, delicate installations, and styling that makes the mother-to-be feel truly celebrated.',
    whatWeDo: ['Venue and home full styling', 'Welcome table arrangement', 'Dessert table florals', 'Photo corner backdrop', 'Guest table centrepieces', 'Personalised floral details'],
    florals: ['Soft pastel palettes', 'Peonies and garden roses', "Baby's breath clouds", 'Eucalyptus garlands', 'Gender reveal colour options', 'Dried pampas and florals'],
    setup: ['Theme colour consultation', 'Gender reveal styling available', 'In-home or venue setup', 'Post-event breakdown', 'Gentle fragrance selection', 'Same-day delivery option'],
  },
  'Proposals': {
    intro: 'The most important question deserves the most beautiful setting. Firenze Flora creates bespoke proposal environments across Dubai — from private beach setups to rooftop moments at iconic venues.',
    whatWeDo: ['Full proposal environment design', 'Rose petal pathway', 'Candle and lantern placement', 'Personalised signage styling', 'Photographer coordination', 'Post-proposal dinner styling'],
    florals: ['Red rose cascade arrangements', 'White orchid elegance', 'Rose petal heart and pathways', 'Floral arch for the moment', 'Mixed romantic arrangements', 'Scented premium roses'],
    setup: ['Secret planning service', 'Venue or private location', 'Setup while you are away', 'Photographer-ready arrangement', 'Proposal box styling', 'Full cleanup after'],
  },
}

export default function EventTypesSection() {
  const [activeEvent, setActiveEvent] = useState<string | null>(null)

  const activeCard = eventTypeCards.find(e => e.name === activeEvent)
  const activeContent = activeEvent
    ? (eventData[activeEvent] ?? { intro: '', whatWeDo: [], florals: [], setup: [] })
    : { intro: '', whatWeDo: [], florals: [], setup: [] }

  return (
    <>
      <TypeCards
        heading="Events we cover"
        cards={eventTypeCards}
        aspectRatio="aspect-[4/3]"
        splitAt={5}
        bg="#0A0A0A"
        onCardClick={(name) => setActiveEvent(name)}
      />
      <ServiceDrawer
        open={!!activeEvent}
        onClose={() => setActiveEvent(null)}
        title={activeEvent ?? ''}
        image={activeCard?.image ?? ''}
        content={activeContent}
      />
    </>
  )
}
