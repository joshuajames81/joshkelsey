import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Press & Media",
  description: "Selected press, interviews, and features on Josh Kelsey, Georgie Kelsey, and FOUNT Church NYC.",
};

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
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-16 max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
              Press · Media · Features
            </p>
            <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink mb-8">
              Press &amp; Media
            </h1>
            <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-prose">
              Selected press, interviews, and features on Josh Kelsey, Georgie Kelsey, and FOUNT Church NYC — covering the Dinner Party model, community, loneliness, decentralized leadership, and church planting in New York, Paris, and Berlin.
            </p>
          </header>

          <div className="space-y-16">
            <PressSection 
              title="Editorial Features"
              items={editorialFeatures}
              featured={true}
            />
            
            <PressSection 
              title="Features & Interviews" 
              items={features}
            />
            
            <PressSection 
              title="Thought Leadership"
              items={thoughtLeadership}
              compact={true}
            />
            
            <PressSection 
              title="Profiles"
              items={profiles}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

function PressSection({ 
  title, 
  items, 
  featured = false,
  compact = false
}: { 
  title: string; 
  items: PressItem[]; 
  featured?: boolean;
  compact?: boolean;
}) {
  return (
    <section>
      <h2 className="font-display text-3xl text-ink mb-8">{title}</h2>
      <div className={compact ? "space-y-4" : "space-y-8"}>
        {items.map((item) => (
          <div key={item.url} className={
            featured 
              ? "border-l-2 border-accent pl-6" 
              : compact
              ? "border-b border-border/60 pb-4"
              : "border-b border-border/60 pb-8"
          }>
            <div className="flex items-center gap-3 mb-2">
              <span className="font-sans text-sm uppercase tracking-wide text-muted">{item.outlet}</span>
              {item.date && <span className="font-sans text-sm text-muted">• {item.date}</span>}
            </div>
            <h3 className={`font-display ${
              featured ? "text-2xl" : compact ? "text-lg" : "text-xl"
            } text-ink mb-2`}>
              <a href={item.url} className="link-underline hover:text-accent" target="_blank" rel="noopener">
                {item.title}
              </a>
            </h3>
            {item.description && !compact && (
              <p className="text-base text-ink/75 leading-relaxed mb-3">{item.description}</p>
            )}
            <a href={item.url} target="_blank" rel="noopener" 
               className="inline-block font-sans text-sm uppercase tracking-wide text-accent hover:text-ink">
              Read →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
