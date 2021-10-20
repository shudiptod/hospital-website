module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {

        'services-banner': "url('https://image.freepik.com/free-photo/hall-connection-metal-physician-bright_1134-1080.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
