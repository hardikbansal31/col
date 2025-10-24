/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        // This will be for our headings
        heading: ["Laila", "serif"],
        // This will be for our body text
        sans: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
