/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryRed: "#ff0000",
        secondary: "#ca3433",
        accent: "#ed2647",
      },
    },
  },
  plugins: [],
};
