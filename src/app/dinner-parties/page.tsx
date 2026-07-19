import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { graphJson, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Dinner Parties: A Training Library",
  description:
    "A complete training library on the Dinner Party model from FOUNT Church. Thirteen years of teaching, frameworks, and stories for pastors and leaders who want to build small groups that actually work.",
  alternates: { canonical: "https://joshkelsey.org/dinner-parties" },
  openGraph: {
    title: "Dinner Parties: A Training Library | Josh Kelsey",
    description:
      "A complete training library on the Dinner Party model from FOUNT Church.",
    url: "https://joshkelsey.org/dinner-parties",
  },
};

const schema = graphJson([
  webPageNode(
    "/dinner-parties",
    "Dinner Parties: A Training Library | Josh Kelsey",
    "A complete training library on the Dinner Party model from FOUNT Church. Thirteen years of teaching, frameworks, and stories for pastors and leaders who want to build small groups that actually work.",
  ),
]);

type Chapter = {
  href: string;
  number: string;
  title: string;
  description: string;
};

const partOne: Chapter[] = [
  {
    href: "/dinner-parties/vision",
    number: "01",
    title: "Vision: The Temple, the Home, and the Power of the Table",
    description:
      "Why Dinner Parties. The biblical blueprint from Acts 2, the power of communion and consistency, and how our church began with five people around a table.",
  },
];

const partTwo: Chapter[] = [
  {
    href: "/dinner-parties/the-night",
    number: "02",
    title: "The Night: Welcome, Party, Discussion, Prayer",
    description:
      "The rhythm of a Dinner Party. What actually happens from the moment people arrive to the final prayer, and why every part matters.",
  },
  {
    href: "/dinner-parties/leadership-roles",
    number: "03",
    title: "Leadership Roles: The 2x2 Blueprint of Jesus",
    description:
      "Why we don't lead with a solo leader and an assistant. The four roles that make a Dinner Party healthy: Host, Hospitality, Follow Up, Discussion.",
  },
  {
    href: "/dinner-parties/culture",
    number: "04",
    title: "Culture: Atmosphere, Food, and Relationships",
    description:
      "The culture that makes a Dinner Party feel like home. Welcome at every threshold, food that says you belong, and relationships that outlast any gathering.",
  },
];

const partThree: Chapter[] = [
  {
    href: "/dinner-parties/heart-of-a-leader",
    number: "05",
    title: "The Heart of a Leader",
    description:
      "The spiritual formation required to lead well. Personal relationship with Christ, shepherding the one, and the flow of authority from your own walk with Jesus.",
  },
  {
    href: "/dinner-parties/raising-leaders",
    number: "06",
    title: "Raising Leaders: The 8 Keys",
    description:
      "The kingdom doesn't recruit ready-made leaders. It disciples them. Eight principles for seeing, raising, and releasing leaders in your Dinner Party.",
  },
  {
    href: "/dinner-parties/multiplication",
    number: "07",
    title: "Multiplication: How to Grow Groups Well",
    description:
      "When to multiply, how to prepare the group, how to commission new leaders, and how to make multiplication a culture rather than a crisis.",
  },
  {
    href: "/dinner-parties/sustainability",
    number: "08",
    title: "Healthy Sustainability: Rhythm, Support, Training",
    description:
      "How we've kept Dinner Parties running every week for over ten years. ALLIN Team Night, the coach structure, monthly leader training, and the long game.",
  },
  {
    href: "/dinner-parties/invitation",
    number: "09",
    title: "Invitation: Personal Ownership and Marketing",
    description:
      "The church's reach is limited. When every member catches a vision for personal invitation, and when the church celebrates stories from the platform, a Dinner Party on every block becomes possible.",
  },
];

const references = [
  {
    href: "/dinner-parties/menu-ideas",
    title: "Menu Ideas",
    description:
      "Twenty themed meal plans we use in our groups, from Taco Night to Make Your Own Pizza to Breakfast for Dinner. Designed for group contribution and easy hosting.",
  },
  {
    href: "/dinner-parties/leaders-guide",
    title: "Leaders Guide (PDF)",
    description:
      "The full handout we give to every Dinner Party leader at FOUNT. Practical, printable, and free to download.",
  },
];

