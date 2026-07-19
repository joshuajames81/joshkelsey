import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { graphJson, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Church Planting Training Library",
  description:
    "Thirteen years, three cities, one conviction. Resources for pastors and leaders called to plant churches in the places everyone else has written off.",
  alternates: { canonical: "https://joshkelsey.org/church-planting" },
};

const schema = graphJson([
  webPageNode(
    "/church-planting",
    "Church Planting Training Library | Josh Kelsey",
    "Thirteen years, three cities, one conviction. Resources for pastors and leaders called to plant churches in the places everyone else has written off.",
  ),
]);

type Chapter = {
  number: string;
  href: string;
  title: string;
  description: string;
};

const partOne: Chapter[] = [
  {
    number: "01",
    href: "/church-planting/beginning",
    title: "The Beginning",
    description: "Why plant a church? The theological foundations and personal calling that must come before strategy, location, or team.",
  },
  {
    number: "02",
    href: "/church-planting/person",
    title: "The Person",
    description: "Who should plant a church? The character, gifting, and preparation required for the unique challenges of church planting.",
  },
  {
    number: "03",
    href: "/church-planting/personal-health",
    title: "Personal Health",
    description: "How to maintain spiritual, emotional, and relational health through the intense seasons of church planting.",
  },
];

const partTwo: Chapter[] = [
  {
    number: "04",
    href: "/church-planting/strategy",
    title: "Strategy",
    description: "Developing a sustainable approach to church planting that fits your context, calling, and community.",
  },
  {
    number: "05",
    href: "/church-planting/culture",
    title: "Culture",
    description: "Creating and sustaining the cultural DNA that will define your church for generations to come.",
  },
  {
    number: "06",
    href: "/church-planting/reach",
    title: "Reach",
    description: "Building authentic relationships and gospel conversations in communities that don't know they need church.",
  },
];

const partThree: Chapter[] = [
  {
    number: "07",
    href: "/church-planting/people",
    title: "People",
    description: "Finding, developing, and leading the core team that will plant the church alongside you.",
  },
  {
    number: "08",
    href: "/church-planting/practical",
    title: "Practical",
    description: "The nuts and bolts of church planting: finances, legal structure, systems, and operational realities.",
  },
  {
    number: "09",
    href: "/church-planting/generations",
    title: "Generations",
    description: "Building a church that will outlast its founder and continue to plant churches for generations.",
  },
  {
    number: "10",
    href: "/church-planting/trials",
    title: "Trials",
    description: "Walking through the inevitable difficulties, conflicts, and seasons of discouragement in church planting.",
  },
];

const cover = "/site-images/church-planting.jpg";

