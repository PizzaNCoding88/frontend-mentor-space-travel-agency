import { Bellefair } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import { Barlow } from "next/font/google";
import "./globals.css";

const bellefair = Bellefair({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-bellefair",
});

const barlow_condensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-barlow-condensed",
});

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

export const metadata = {
  title: "Space Tourism",
  description: "Frontend Mentor Challenge - Space Tourism Multipage Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${bellefair.variable} ${barlow_condensed.variable} ${barlow.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
