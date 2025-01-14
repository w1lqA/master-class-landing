/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens : {
        'xs': '320px',
        'xs-container': '290px',
        'sm-container': '512px'
      },
      colors: {
        'accent': '#927AF4',
        'secondary': '#171A1F',
        'text': '#F3F4F6',
        'text2': '#9095A0',
      }
    },
  },
  plugins: [],
}

