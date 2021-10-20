module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {

        'services-banner': "url('https://image.freepik.com/free-photo/beautiful-smart-asian-doctor-patient-discussing-explaining-something-with-clipboard_7861-1219.jpg')",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
