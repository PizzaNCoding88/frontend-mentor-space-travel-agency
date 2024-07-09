/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkNavy: "#0B0D17",
        lightBlue: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair: ["var(--font-bellefair)"],
        barlowCondensed: ["var(--font-barlow-condensed)"],
        barlow: ["var(--font-barlow)"],
      },
    },
  },
  plugins: [],
};
