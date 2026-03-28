'use client'

import { useState } from 'react'
import TypeCards from './TypeCards'
import ServiceDrawer from '@/components/ui/ServiceDrawer'

const weddingTypeCards = [
  { name: 'Arabic Weddings',      image: '/images/type-cards/weddings-arabic.webp' },
  { name: 'Indian Weddings',      image: '/images/type-cards/weddings-indian.webp' },
  { name: 'Iranian Weddings',     image: '/images/type-cards/weddings-iranian.webp' },
  { name: 'Western Weddings',     image: '/images/type-cards/weddings-western.webp' },
  { name: 'Destination Weddings', image: '/images/portfolio/flower-arch/flower-arch-01.webp' },
]

const weddingData: Record<string, { intro: string; whatWeDo: string[]; florals: string[]; setup: string[] }> = {
  'Arabic Weddings': {
    intro: 'Arabic weddings in Dubai are grand, opulent affairs steeped in cultural tradition. At Firenze Flora, we craft bespoke floral environments that honour the elegance and grandeur of Arabic wedding celebrations. From lavish reception halls to intimate majlis settings, every detail is considered.',
    whatWeDo: ['Full venue floral design', 'Kosha and stage decoration', 'Guest table centrepieces', 'Entrance and aisle florals', 'Bridal suite styling', 'Day-of coordination'],
    florals: ['White orchids and roses', 'Trailing greenery installations', 'Tall candelabra arrangements', 'Fresh flower walls', 'Scented jasmine garlands', 'Imported Dutch roses'],
    setup: ['Full venue walkthrough', 'Overnight installation available', 'Coordination with venue team', 'Post-event breakdown', 'Emergency on-call florist', 'Custom colour consultation'],
  },
  'Indian Weddings': {
    intro: 'Indian weddings are vibrant multi-day celebrations filled with colour, fragrance, and joy. Our team has deep expertise in Indian wedding florals, from the Sangeet and Mehndi to the grand wedding ceremony and reception. We work with marigolds, roses, mogra, and premium blooms to create immersive floral experiences.',
    whatWeDo: ['Mandap and stage design', 'Multi-day event florals', 'Sangeet and Mehndi decor', 'Phoolon ki chadar', 'Baraat welcome florals', 'Reception centrepieces'],
    florals: ['Marigold garlands and strings', 'Pink and orange rose cascades', 'Jasmine mogra arrangements', 'Tropical leaf backdrops', 'Hanging floral installations', 'Mixed exotic blooms'],
    setup: ['Multi-day installation planning', 'Cultural consultation included', 'Full team for large-scale setups', 'Colour theme matching', 'Venue coordination', 'Post-event cleanup'],
  },
  'Iranian Weddings': {
    intro: 'Iranian weddings carry centuries of tradition in every detail. The Sofreh Aghd, the ceremonial spread, is our speciality, designed with white flowers, greenery, and elegant florals that reflect the beauty and meaning of Persian wedding culture. We ensure every arrangement is authentic, refined, and deeply personal.',
    whatWeDo: ['Sofreh Aghd design', 'Ceremony floral design', 'Reception styling', 'Bridal bouquet creation', 'Table centrepieces', 'Venue entrance florals'],
    florals: ['White roses and tuberose', 'Herb and greenery elements', 'Pomegranate and mirror accents', 'Lily and ranunculus arrangements', 'Soft white and ivory tones', 'Scented florals for Sofreh'],
    setup: ['Sofreh Aghd full setup', 'Ceremony and reception', 'Cultural element sourcing', 'Coordination with family', 'Full breakdown service', 'Same-day freshness guarantee'],
  },
  'Western Weddings': {
    intro: 'Western weddings in Dubai range from intimate garden ceremonies to grand ballroom celebrations. Our approach to western wedding florals is editorial and refined: clean lines, thoughtful colour palettes, and arrangements that photograph beautifully. We work with your vision to create something genuinely unforgettable.',
    whatWeDo: ['Ceremony arch and aisle design', 'Reception table styling', 'Bridal bouquet and party florals', 'Cocktail hour arrangements', 'Cake and dessert table florals', 'Venue entrance design'],
    florals: ['Garden roses and peonies', 'Eucalyptus and trailing greenery', 'White and blush tones', 'Dried and fresh mixed arrangements', 'Seasonal European flowers', 'Wildflower and meadow styles'],
    setup: ['Style consultation included', 'Mood board and colour review', 'Full venue installation', 'Photographer-friendly arrangements', 'Timeline coordination', 'Post-wedding breakdown'],
  },
  'Destination Weddings': {
    intro: "Dubai is one of the world's premier destination wedding cities, and Firenze Flora is your local expert partner. We work with international couples and wedding planners to deliver world-class floral design across Dubai's most iconic venues. From the Palm to Downtown, we know every venue and make the entire process seamless from abroad.",
    whatWeDo: ['Remote consultation and planning', 'Full venue floral design', 'International planner coordination', 'Airport and hotel welcome florals', 'Multi-day event coverage', 'Vendor network introductions'],
    florals: ['Bespoke to your vision', 'Seasonal best availability', 'Imported specialty blooms', 'Luxury foliage and textures', 'Custom colour matching', 'Preservation options available'],
    setup: ['Virtual planning sessions', 'Local venue expertise', 'Day-of lead designer', 'Family and planner liaison', 'Full setup and breakdown', 'Post-event documentation'],
  },
}

export default function WeddingTypesSection() {
  const [activeWedding, setActiveWedding] = useState<string | null>(null)

  const activeCard = weddingTypeCards.find(w => w.name === activeWedding)
  const activeContent = activeWedding
    ? (weddingData[activeWedding] ?? { intro: '', whatWeDo: [], florals: [], setup: [] })
    : { intro: '', whatWeDo: [], florals: [], setup: [] }

  return (
    <>
      <TypeCards
        heading="Weddings we specialise in"
        cards={weddingTypeCards}
        aspectRatio="aspect-[4/3]"
        bg="#0A0A0A"
        onCardClick={(name) => setActiveWedding(name)}
      />
      <ServiceDrawer
        open={!!activeWedding}
        onClose={() => setActiveWedding(null)}
        title={activeWedding ?? ''}
        image={activeCard?.image ?? ''}
        content={activeContent}
      />
    </>
  )
}
