/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },

  // 1. IMAGE OPTIMIZATION PARAMETERS: Limits resource rendering width variations to precise smartphone breakpoints
  images: {
    deviceSizes: [360, 414, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'], // <-- FIXED: Corrected MIME type string
  },

  // 2. COMPILER BUNDLE TREESHAKING: Prevents massive icon and layout module overhead from flooding the Main-Thread
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
      // About Us Redirect
      {
        source: '/expertise/about-us',
        destination: '/about',
        permanent: true,
      },
      // Catch-all for other /services/ links
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
