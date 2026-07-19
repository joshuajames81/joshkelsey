import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import RunningSection from "@/components/home/RunningSection";

const SITE_URL = "https://joshkelsey.org";
const PATH = "/running";

export const metadata: Metadata = {
  title: "Running",
  description:
    "Three marathons — Paris, Berlin, and New York — the training plans that got Josh Kelsey to each start line, and what the miles teach about leadership and the long work.",
  alternates: { canonical: `${SITE_URL}${PATH}` },
  openGraph: {
    type: "website",
    url: `${SITE_URL}${PATH}`,
    title: "Running | Josh Kelsey",
    description:
      "Three marathons — Paris, Berlin, and New York — the training plans and race notes.",
  },
};

export default function RunningPage() {
  return (
    <div className="min-h-screen flex flex-col selection-accent">
      <Nav variant="solid" />

      <main className="flex-1">
        <RunningSection
          headingTag="h1"
          number="Running"
          cta={{ href: "#training", label: "Training plans & race notes ↓" }}
        />

        {/* Training plans & race notes — placeholder for Josh to fill */}
        <section id="training" className="py-[clamp(4rem,9vw,8rem)]">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="mono mb-4" data-r>
              Training plans &amp; race notes
            </div>
            <h2
              className="font-disp font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em] max-w-[20ch]"
              data-r
            >
              The plans that got me to each start line.
            </h2>
            <p className="font-serif text-lg text-ink/80 max-w-[52ch] mt-6" data-r>
              Coming soon. The week-by-week training plans behind Paris, Berlin, and New York, plus
              the race notes — what worked, what broke, and what the miles taught about the work.
              Yours to take.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 mt-12">
              {[
                { city: "Paris", time: "3:23:11" },
                { city: "Berlin", time: "3:06:44" },
                { city: "New York", time: "3:21:29" },
              ].map((m) => (
                <div key={m.city} className="border-t border-line pt-6" data-r>
                  <p className="mono mb-2">{m.city}</p>
                  <p className="font-disp font-extrabold text-3xl tracking-[-0.02em]">{m.time}</p>
                  <p className="font-mono text-xs text-muted mt-3">Plan &amp; notes — coming soon</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
