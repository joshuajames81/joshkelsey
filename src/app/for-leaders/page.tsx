import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leadership Training Library · Josh Kelsey",
  description:
    "A three-week intensive on building real community, effective teams, and raising leaders. Kingdom principles that work across all industries and contexts.",
  alternates: { canonical: "https://joshkelsey.org/for-leaders" },
};

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

const resources = [
  {
    href: "/for-leaders/action-plan.pdf",
    title: "Post-Course Action Plan (PDF)",
    description: "Downloadable assessment and planning guide for implementing leadership principles in your context.",
  },
];

export default function ForLeadersPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              Leadership Training
            </p>
            <h1 className="font-display text-display-xl md:text-display-2xl leading-[0.95] text-ink mb-6">
              For
              <br />
              <span className="italic text-accent">Leaders.</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-ink/80 max-w-3xl leading-relaxed">
              A three week intensive on building real community, effective teams, and raising leaders. 
              Kingdom principles that work across all industries and contexts.
            </p>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-8">
              Why This Training Exists
            </h2>
            <div className="max-w-prose font-serif text-lg text-ink/85 leading-relaxed space-y-5">
              <p>
                Thirteen years of building teams in one of the world's most challenging cities has taught us that 
                great leadership is not about being indispensable. It's about making everyone around you better.
              </p>
              <p>
                This training emerged from real experience. Building FOUNT Church across New York, Paris, and Berlin. 
                Leading through crisis, growth, and everything in between. Training over seven hundred leaders who 
                are now building their own teams around the world.
              </p>
              <p>
                What you'll find here are kingdom principles that transcend church context. These foundations work 
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
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
              Three Week Course
            </p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">
              The Journey
            </h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">
              From performance to presence. From pseudo community to real community. From managing people to raising leaders.
            </p>
          </div>
          <div className="grid gap-6">
            {weeks.map((week) => (
              <ChapterCard key={week.href} chapter={week} />
            ))}
          </div>
        </section>

        {/* RESOURCES */}
        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              Resources
            </div>
            <div className="grid md:grid-cols-1 gap-6 max-w-2xl">
              {resources.map((r) => (
                
                  key={r.href}
                  href={r.href}
                  className="group block border border-border bg-paper p-6 md:p-8 hover:border-ink transition-colors"
                >
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 group-hover:text-accent transition-colors leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-serif text-ink/75 leading-relaxed">{r.description}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-paper/60 mb-6">
                Start Here
              </p>
              <h2 className="font-display text-display-lg leading-[1.02]">
                Begin with<br />
                <span className="italic text-paper/80">community.</span>
              </h2>
            </div>
            <div className="md:col-span-7 font-serif text-lg leading-relaxed text-paper/90">
              <p>
                Everything flows from real community. You cannot build an effective team without it. 
                You cannot raise leaders without it. Start with understanding the five stages every group 
                must navigate to move from performance to presence.
              </p>
              <p className="mt-5">
                Work through each week in order. Do the exercises. Have the conversations. Let the 
                principles reshape how you think about leadership, not just how you manage tasks.
              </p>
              <div className="mt-8">
                <Link
                  href="/for-leaders/week-1"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink rounded-full hover:bg-accent hover:text-paper transition-colors text-sm font-sans"
                >
                  Begin Week One <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

function ChapterCard({ chapter }: { chapter: Chapter }) {
  return (
    <Link
      href={chapter.href}
      className="group block border border-border bg-paper p-6 md:p-8 hover:border-ink transition-colors"
    >
      <div className="flex items-start gap-6 md:gap-10">
        <p className="font-display text-3xl md:text-4xl text-muted group-hover:text-accent transition-colors shrink-0 leading-none">
          {chapter.number}
        </p>
        <div className="flex-1">
          <h3 className="font-display text-xl md:text-2xl text-ink mb-2 group-hover:text-accent transition-colors leading-tight">
            {chapter.title}
          </h3>
          <p className="font-serif text-ink/75 leading-relaxed">{chapter.description}</p>
        </div>
      </div>
    </Link>
  );
}
