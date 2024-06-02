/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#4C5FD5',
        'own-vi': '#dadbf1',
      },
    },
  },
  plugins: [],
}
