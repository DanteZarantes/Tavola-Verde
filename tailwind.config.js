/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E4D4D',
        gold: '#D4AF37',
        cream: '#E8D5B7',
        neon: '#39FF14',
      },
    },
  },
  plugins: [],
}
