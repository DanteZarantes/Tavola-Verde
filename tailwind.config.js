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
        primary: {
          light: '#2d5a52',
          DEFAULT: '#1a3c34', // Deep Emerald
          dark: '#0f2922',
          darker: '#0a1a16',
        },
        gold: {
          light: '#f4d03f',
          DEFAULT: '#c5a059', // Muted Gold
          dark: '#997a3d',
          accent: '#efbf04', // Radiant Gold for highlights
        },
        cream: {
          light: '#faf9f6',
          DEFAULT: '#f2ece0',
          dark: '#dcd3be',
        },
        accent: '#9A3B3B',
      },
      fontFamily: {
        sans: ['Outfit', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      boxShadow: {
        'glow-gold': '0 0 20px rgba(212, 175, 55, 0.3)',
        'glow-primary': '0 0 30px rgba(30, 77, 77, 0.4)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
}
