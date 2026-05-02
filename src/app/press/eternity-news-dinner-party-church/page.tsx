import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Josh Kelsey on the Dinner Party Church | Featured in Eternity News",
  description: "Josh Kelsey, founding pastor of FOUNT Church NYC, shares the Dinner Party church vision in Eternity News. Planted alongside Georgie Kelsey in Brooklyn, 2013.",
  alternates: {
    canonical: "https://joshkelsey.org/press/eternity-news-dinner-party-church",
  },
  openGraph: {
    title: "Josh Kelsey on the Dinner Party Church | Eternity News Feature",
    description: "Featured in Eternity News on the Dinner Party church model. Josh and Georgie Kelsey on building NYC ministry around tables, not stages.",
    url: "https://joshkelsey.org/press/eternity-news-dinner-party-church",
    type: "article",
  },
};


const schema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  url: "https://joshkelsey.org/press/eternity-news-dinner-party-church",
  name: "Josh Kelsey on the Dinner Party Church | Featured in Eternity News",
  description: "Josh Kelsey, founding pastor of FOUNT Church NYC, shares the Dinner Party church vision in Eternity News.",
  mainEntity: {
    "@type": "Person",
    name: "Josh Kelsey",
    alternateName: "Joshua Kelsey",
    jobTitle: "Founding Pastor",
    worksFor: {
      "@type": "Organization",
      name: "FOUNT Church",
      url: "https://fount.nyc",
    },
    spouse: {
      "@type": "Person",
      name: "Georgie Kelsey",
    },
    sameAs: [
      "https://www.linkedin.com/in/josh--kelsey/",
      "https://joshkelsey.substack.com",
      "https://fount.nyc",
      "https://www.instagram.com/jkelsey/",
    ],
  },
  about: {
    "@type": "NewsArticle",
    headline: "C3 Church knows the power of dinner parties",
    url: "https://eternitynews.com.au/australia/c3-church-knows-the-power-of-dinner-parties/",
    datePublished: "2017-04-12",
    publisher: {
      "@type": "NewsMediaOrganization",
      name: "Eternity News",
      url: "https://eternitynews.com.au",
    },
    about: [
      { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
      { "@type": "Person", name: "Georgie Kelsey" },
      { "@type": "Organization", name: "FOUNT Church", url: "https://fount.nyc" },
    ],
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://joshkelsey.org" },
      { "@type": "ListItem", position: 2, name: "Press", item: "https://joshkelsey.org/press" },
      { "@type": "ListItem", position: 3, name: "Eternity News", item: "https://joshkelsey.org/press/eternity-news-dinner-party-church" },
    ],
  },
};

export default function EternityNewsPressPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-12 max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
              Featured in Eternity News, April 2017
            </p>
            <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink mb-8">
              Josh Kelsey on the Dinner Party Church
            </h1>
            <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-prose">
              Featured in Eternity News (Australia) on the Dinner Party church model that shaped FOUNT Church NYC. Planted in Brooklyn, February 2013, by Josh and Georgie Kelsey.
            </p>
          </header>

          <div className="max-w-prose font-serif text-lg text-ink/85 leading-relaxed space-y-8">
            <p>
              Josh Kelsey, founding pastor of FOUNT Church NYC (formerly C3 NYC), was featured in Eternity News at C3 Presence speaking on what he called a Dinner Party church. Planted in Brooklyn in 2013 alongside his wife Georgie Kelsey, FOUNT was built around a simple conviction: real community happens around tables, not stages.
            </p>

            <h2 className="font-display text-3xl text-ink pt-4">The vision</h2>
            <p>
              In the Eternity News feature, Josh described the long view for FOUNT this way: that the vision will always be a Dinner Party church, with a Dinner Party on every block. Not big services. He believes that big services are easy when there is great community, and that Sundays look after themselves when there is momentum around the table.
            </p>

            <h2 className="font-display text-3xl text-ink pt-4">The model</h2>
            <p>
              Every Wednesday across New York City, FOUNT runs Dinner Parties in homes, parks, and rooftops. Each one is led by a team of four, so that no single absence stops the gathering. The article notes that this team approach builds weekly momentum and keeps the church durable.
            </p>

            <h2 className="font-display text-3xl text-ink pt-4">How FOUNT began</h2>
            <p>
              Josh and Georgie Kelsey moved from Sydney to Brooklyn in February 2013 with their six month old son. The first Dinner Party had five people. FOUNT (originally planted as C3 NYC and rebranded in 2023) now gathers across locations in Manhattan and Brooklyn, with Dinner Parties continuing as the foundational rhythm of the church.
            </p>

            <h2 className="font-display text-3xl text-ink pt-4">Read the full feature</h2>
            <p>
              <a href="https://eternitynews.com.au/australia/c3-church-knows-the-power-of-dinner-parties/" target="_blank" rel="noopener noreferrer" className="link-underline hover:text-accent">
                Read the original article on Eternity News
              </a>
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
