/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          DEFAULT: '#E85A4F',
          dark: '#D14940',
          light: '#FF7B6F',
        },
        navy: '#1A2744',
        paper: '#F5F3EF',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        sans: ['Outfit', '-apple-system', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
