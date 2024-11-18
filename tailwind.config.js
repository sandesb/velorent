/** @type {import('tailwindcss').Config} */
const { blackA, violet, mauve } = require("@radix-ui/colors");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				...blackA,
				...violet,
				...mauve,
			},
    },
  },
  plugins: [],
}