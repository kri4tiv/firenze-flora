import type { Metadata } from 'next'
import { Cormorant_Garamond, DM_Sans, Cormorant_SC } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
  display: 'swap',
})

const cormorantSC = Cormorant_SC({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-accent',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://firenzeflora.vercel.app'),
  title: {
    default: 'Firenze Flora | Wedding & Event Decor in Dubai',
    template: '%s | Firenze Flora',
  },
  description:
    'Premium floral and event decor studio in Dubai. Weddings, corporate events, private celebrations. Bespoke concepts, flawless execution.',
  keywords: ['wedding decor Dubai', 'event decor Dubai', 'floral design Dubai', 'wedding flowers Dubai'],
  openGraph: {
    siteName: 'Firenze Flora',
    locale: 'en_AE',
    type: 'website',
    images: [
      {
        url: '/images/hero/hero-poster.webp',
        width: 1200,
        height: 630,
        alt: 'Firenze Flora — Premium Floral & Event Decor Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/hero/hero-poster.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${cormorantSC.variable}`}
    >
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
