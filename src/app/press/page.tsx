import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { graphJson, webPageNode } from "@/lib/schema";

export const metadata = {
  title: "Press & Media",
  description: "Selected press, interviews, and features on Josh Kelsey, Georgie Kelsey, and FOUNT Church NYC.",
  alternates: { canonical: "https://joshkelsey.org/press" },
};

const schema = graphJson([
  webPageNode(
    "/press",
    "Press & Media | Josh Kelsey",
    "Selected press, interviews, and features on Josh Kelsey, Georgie Kelsey, and FOUNT Church NYC."
  ),
]);

type PressItem = {
  outlet: string;
  title: string;
  date?: string;
  description?: string;
  url: string;
};

const editorialFeatures: PressItem[] = [
  {
    outlet: "RELEVANT Magazine",
    title: "Empire State of Change",
    date: "2018",
    description: "A cover feature on New York City's church planting movement. Josh Kelsey is quoted alongside Tim Keller on the city, the gospel, and the work of planting churches in NYC.",
    url: "https://relevantmagazine.com/magazine/features/empire-state-of-change/"
  }
];

const features: PressItem[] = [
  {
    outlet: "Yahoo Finance",
    title: "FOUNT Church's Josh & Georgie Kelsey Raise Awareness on Loneliness and the Power of Real Connection",
    date: "February 2026",
    description: "On loneliness, the Dinner Party model, and why real community is the antidote to a disconnected city.",
    url: "https://finance.yahoo.com/news/fount-churchs-josh-georgie-kelsey-144500826.html"
  },
  {
    outlet: "Business Matters Magazine",
    title: "FOUNT Church on Building Community in a Fast-Moving City",
    description: "How FOUNT's people-first model has shaped a decade of ministry across New York, Paris, and Berlin.",
    url: "https://bmmagazine.co.uk/business/fount-church-on-building-community-in-a-fast-moving-city/"
  },
  {
    outlet: "CEOWorld Magazine",
    title: "FOUNT Church: Building a People-First Movement in NYC",
    date: "January 2026",
    description: "On culture, scaling without losing the heart of the work, and leadership for the long haul.",
    url: "https://ceoworld.biz/2026/01/28/fount-church-building-a-people-first-movement-in-nyc/"
  },
  {
    outlet: "Eternity News",
    title: "C3 Church Knows the Power of Dinner Parties",
    date: "April 2017",
    description: "Featured at C3 Presence on the Dinner Party church model. Josh and Georgie Kelsey on building NYC ministry around tables instead of stages.",
    url: "/press/eternity-news-dinner-party-church"
  }
];

const thoughtLeadership: PressItem[] = [
  {
    outlet: "Entrepreneurship Life",
    title: "How Community-First Leadership Scales Without Losing Culture",
    url: "https://www.entrepreneurshiplife.com/how-community-first-leadership-scales-without-losing-culture/"
  },
  {
    outlet: "Entrepreneurs Break",
    title: "Dinner Tables Still Matter in a Screen-First Economy",
    url: "https://entrepreneursbreak.com/dinner-tables-still-matter-in-a-screen-first-economy.html"
  },
  {
    outlet: "Startup Opinions",
    title: "People Over Platforms: Building Influence Without Chasing Visibility",
    url: "https://www.startupopinions.com/people-over-platforms-building-influence-without-chasing-visibility/"
  },
  {
    outlet: "Startuprise",
    title: "Decentralised Leadership Models and the Future of Organisations",
    url: "https://startuprise.co.uk/decentralised-leadership-models-and-the-future-of-organisations/"
  }
];

const profiles: PressItem[] = [
  {
    outlet: "Crunchbase",
    title: "FOUNT NYC — Organization Profile",
    description: "The Crunchbase profile for FOUNT NYC, including founding information and organization details.",
    url: "https://www.crunchbase.com/organization/fount-nyc"
  }
];

export default function PressPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        <section className="wrap" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
          <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
            Press · Media · Features
          </p>
          <h1
            className="font-disp"
            data-r
            style={{ fontWeight: 900, fontSize: "clamp(3rem,11vw,10rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            Press &amp; Media
          </h1>
          <p
            className="font-serif"
            data-r
            style={{ marginTop: "1.4rem", maxWidth: "60ch", fontSize: "1.28rem", color: "rgba(241,239,230,0.75)" }}
          >
            Selected press, interviews, and features on Josh Kelsey, Georgie Kelsey, and FOUNT Church NYC — covering the Dinner Party model, community, loneliness, decentralized leadership, and church planting in New York, Paris, and Berlin.
          </p>
        </section>

        <section className="writing" style={{ borderTop: "none", paddingTop: 0 }}>
          <div className="wrap">
            <PressSection title="Editorial Features" items={editorialFeatures} />
            <PressSection title="Features & Interviews" items={features} />
            <PressSection title="Thought Leadership" items={thoughtLeadership} />
            <PressSection title="Profiles" items={profiles} />
          </div>
        </section>

        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

function PressSection({ title, items }: { title: string; items: PressItem[] }) {
  return (
    <div style={{ marginBottom: "clamp(3rem,6vw,5rem)" }}>
      <h2
        className="font-disp"
        data-r
        style={{
          fontWeight: 900,
          fontSize: "clamp(1.4rem,3vw,2rem)",
          letterSpacing: "-0.025em",
          marginBottom: "0.4rem",
        }}
      >
        {title}
      </h2>
      <div className="wlist">
        {items.map((item, i) => {
          const external = item.url.startsWith("http");
          return (
            <a
              key={item.url}
              className="wrow"
              href={item.url}
              data-h
              data-r
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              <span className="wn">{String(i + 1).padStart(2, "0")}</span>
              <span className="wt">{item.title}</span>
              <span className="wm">{item.date ? `${item.outlet} · ${item.date}` : item.outlet}</span>
              <span className="wa">→</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
