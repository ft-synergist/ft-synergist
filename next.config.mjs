/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  async redirects() {
    return [
      // Legacy Service Page Redirects
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
        source: '/expertise/services/franchise-and-licensing',
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
