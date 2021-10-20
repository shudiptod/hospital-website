module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {

        'services-banner': "url('https://image.freepik.com/free-vector/wavy-background-with-copy-space_52683-65230.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
