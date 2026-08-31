import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { brand, token } from "@/config/brand";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(brand.url),
  title: {
    default: `${brand.name} — ${token.ticker}`,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    title: `${brand.name} — ${token.ticker}`,
    description: brand.description,
    url: brand.url,
    siteName: brand.name,
    type: "website",
    images: [
      {
        url: "/cover.webp",
        width: 1500,
        height: 500,
        alt: `${brand.name} — ${token.ticker}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${token.ticker}`,
    description: brand.description,
    site: "@anasol_fun",
    images: ["/cover.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}
