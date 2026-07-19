// Canonical entity graph. One Josh (#person), one Georgie (#georgie), one
// Fount (#fount), one WebSite (#website). Defined once here, referenced
// everywhere else by @id. Pages add their own WebPage (+ Article/Breadcrumb)
// that reference these nodes. Never redefine an entity node elsewhere.

export const SITE_URL = "https://joshkelsey.org";
export const PERSON_ID = `${SITE_URL}/#person`;
export const GEORGIE_ID = `${SITE_URL}/#georgie`;
export const FOUNT_ID = `${SITE_URL}/#fount`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

export const personNode = {
  "@type": "Person",
  "@id": PERSON_ID,
  name: "Josh Kelsey",
  alternateName: ["Joshua Kelsey", "Pastor Josh Kelsey"],
  url: SITE_URL,
  image: `${SITE_URL}/josh-kelsey.jpg`,
  jobTitle: "Lead Pastor",
  worksFor: { "@id": FOUNT_ID },
  spouse: { "@id": GEORGIE_ID },
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
  sameAs: [
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
};

export const georgieNode = {
  "@type": "Person",
  "@id": GEORGIE_ID,
  name: "Georgie Kelsey",
  alternateName: "Pastor Georgie Kelsey",
  url: "https://georgiekelsey.com",
  jobTitle: "Co-Pastor",
  worksFor: { "@id": FOUNT_ID },
  spouse: { "@id": PERSON_ID },
  sameAs: ["https://georgiekelsey.com"],
};

export const fountNode = {
  "@type": ["Organization", "Church"],
  "@id": FOUNT_ID,
  name: "FOUNT Church",
  alternateName: ["FOUNT Church NYC", "FOUNT NYC"],
  url: "https://fount.nyc",
  foundingDate: "2013",
  founder: [{ "@id": PERSON_ID }, { "@id": GEORGIE_ID }],
  location: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "New York",
      addressRegion: "NY",
      addressCountry: "US",
    },
  },
  sameAs: [
    "https://fount.nyc",
    "https://www.crunchbase.com/organization/fount-nyc",
  ],
};

export const websiteNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: "Josh Kelsey",
  description:
    "The personal site of Josh Kelsey, founding and lead pastor of FOUNT Church NYC.",
  publisher: { "@id": PERSON_ID },
  inLanguage: "en-US",
};

// The stable graph emitted on every page (in the root layout).
export const baseGraph = {
  "@context": "https://schema.org",
  "@graph": [personNode, georgieNode, fountNode, websiteNode],
};

export function webPageNode(path: string, name: string, description?: string) {
  const url = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    ...(description ? { description } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    about: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    inLanguage: "en-US",
  };
}

export function breadcrumbNode(items: { name: string; path: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.path === "/" ? SITE_URL : `${SITE_URL}${it.path}`,
    })),
  };
}

export function articleNode(a: {
  path: string;
  headline: string;
  description: string;
  image: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  articleSection?: string;
  keywords?: string[];
}) {
  const url = `${SITE_URL}${a.path}`;
  return {
    "@type": "Article",
    "@id": `${url}#article`,
    headline: a.headline,
    description: a.description,
    url,
    mainEntityOfPage: { "@id": `${url}#webpage` },
    author: { "@id": PERSON_ID },
    publisher: { "@id": PERSON_ID },
    image: a.image.startsWith("http") ? a.image : `${SITE_URL}${a.image}`,
    datePublished: a.datePublished,
    dateModified: a.dateModified || a.datePublished,
    ...(a.wordCount ? { wordCount: a.wordCount } : {}),
    ...(a.articleSection ? { articleSection: a.articleSection } : {}),
    ...(a.keywords ? { keywords: a.keywords.join(", ") } : {}),
    isPartOf: { "@id": WEBSITE_ID },
    inLanguage: "en-US",
  };
}

/** Serialize a set of page-level nodes into a JSON-LD graph string. */
export function graphJson(nodes: object[]) {
  return JSON.stringify({ "@context": "https://schema.org", "@graph": nodes });
}
