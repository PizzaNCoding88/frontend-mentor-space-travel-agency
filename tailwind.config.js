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
      headingXS: ["28px", { lineHeight: "133.6%", letterSpacing: "4px" }],
      mobileHeadingXL: [
        "80px",
        { lineHeight: "171.9%", letterSpacing: "auto" },
      ],
      mobileHeadingL: ["56px", { lineHeight: "120.9%", letterSpacing: "auto" }],
      mobileHeadingM: ["24px", { lineHeight: "120.9%", letterSpacing: "auto" }],
      mobileHeadingS: ["18px", { lineHeight: "171.9%", letterSpacing: "auto" }],
      mobileHeadingXS: [
        "16px",
        { lineHeight: "171.9%", letterSpacing: "auto" },
      ],
      mobileNavigation: [
        "14px",
        { lineHeight: "171.9%", letterSpacing: "15%" },
      ],
      subheadingL: ["28px", { lineHeight: "normal", letterSpacing: "0px" }],
      subheadingS: ["14px", { lineHeight: "normal", letterSpacing: "2px" }],
      navText: ["16px", { lineHeight: "19.2%", letterSpacing: "2px" }],
      body: ["15px", { lineHeight: "150%", letterSpacing: "2px" }],
      navigationBold: ["16px", { lineHeight: "180%", letterSpacing: "2px" }],
    },
    extend: {},
  },
  plugins: [],
};
