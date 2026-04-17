import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "For Leaders",
  description:
    "Leadership resources, teaching, and reflections from Pastor Josh Kelsey on culture, equipping teams, preaching, and the long work of pastoring well.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders" },
  openGraph: {
    title: "For Leaders | Josh Kelsey",
    description:
      "Leadership resources and teaching from Pastor Josh Kelsey.",
    url: "https://joshkelsey.org/for-leaders",
  },
};

export default function ForLeadersPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
            Culture · Equipping · Endurance
          </p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">
            For
            <span className="italic text-accent"> Leaders.</span>
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            The long work of leading people and building culture. Lessons from
            thirteen years of pastoring, planting, and equipping teams in three of the
            hardest cities in the world.
          </p>
        </section>

        <section className="border-y border-border/60 bg-soft/40">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              Who This Is For
            </div>
            <article className="max-w-prose mx-auto font-serif text-lg md:text-xl leading-[1.75] text-ink/90">
              <p className="drop-cap">
                Pastors. Ministry leaders. Team leads. Anyone doing the kind of work
                that asks more of you than any job description ever captured, and who
                wants to do it for the long haul without losing the plot.
              </p>
              <p className="mt-6">
                I&rsquo;ve spent the last thirteen years leading a church through every
                kind of season. Planting, scaling, pandemic, global expansion,
                rebuild. I&rsquo;ve hired staff, lost staff, hired them back. Built
                culture, watched it fracture, rebuilt it. Preached through weeks I felt
                nothing, and weeks where the Spirit nearly undid me.
              </p>
              <p className="mt-6">
                What I want to share here is what I&rsquo;ve actually learned. Not theory,
                not conference content, but the real practices and convictions that have
                kept Georgie and me in the work and in love with it thirteen years in.
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
            What&rsquo;s Coming
          </div>
          <div className="max-w-prose font-serif text-lg text-ink/85 leading-relaxed space-y-5">
            <p>
              A full library of leadership content. On building healthy team
              culture, equipping the next generation, navigating conflict, preaching
              well, pastoring through crisis, and the spiritual formation required to
              actually lead for thirty or forty years and not just ten.
            </p>
            <p>
              Coming here soon. If you&rsquo;d like to be in touch directly, reach out
              through the{" "}
              <Link href="/contact" className="link-underline text-accent">contact page</Link>.
            </p>
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
            Related Resources
          </div>
          <div className="grid md:grid-cols-2 gap-8 md:gap-10">
            <Link href="/church-planting" className="group block border-t border-border pt-8 hover:border-ink transition-colors">
              <p className="uppercase text-[10px] tracking-[0.22em] font-sans text-muted mb-4">Training</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-ink mb-4 group-hover:text-accent transition-colors">
                Church Planting
              </h3>
              <p className="font-serif text-ink/75 leading-relaxed">
                Resources for planting and pastoring churches in challenging cities, drawn
                from thirteen years of FOUNT plants in New York, Paris, and Berlin.
              </p>
            </Link>
            <Link href="/dinner-parties" className="group block border-t border-border pt-8 hover:border-ink transition-colors">
              <p className="uppercase text-[10px] tracking-[0.22em] font-sans text-muted mb-4">Model</p>
              <h3 className="font-display text-3xl md:text-4xl leading-tight text-ink mb-4 group-hover:text-accent transition-colors">
                Dinner Parties
              </h3>
              <p className="font-serif text-ink/75 leading-relaxed">
                The Dinner Party model at the heart of FOUNT. How we gather,
                disciple, and plant through tables, not programs.
              </p>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
