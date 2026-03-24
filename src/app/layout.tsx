import type { Metadata } from 'next'
import '../styles/globals.css'
import Nav from '@/components/layout/Nav'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
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
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