export default function ChurchPlantingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        {/* HERO */}
        <section className="wrap" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
          <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
            Training &amp; Resources
          </p>
          <h1
            className="font-disp"
            data-r
            style={{ fontWeight: 900, fontSize: "clamp(3rem,11vw,10rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            Church Planting
          </h1>
          <p
            className="font-serif"
            data-r
            style={{ marginTop: "1.4rem", maxWidth: "52ch", fontSize: "1.28rem", color: "rgba(241,239,230,0.75)" }}
          >
            Thirteen years, three cities, one conviction. Resources for the pastors and
            leaders called to plant churches in the places everyone else has written off.
          </p>
        </section>

        {/* ORIGIN */}
        <section className="writing" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(3.5rem,7vw,6rem)", paddingBottom: "clamp(3.5rem,7vw,6rem)" }}>
          <div className="wrap">
            <p className="mono flare" style={{ marginBottom: "1.2rem" }}>
              The Heart of It
            </p>
            <div
              className="font-serif"
              style={{ maxWidth: "60ch", fontSize: "1.32rem", lineHeight: 1.72, color: "rgba(241,239,230,0.86)", display: "grid", gap: "1.4rem" }}
            >
              <p>
                My wife Georgie and I planted FOUNT Church in Brooklyn in 2013 with five
                people and a Dinner Party. Since then we&rsquo;ve watched God build what
                we could not have imagined. Five locations across the boroughs of
                New York before COVID, a rebuild after, and church plants in Paris and
                Berlin that are now self sustaining and thriving in their own way.
              </p>
              <p>
                Three of the most challenging cities in the Western world. Three places
                everyone said the church couldn&rsquo;t take root. And in each one, God
                has done what only God can do.
              </p>
              <p>
                The lessons from those thirteen years (the theology, the practices,
                the failures, the things we would do again, the things we would never)
                are what I want to share here. If you&rsquo;re called to plant a church,
                or to help plant one, or to pastor one through its hardest seasons, my
                prayer is that what we&rsquo;ve learned would serve you.
              </p>
            </div>
          </div>
        </section>

        {/* PART ONE */}
        <ChapterGroup
          part="Part One"
          heading="Foundation"
          blurb="The calling, character, and preparation required before you plant."
          chapters={partOne}
        />

        {/* PART TWO */}
        <ChapterGroup
          part="Part Two"
          heading="The Work"
          blurb="Strategy, culture, and reaching the communities God has called you to serve."
          chapters={partTwo}
        />

        {/* PART THREE */}
        <ChapterGroup
          part="Part Three"
          heading="Sustainability"
          blurb="Building teams, systems, and churches that will thrive for generations."
          chapters={partThree}
        />

        {/* CTA */}
        <section className="writing" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(4rem,8vw,7rem)", paddingBottom: "clamp(4rem,8vw,7rem)" }}>
          <div className="wrap">
            <div
              className="bg-soft border-line"
              style={{ border: "1px solid var(--line)", padding: "clamp(2rem,5vw,4rem)", display: "grid", gap: "2rem" }}
            >
              <div>
                <p className="mono flare" style={{ marginBottom: "1rem" }}>
                  Start Here
                </p>
                <h2
                  className="font-disp text-fg"
                  style={{ fontWeight: 900, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.04em" }}
                >
                  Begin at the{" "}
                  <em className="text-flare" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: 0 }}>
                    beginning.
                  </em>
                </h2>
              </div>
              <div
                className="font-serif"
                style={{ maxWidth: "56ch", fontSize: "1.2rem", lineHeight: 1.7, color: "rgba(241,239,230,0.82)", display: "grid", gap: "1.25rem" }}
              >
                <p>
                  The most important chapter is the first one. Before strategy, before team,
                  before location, you need to be clear on the why. Why plant a church?
                  Why this calling? Why you?
                </p>
                <p>
                  Start there, and work through each chapter in order. This is thirteen years
                  of learning, failure, and God&rsquo;s faithfulness distilled into the essentials.
                </p>
              </div>
              <div>
                <Link
                  href="/church-planting/beginning"
                  className="bg-flare text-deep rounded-full hover:bg-fg"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.85rem 1.6rem",
                    fontFamily: "var(--mono)",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    fontWeight: 700,
                    transition: "background 0.3s var(--e1)",
                  }}
                >
                  Begin Chapter One <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <Subscribe />
      </main>
      <Footer />
    </>
  );
}

function ChapterGroup({
  part,
  heading,
  blurb,
  chapters,
}: {
  part: string;
  heading: string;
  blurb: string;
  chapters: Chapter[];
}) {
  return (
    <section className="writing" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
      <div className="wrap">
        <div style={{ marginBottom: "clamp(1.4rem,3vw,2.4rem)" }}>
          <p className="mono flare" style={{ marginBottom: "0.8rem" }}>
            {part}
          </p>
          <h2
            className="font-disp text-fg"
            style={{ fontWeight: 900, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "0.8rem" }}
          >
            {heading}
          </h2>
          <p className="font-serif" style={{ maxWidth: "52ch", fontSize: "1.15rem", color: "rgba(241,239,230,0.7)" }}>
            {blurb}
          </p>
        </div>
        <div className="wlist">
          {chapters.map((c) => (
            <Link key={c.href} className="wrow" href={c.href} data-h data-r>
              <div
                className="cover"
                style={{ backgroundImage: `url('${cover}')` }}
                role="img"
                aria-label="Church planting in the city"
              />
              <span className="wn">{c.number}</span>
              <span className="wt" data-dec>{c.title}</span>
              <span className="wm">{c.description}</span>
              <span className="wa">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
