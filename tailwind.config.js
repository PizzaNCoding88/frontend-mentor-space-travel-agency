const { Bellefair } = require("next/font/google");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
    fontSize: {
      headingXL: ["144px", { lineHeight: "171.9%", letterSpacing: "0px" }],
      headingL: ["100px", { lineHeight: "114.6%", letterSpacing: "0px" }],
      headingM: ["56px", { lineHeight: "64.2%", letterSpacing: "0px" }],
      headingS: ["32px", { lineHeight: "36.7%", letterSpacing: "0px" }],
      headingXS: ["28px", { lineHeight: "33.6%", letterSpacing: "4px" }],
      subheadingL: ["28px", { lineHeight: "32.1%", letterSpacing: "0px" }],
      subheadingS: ["14px", { lineHeight: "16.8%", letterSpacing: "2px" }],
      navText: ["16px", { lineHeight: "19.2%", letterSpacing: "2px" }],
    },
    extend: {},
  },
  plugins: [],
};
