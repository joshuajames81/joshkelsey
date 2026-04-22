import type { Metadata } from "next";
import "./globals.css";

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
    description:
      "Founding and lead pastor of FOUNT Church in New York City.",
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
  verification: {
    google: "REPLACE_WITH_GOOGLE_VERIFICATION_CODE",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${SITE_URL}/#person`,
  name: "Josh Kelsey",
  alternateName: ["Joshua Kelsey", "Pastor Josh Kelsey"],
  url: SITE_URL,
  image: `${SITE_URL}/josh-kelsey.jpg`,
  jobTitle: "Lead Pastor",
  worksFor: {
    "@type": "Organization",
    "@id": "https://fount.nyc/#organization",
    name: "FOUNT Church",
    url: "https://fount.nyc",
    foundingDate: "2013",
    founders: [
      { "@type": "Person", name: "Josh Kelsey" },
      { "@type": "Person", name: "Georgie Kelsey" },
    ],
    location: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "New York",
        addressRegion: "NY",
        addressCountry: "US",
      },
    },
  },
  spouse: {
    "@type": "Person",
    name: "Georgie Kelsey",
    url: "https://georgiekelsey.com",
  },
  sameAs: [
    "https://fount.nyc",
    "https://georgiekelsey.com",
    "https://joshuakelsey.substack.com",
    "https://medium.com/@joshkelsey",
    "https://www.linkedin.com/in/josh--kelsey/",
    "https://x.com/J_kelsey",
    "https://www.instagram.com/jkelsey/",
    "https://www.facebook.com/pastorjoshkelsey/",
    "https://podcasts.apple.com/us/podcast/fount/id1070613870",
    "https://open.spotify.com/show/1ticMy9P1FbqpZH0SNdbk7",
    "https://www.crunchbase.com/organization/fount-nyc",
    "https://relevantmagazine.com/magazine/features/empire-state-of-change/",
    "https://finance.yahoo.com/news/fount-churchs-josh-georgie-kelsey-144500826.html",
    "https://bmmagazine.co.uk/business/fount-church-on-building-community-in-a-fast-moving-city/",
    "https://ceoworld.biz/2026/01/28/fount-church-building-a-people-first-movement-in-nyc/",
  ],
  description:
    "Josh Kelsey is the founding and lead pastor of FOUNT Church in New York City, which he planted in 2013 with his wife and co-pastor Georgie Kelsey.",
  knowsAbout: [
    "Biblical theology",
    "Biblical preaching",
    "Church planting",
    "New York City ministry",
    "Koine Greek",
    "Biblical Hebrew",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Josh Kelsey",
  description: "The personal site of Josh Kelsey, founding and lead pastor of FOUNT Church NYC.",
  publisher: { "@id": `${SITE_URL}/#person` },
  inLanguage: "en-US",
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
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;0,8..60,500;0,8..60,600;1,8..60,400&display=swap"
          rel="stylesheet"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className="bg-paper text-ink font-serif antialiased">
        {children}
      </body>
    </html>
  );
}
