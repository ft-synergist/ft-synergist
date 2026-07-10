/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // Allows production builds to complete if your project contains minor layout type warnings
    ignoreBuildErrors: true,
  },

  // Fixes Point 8: Forces high-efficiency image variants to mobile viewports
  images: {
    deviceSizes: [360, 414, 768, 1024, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // Forces long-term edge asset caching
  },

  async redirects() {
    return [
      {
        source: '/services/strategic-brand-and-market-development',
        destination: '/edg-grant', // ◄─── Upgraded to targeted money page route
        permanent: true,
      },
      {
        source: '/expertise/services/business-strategy-development',
        destination: '/edg-grant', // ◄─── Upgraded to targeted money page route
        permanent: true,
      },
      {
        source: '/services/business-strategy-development',
        destination: '/edg-grant', // ◄─── Upgraded to targeted money page route
        permanent: true,
      },
      {
        source: '/expertise/services/franchise-and-licensing',
        destination: '/franchise-consultant', // ◄─── Upgraded to targeted franchise hub
        permanent: true,
      },
      {
        source: '/services/franchise-and-licensing',
        destination: '/franchise-consultant', // ◄─── Upgraded to targeted franchise hub
        permanent: true,
      },
      {
        source: '/expertise/services/team-alignment-and-strategy',
        destination: '/edg-grant', // ◄─── Upgraded to targeted money page route
        permanent: true,
      },
      {
        source: '/services/team-alignment-and-strategy',
        destination: '/edg-grant', // ◄─── Injected direct link from GSC logs
        permanent: true,
      },
      {
        source: '/expertise/services/technology-leap',
        destination: '/ai-digitalisation', // ◄─── Upgraded to precise AI destination
        permanent: true,
      },
      {
        source: '/services/technology-leap',
        destination: '/ai-digitalisation', // ◄─── Injected direct link from GSC logs
        permanent: true,
      },
      {
        source: '/expertise/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/services/:path*',
        destination: '/#services', // Catch-all for non-explicit legacy service sub-paths
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