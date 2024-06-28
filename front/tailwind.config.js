/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', // Adjust the paths as necessary
  ],
  theme: {
    extend: {},
      colors: {
        primary: '#304B8D', // sky blue
        secondary: '#FCCCC4', // soft pink
        tertiary: '#4D6FAE', // soft blue
        quartery: '#F0B4B6', // pink
        transparent: 'transparent',
        white: '#FFFFFF',
      },
  },
  plugins: [],
}
