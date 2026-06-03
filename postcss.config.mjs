/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- FIX: Targets the updated compilation adapter string
    autoprefixer: {},
    cssnano: {
      preset: [
        'default',
        {
          minifySelectors: true,        
          discardComments: { removeAll: true }, 
          normalizeWhitespace: true    
        }
      ]
    }
  }
};

export default config;
