/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // Fixes Point 8: Limits target asset dimensions and serves hyper-compressed AVIF images
  images: {
    deviceSizes: [360, 414, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },

  // Fixes Point 1: Direct modern output mapping for the compiler
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },

  async redirects() {
    return [
      {
        source: '/services/strategic-brand-and-market-development',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/expertise/services/business-strategy-development',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/services/business-strategy-development',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/expertise/services/franchise-and-licensing',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/services/franchise-and-licensing',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/expertise/services/team-alignment-and-strategy',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/expertise/services/technology-leap',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/expertise/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/#services',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
    ];
  },

  async headers() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'beyondborders.ftsynergist.com',
          },
        ],
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, noarchive',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
