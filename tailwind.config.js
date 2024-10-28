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
      maxWidth: {
        'sm':'425px',
        'md':'1300px',
        'lg':'1536px',
        'xl':'2560px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '425px',
          md: '1300px',
          lg: '1440px',
          xl: '2560px',
        },
      },
    },
    fontFamily: {
      sans: ['plus-jakarta', 'sans-serif'],
    },
  },
  plugins: [],
}
