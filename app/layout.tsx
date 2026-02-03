import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit, Cormorant_SC } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const cormorantSC = Cormorant_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-cormorant-sc",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
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
      className={`${cormorant.variable} ${cormorantSC.variable} ${outfit.variable}`}
    >
      <body className="noise-overlay">{children}</body>
    </html>
  );
}
