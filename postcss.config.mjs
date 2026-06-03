/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          minifySelectors: true,        // <-- CRITICAL: Eliminates structural selector redundancies
          discardComments: { removeAll: true }, // <-- CRITICAL: Strips commentary byte weight
          normalizeWhitespace: true    // <-- CRITICAL: Compresses spacing layout gaps
        }
      ]
    }
  }
};

export default config;
