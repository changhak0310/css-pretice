/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'day44-rotate': {
          'from': {
            transform: 'rotate(0deg) translate3d(0, 0, 0)'
          },
          'to': {
            transform: 'rotate(360deg) translate3d(0, 0, 0)'
          }
        }
      }
    },
  },
  plugins: [],
}

