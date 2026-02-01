import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "ORental - Rent Anything, Near You",
    template: "%s | ORental",
  },
  description:
    "ORental is a peer-to-peer rental marketplace that lets you rent out or borrow under-used items like cameras, gaming consoles, tools, and projectors from people nearby—securely and effortlessly.",
  keywords: [
    "peer to peer rental",
    "rent items locally",
    "camera rental",
    "tool rental",
    "gaming console rental",
    "projector rental",
    "gadgets rental",
    "local rental marketplace",
    "ORental",
  ],
  applicationName: "ORental",
  authors: [{ name: "ORental Team" }],
  creator: "ORental",
  publisher: "ORental",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  ),
  openGraph: {
    title: "ORental – Rent Anything, Near You",
    description:
      "A modern peer-to-peer rental platform to rent and lend under-used items in your neighborhood with trust and simplicity.",
    url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
    siteName: "ORental",
    images: [
      {
        url: "/assets/brand_logo.png",
        width: 1200,
        height: 630,
        alt: "ORental – Peer-to-Peer Rental Marketplace",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ORental – Rent Anything, Near You",
    description:
      "Rent or lend cameras, tools, gaming consoles, and more from people nearby. Simple. Secure. Local.",
    images: ["/assets/brand_logo.png"],
  },
  icons: {
    icon: "/assets/favicon/favicon.ico",
    apple: "/assets/favicon/apple-touch-icon.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
