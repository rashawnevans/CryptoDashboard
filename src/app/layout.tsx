import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  twitter: {
    card: "summary_large_image",
    title: "Crypto Dashboard",
    description:
      "Dashboard to display cryptocurrency price changes over the last 24-hours.",
    images: ["bittensor_logo.jpeg"],
  },
  icons: {
    icon: "bittensor_logo.jpeg",
    apple: "bittensor_logo.jpeg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  title: "Crypto Dashboard",
  description:
    "Dashboard to display cryptocurrency price changes over the last 24-hours.",
  openGraph: {
    siteName: "Crypto Dashboard",
    images: [{ url: "bittensor_logo.jpeg", width: 800, height: 600 }],
    title: "Crypto Dashboard",
    description:
      "Dashboard to display cryptocurrency price changes over the last 24-hours.",
  },
  keywords: ["crypto", "cryptocurrency", "bitcoin", "btc", "ethereum"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
