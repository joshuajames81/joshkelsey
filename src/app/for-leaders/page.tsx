import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { graphJson, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Leadership Training Library",
  description:
    "A three-week intensive on building real community, effective teams, and raising leaders. Kingdom principles that work across all industries and contexts.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders" },
};

const schema = graphJson([
  webPageNode(
    "/for-leaders",
    "Leadership Training Library | Josh Kelsey",
    "A three-week intensive on building real community, effective teams, and raising leaders. Kingdom principles that work across all industries and contexts.",
  ),
]);

type Chapter = {
  number: string;
  href: string;
  title: string;
  description: string;
};

const weeks: Chapter[] = [
  {
    number: "01",
    href: "/for-leaders/week-1",
    title: "Building Real Community",
    description: "The 5 stages of community development. Moving from pseudo community through chaos and emptying to build something real and lasting.",
  },
  {
    number: "02",
    href: "/for-leaders/week-2",
    title: "Effective Teams",
    description: "The six fundamentals that make teams work. From clarity of vision to open communication, the conditions that sustain what God builds.",
  },
  {
    number: "03",
    href: "/for-leaders/week-3",
    title: "Raising Leaders",
    description: "Teaching your team to fish. The four stages of development and how to multiply leaders who multiply leaders.",
  },
];

const cover = "/site-images/for-leaders.jpg";

export default function ForLeadersPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        {/* HERO */}
        <section className="wrap" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
          <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
            Leadership Training
          </p>
          <h1
            className="font-disp"
            data-r
            style={{ fontWeight: 900, fontSize: "clamp(3rem,11vw,10rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            For{" "}
            <em className="text-flare" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: 0 }}>
              Leaders.
            </em>
          </h1>
          <p
            className="font-serif"
            data-r
            style={{ marginTop: "1.4rem", maxWidth: "52ch", fontSize: "1.28rem", color: "rgba(241,239,230,0.75)" }}
          >
            A three week intensive on building real community, effective teams, and raising leaders.
            Kingdom principles that work across all industries and contexts.
          </p>
        </section>

        {/* ORIGIN */}
        <section className="writing" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(3.5rem,7vw,6rem)", paddingBottom: "clamp(3.5rem,7vw,6rem)" }}>
          <div className="wrap">
            <h2
              className="font-disp text-fg"
              style={{ fontWeight: 900, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "clamp(1.4rem,3vw,2.2rem)" }}
            >
              Why This Training Exists
            </h2>
            <div
              className="font-serif"
              style={{ maxWidth: "52ch", fontSize: "1.28rem", lineHeight: 1.72, color: "rgba(241,239,230,0.82)", display: "grid", gap: "1.4rem" }}
            >
              <p>
                Thirteen years of building teams in one of the world&rsquo;s most challenging cities has taught us that
                great leadership is not about being indispensable. It&rsquo;s about making everyone around you better.
              </p>
              <p>
                This training emerged from real experience. Building FOUNT Church across New York, Paris, and Berlin.
                Leading through crisis, growth, and everything in between. Training over seven hundred leaders who
                are now building their own teams around the world.
              </p>
              <p>
                What you&rsquo;ll find here are kingdom principles that transcend church context. These foundations work
                in boardrooms and nonprofits, startups and established organizations, anywhere people need to work
                together toward something that matters.
              </p>
              <p>
                Use this material freely. Adapt it to your context. Build your teams with it. The principles
                belong to the kingdom, not to us.
              </p>
            </div>
          </div>
        </section>

        {/* COURSE WEEKS */}
        <section className="writing" style={{ borderTop: "1px solid var(--line)", paddingTop: "clamp(3rem,6vw,5rem)", paddingBottom: "clamp(3rem,6vw,5rem)" }}>
          <div className="wrap">
            <div style={{ marginBottom: "clamp(1.4rem,3vw,2.4rem)" }}>
              <p className="mono flare" style={{ marginBottom: "0.8rem" }}>
                Three Week Course
              </p>
              <h2
                className="font-disp text-fg"
                style={{ fontWeight: 900, fontSize: "clamp(2.4rem,6vw,5rem)", lineHeight: 1.02, letterSpacing: "-0.04em", marginBottom: "0.8rem" }}
              >
                The Journey
              </h2>
              <p className="font-serif" style={{ maxWidth: "52ch", fontSize: "1.15rem", color: "rgba(241,239,230,0.7)" }}>
                From performance to presence. From pseudo community to real community. From managing people to raising leaders.
              </p>
            </div>
            <div className="wlist">
              {weeks.map((week) => (
                <Link key={week.href} className="wrow" href={week.href} data-h data-r>
                  <div
                    className="cover"
                    style={{ backgroundImage: `url('${cover}')` }}
                    role="img"
                    aria-label="Leaders building community together"
                  />
                  <span className="wn">{week.number}</span>
                  <span className="wt" data-dec>{week.title}</span>
                  <span className="wm">{week.description}</span>
                  <span className="wa">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

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
                  Begin with{" "}
                  <em className="text-flare" style={{ fontFamily: "var(--serif)", fontStyle: "italic", fontWeight: 400, letterSpacing: 0 }}>
                    community.
                  </em>
                </h2>
              </div>
              <div
                className="font-serif"
                style={{ maxWidth: "56ch", fontSize: "1.2rem", lineHeight: 1.7, color: "rgba(241,239,230,0.82)", display: "grid", gap: "1.25rem" }}
              >
                <p>
                  Everything flows from real community. You cannot build an effective team without it.
                  You cannot raise leaders without it. Start with understanding the five stages every group
                  must navigate to move from performance to presence.
                </p>
                <p>
                  Work through each week in order. Do the exercises. Have the conversations. Let the
                  principles reshape how you think about leadership, not just how you manage tasks.
                </p>
              </div>
              <div>
                <Link
                  href="/for-leaders/week-1"
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
                  Begin Week One <span aria-hidden>→</span>
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
