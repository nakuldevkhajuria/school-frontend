/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust to your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["Playfair Display", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
