module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    screens: {
      'sm': '640px'
    },
    container: {
      padding: '1rem',
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      translate: ['active']
    },
  },
  plugins: [],
}
