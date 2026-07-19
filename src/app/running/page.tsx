import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RunningSection from "@/components/home/RunningSection";
import { graphJson, webPageNode } from "@/lib/schema";

const SITE_URL = "https://joshkelsey.org";
const PATH = "/running";
const DESCRIPTION =
  "Three marathons, Paris, Berlin, and New York, the training plans that got Josh Kelsey to each start line, and what the miles teach about leadership and the long work.";

export const metadata: Metadata = {
  title: "Running",
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PATH}`,
    title: "Running | Josh Kelsey",
    description: DESCRIPTION,
  },
};

const schema = graphJson([webPageNode(PATH, "Running | Josh Kelsey", DESCRIPTION)]);

export default function RunningPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(3rem,7vw,5rem)" }}>
        <RunningSection
          headingTag="h1"
          number="Running"
          cta={{ href: "#training", label: "Training plans and race notes ↓" }}
        />

        <section id="training" className="wrap" style={{ padding: "clamp(4rem,9vw,8rem) clamp(1.1rem,4vw,4.5rem)" }}>
          <div className="mono" data-r style={{ marginBottom: "1rem" }}>
            Training plans and race notes
          </div>
          <h2
            className="font-disp"
            data-r
            style={{ fontWeight: 900, fontSize: "clamp(2rem,5vw,4rem)", lineHeight: 0.95, letterSpacing: "-0.035em", maxWidth: "20ch" }}
          >
            The plans that got me to each start line.
          </h2>
          <p className="font-serif" data-r style={{ marginTop: "1.4rem", maxWidth: "52ch", color: "rgba(241,239,230,0.75)", fontSize: "1.2rem" }}>
            Coming soon. The week by week training plans behind Paris, Berlin, and New York, plus the
            race notes: what worked, what broke, and what the miles taught about the work. Yours to take.
          </p>
          <div className="mars" style={{ marginTop: "3rem" }}>
            {[
              { city: "Paris", time: "3:23:11" },
              { city: "Berlin", time: "3:06:44" },
              { city: "New York", time: "3:21:29" },
            ].map((m) => (
              <div key={m.city} className="mrow" data-r>
                <span className="city">{m.city}</span>
                <span className="yr">Plan and notes coming soon</span>
                <span className="time">{m.time}</span>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
