import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://firenzeflora.vercel.app' // update when custom domain is connected

  const routes = [
    '', '/services', '/services/weddings', '/services/events',
    '/services/other-services', '/work', '/stories', '/about',
    '/contact', '/enquire', '/packages',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.startsWith('/services') ? 0.9 : 0.7,
  }))
}
