/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#FFF2EB",
          100: "#FFE6D6",
          200: "#FFD0B3",
          300: "#FFB78A",
          400: "#FFA166",
          500: "#FF883F",
          600: "#FF6200",
          700: "#BD4800",
          800: "#803100",
          900: "#3D1700"
        },
      }
    },
  },
  plugins: [],
}
