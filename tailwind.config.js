module.exports = {
  content: ['./src/**/*.{html,js,astro}'],
  theme: {
    extend: {}
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: ['light']
  }
};