function ChapterRow({ chapter }: { chapter: Chapter }) {
  return (
    <Link
      className="wrow"
      href={chapter.href}
      data-h
      data-r
      style={{ gridTemplateColumns: "auto 1fr auto", alignItems: "start" }}
    >
      <div
        className="cover"
        style={{ backgroundImage: "url('/site-images/dinner-parties.jpg')" }}
        role="img"
        aria-label="A table set for a FOUNT Church Dinner Party"
      />
      <span className="wn" style={{ marginTop: "0.5rem" }}>
        {chapter.number}
      </span>
      <span style={{ display: "block" }}>
        <span className="wt" data-dec style={{ display: "block" }}>
          {chapter.title}
        </span>
        <span
          style={{
            display: "block",
            marginTop: "0.55rem",
            fontFamily: "var(--serif)",
            fontSize: "1.06rem",
            lineHeight: 1.5,
            color: "rgba(241,239,230,0.62)",
            maxWidth: "60ch",
          }}
        >
          {chapter.description}
        </span>
      </span>
      <span className="wa" style={{ marginTop: "0.5rem" }}>
        →
      </span>
    </Link>
  );
}

export default function DinnerPartiesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        {/* HERO */}
        <section className="wrap" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
          <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
            A Training Library
          </p>
          <h1
            className="font-disp"
            data-r
            style={{
              fontWeight: 900,
              fontSize: "clamp(3rem,11vw,10rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
            }}
          >
            The{" "}
            <span
              className="font-serif flare"
              style={{ fontStyle: "italic", fontWeight: 400, letterSpacing: 0 }}
            >
              Dinner Party.
            </span>
          </h1>
          <p
            className="font-serif"
            data-r
            style={{
              marginTop: "1.4rem",
              maxWidth: "52ch",
              fontSize: "1.28rem",
              color: "rgba(241,239,230,0.75)",
            }}
          >
            Before FOUNT was a church with a Sunday service, it was five people around a
            table in Brooklyn. Over thirteen years, in New York, Paris, and Berlin,
            we&rsquo;ve built one of the most consistent small group models we know. This
            is the full training we use to equip every leader at FOUNT.
          </p>
        </section>

        {/* ORIGIN */}
        <section
          style={{
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
            background: "var(--soft)",
          }}
        >
          <div className="wrap" style={{ padding: "clamp(4rem,9vw,7rem) 0" }}>
            <p className="mono" data-r style={{ marginBottom: "2.4rem" }}>
              Why This Library Exists
            </p>
            <article
              className="font-serif"
              data-r
              style={{
                maxWidth: "44rem",
                fontSize: "1.24rem",
                lineHeight: 1.72,
                color: "rgba(241,239,230,0.86)",
              }}
            >
              <p className="drop-cap">
                Jesus met people around tables. Before altars, before programs, before
                pulpits, there were meals. Long conversations. Honest questions. Bread
                broken and passed. The Dinner Party is our attempt to stay close to that.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                Every Wednesday night across New York City, FOUNT members gather in homes,
                on rooftops, in parks, at kitchen tables. Anyone is welcome. Conversation
                is real. The gospel is close. And over thirteen years we&rsquo;ve watched
                something happen at those tables that no other ministry format has matched.
                Strangers become friends, friends become family, and family becomes church.
              </p>
              <p style={{ marginTop: "1.5rem" }}>
                We&rsquo;ve now trained over seven hundred churches and leaders to
                implement this model across the world. What you&rsquo;ll find here is the
                same training we give our own leaders. Free, unlocked, and structured so
                you can work through it at your own pace.
              </p>
            </article>
          </div>
        </section>

        {/* PART ONE */}
        <section className="wrap" style={{ padding: "clamp(4rem,8vw,6rem) 0" }}>
          <div style={{ marginBottom: "clamp(1.6rem,3vw,2.4rem)" }}>
            <p className="mono flare" data-r style={{ marginBottom: "0.9rem" }}>
              Part One
            </p>
            <h2
              className="font-disp"
              data-r
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.4rem,6vw,5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                marginBottom: "1rem",
              }}
            >
              Vision
            </h2>
            <p
              className="font-serif"
              data-r
              style={{ fontSize: "1.15rem", color: "rgba(241,239,230,0.7)", maxWidth: "44rem" }}
            >
              Why the Dinner Party. The biblical and theological foundation.
            </p>
          </div>
          <div className="wlist">
            {partOne.map((c) => (
              <ChapterRow key={c.href} chapter={c} />
            ))}
          </div>
        </section>

        {/* PART TWO */}
        <section
          style={{
            background: "var(--soft)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="wrap" style={{ padding: "clamp(4rem,8vw,6rem) 0" }}>
            <div style={{ marginBottom: "clamp(1.6rem,3vw,2.4rem)" }}>
              <p className="mono flare" data-r style={{ marginBottom: "0.9rem" }}>
                Part Two
              </p>
              <h2
                className="font-disp"
                data-r
                style={{
                  fontWeight: 900,
                  fontSize: "clamp(2.4rem,6vw,5rem)",
                  lineHeight: 1.02,
                  letterSpacing: "-0.035em",
                  marginBottom: "1rem",
                }}
              >
                The Model
              </h2>
              <p
                className="font-serif"
                data-r
                style={{ fontSize: "1.15rem", color: "rgba(241,239,230,0.7)", maxWidth: "44rem" }}
              >
                How Dinner Parties actually work. The night, the leadership, the culture.
              </p>
            </div>
            <div className="wlist">
              {partTwo.map((c) => (
                <ChapterRow key={c.href} chapter={c} />
              ))}
            </div>
          </div>
        </section>

        {/* PART THREE */}
        <section className="wrap" style={{ padding: "clamp(4rem,8vw,6rem) 0" }}>
          <div style={{ marginBottom: "clamp(1.6rem,3vw,2.4rem)" }}>
            <p className="mono flare" data-r style={{ marginBottom: "0.9rem" }}>
              Part Three
            </p>
            <h2
              className="font-disp"
              data-r
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.4rem,6vw,5rem)",
                lineHeight: 1.02,
                letterSpacing: "-0.035em",
                marginBottom: "1rem",
              }}
            >
              Leadership
            </h2>
            <p
              className="font-serif"
              data-r
              style={{ fontSize: "1.15rem", color: "rgba(241,239,230,0.7)", maxWidth: "44rem" }}
            >
              How to lead, raise leaders, multiply, and sustain Dinner Parties for the
              long haul.
            </p>
          </div>
          <div className="wlist">
            {partThree.map((c) => (
              <ChapterRow key={c.href} chapter={c} />
            ))}
          </div>
        </section>

        {/* REFERENCE */}
        <section
          style={{
            background: "var(--soft)",
            borderTop: "1px solid var(--line)",
            borderBottom: "1px solid var(--line)",
          }}
        >
          <div className="wrap" style={{ padding: "clamp(4rem,8vw,6rem) 0" }}>
            <p className="mono" data-r style={{ marginBottom: "2.4rem" }}>
              Reference
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {references.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  data-h
                  data-r
                  className="group block border border-line bg-bg p-6 md:p-8 hover:border-flare transition-colors"
                >
                  <h3 className="font-disp text-2xl md:text-3xl text-fg mb-3 group-hover:text-flare transition-colors leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-serif text-dim leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="wrap" style={{ padding: "clamp(4.5rem,9vw,7rem) 0" }}>
          <div style={{ maxWidth: "42rem" }}>
            <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
              Start Here
            </p>
            <h2
              className="font-disp"
              data-r
              style={{
                fontWeight: 900,
                fontSize: "clamp(2.4rem,6vw,5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.035em",
                marginBottom: "1.4rem",
              }}
            >
              Begin with the vision.
            </h2>
            <p
              className="font-serif"
              data-r
              style={{
                fontSize: "1.2rem",
                color: "rgba(241,239,230,0.8)",
                marginBottom: "2rem",
                maxWidth: "44rem",
              }}
            >
              The most important chapter is the first one. Before any of the model or the
              leadership training, you need to catch the vision for why the table is
              where the church belongs.
            </p>
            <Link
              href="/dinner-parties/vision"
              data-h
              className="inline-flex items-center gap-2 px-6 py-3 bg-flare text-deep rounded-full text-sm font-sans hover:bg-fg transition-colors"
            >
              Start Chapter One <span aria-hidden>→</span>
            </Link>
          </div>
        </section>

        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
