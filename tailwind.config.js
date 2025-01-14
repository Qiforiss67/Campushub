/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '1024': '1024px',
      },
      colors: {
        customBlue: '#027fff',
      },
    },
  },
  plugins: [],
}