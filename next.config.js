/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'picsum.photos' },
    ],
  },
  async redirects() {
    return [
      { source: '/services/weddings', destination: '/weddings', permanent: true },
      { source: '/services/events',   destination: '/events',   permanent: true },
      { source: '/services',          destination: '/',         permanent: true },
      { source: '/blog',              destination: '/',         permanent: true },
      { source: '/blog/:slug',        destination: '/',         permanent: true },
      { source: '/stories',           destination: '/',         permanent: true },
      { source: '/stories/:slug',     destination: '/',         permanent: true },
      { source: '/packages',          destination: '/enquire',  permanent: true },
      { source: '/about-us',          destination: '/about',    permanent: true },
      { source: '/contact-us',        destination: '/contact',  permanent: true },
      { source: '/work',              destination: '/',         permanent: true },
      { source: '/gallery',           destination: '/',         permanent: true },
    ];
  },
};

module.exports = nextConfig;
