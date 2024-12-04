/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./*.{html,js}",
    "./services/**/*.{html,js}",  // Added for services folder
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
      spacing: {
        'custom-padding': '1rem', 
        'custom-vertical-padding': '4rem',
        'custom-vertical-padding-1': '2rem'
      },
    },
    fontFamily: {
      sans: ['plus-jakarta', 'sans-serif'],
    },
  },
  plugins: [],
}
