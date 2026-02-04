import type { Metadata } from "next";
import localFont from "next/font/local";
import { Blinker } from "next/font/google";
import "./globals.css";

// Custom fonts - titles/headlines
const perandory = localFont({
  src: "../public/fonts/Perandory-Condensed.otf",
  variable: "--font-perandory",
  display: "swap",
});

// Custom fonts - subtitles/accents
const amoresa = localFont({
  src: "../public/fonts/amoresa-regular.otf",
  variable: "--font-amoresa",
  display: "swap",
});

// Google font - body/paragraph text
const blinker = Blinker({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-blinker",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Handled Studio | Your Paper + Website Concierge",
  description:
    "Premium wedding paper and website concierge services. Custom invitations, save the dates, and bespoke wedding websites. Every detail, handled.",
  keywords: [
    "wedding invitations",
    "wedding website",
    "save the dates",
    "wedding concierge",
    "luxury wedding stationery",
    "custom wedding website",
  ],
  openGraph: {
    title: "Handled Studio | Your Paper + Website Concierge",
    description:
      "Premium wedding paper and website concierge services. Every detail, handled.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${perandory.variable} ${amoresa.variable} ${blinker.variable}`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
