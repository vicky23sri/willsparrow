/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}" 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FC7632',
        secondary: '#3f444b',
      },
      fontFamily: {
        'plus-jakarta': ['"Plus Jakarta Sans"', 'sans-serif'], 
      },
      height: {
        '60': '240px',
      },
      width: {
        '125': '500px',
      },
    },
    fontFamily: {
      sans: ['plus-jakarta', 'sans-serif'],
    },
  },
  plugins: [],
}
