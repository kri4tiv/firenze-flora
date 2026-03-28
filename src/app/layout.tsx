import type { Metadata } from 'next'
import { Playfair_Display, Inter } from 'next/font/google'
import '../styles/globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/ui/WhatsAppButton'
import CustomCursor from '@/components/ui/CustomCursor'
import PageLoader from '@/components/ui/PageLoader'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
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
        url: '/images/heroes/hero-weddings.webp',
        width: 1200,
        height: 630,
        alt: 'Firenze Flora Premium Floral and Event Decor Dubai',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/images/heroes/hero-weddings.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.ico',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A0A0A',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
    >
      <body className="flex flex-col min-h-screen">
        <PageLoader />
        <CustomCursor />
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
