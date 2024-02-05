/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'min':'320px','max':'640px'},
      },
      fontFamily: {
        'urbanist': "'Urbanist', sans-serif",
        'roboto': "'Roboto', sans-serif",
        'barlow': "Barlow', sans-serif"
      },
    },
  },
  plugins: [],
}
