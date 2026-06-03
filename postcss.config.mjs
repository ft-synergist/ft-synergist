/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // Handles compiling and native prefixing automatically
  }
};

export default config;
