/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      colors: {
        brand: '#3A9B3A',
        'brand-dark': '#2D7A2D',
        'brand-light': '#E8F5E8',
        'brand-bg': '#C8E6C8',
      },
    },
  },
  plugins: [],
}
