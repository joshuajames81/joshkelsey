import type { Metadata } from "next";
import "./globals.css";
import Cursor from "@/components/Cursor";
import { baseGraph } from "@/lib/schema";

const SITE_URL = "https://joshkelsey.org";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Josh Kelsey | Pastor, Teacher & Founder of FOUNT Church NYC",
    template: "%s | Josh Kelsey",
  },
  description:
    "Josh Kelsey is the founding and lead pastor of FOUNT Church in New York City. Teaching, writing, and sermons on the gospel, the city, and a life shaped by Jesus, the true FOUNT.",
  keywords: [
    "Josh Kelsey",
    "Pastor Josh Kelsey",
    "Joshua Kelsey",
    "FOUNT Church",
    "FOUNT Church NYC",
    "FOUNT NYC",
    "Josh Kelsey sermon",
    "Josh Kelsey preaching",
    "New York City pastor",
    "Brooklyn church",
    "Georgie Kelsey",
  ],
  authors: [{ name: "Josh Kelsey", url: SITE_URL }],
  creator: "Josh Kelsey",
  publisher: "Josh Kelsey",
  alternates: { canonical: SITE_URL },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    title: "Josh Kelsey | Pastor, Teacher & Founder of FOUNT Church NYC",
    description:
      "Founding and lead pastor of FOUNT Church in New York City. Teaching, writing, and sermons on the gospel, the city, and a life shaped by Jesus.",
    siteName: "Josh Kelsey",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Josh Kelsey, Pastor, FOUNT Church NYC",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Josh Kelsey | Pastor, FOUNT Church NYC",
    description: "Founding and lead pastor of FOUNT Church in New York City.",
    images: ["/og-image.jpg"],
    creator: "@J_kelsey",
    site: "@J_kelsey",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;600;800;900&family=Instrument+Serif:ital@0;1&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(baseGraph) }}
        />
      </head>
      <body className="bg-bg text-fg antialiased">
        <Cursor />
        {children}
      </body>
    </html>
  );
}
