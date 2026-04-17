import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

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

export default function DinnerPartiesPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        {/* HERO */}
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
            A Training Library
          </p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">
            The <span className="italic text-accent">Dinner Party.</span>
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            Before FOUNT was a church with a Sunday service, it was five people around a
            table in Brooklyn. Over thirteen years, in New York, Paris, and Berlin,
            we&rsquo;ve built one of the most consistent small group models we know. This
            is the full training we use to equip every leader at FOUNT.
          </p>
        </section>

        {/* ORIGIN */}
        <section className="border-y border-border/60 bg-soft/40">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              Why This Library Exists
            </div>
            <article className="max-w-prose mx-auto font-serif text-lg md:text-xl leading-[1.75] text-ink/90">
              <p className="drop-cap">
                Jesus met people around tables. Before altars, before programs, before
                pulpits, there were meals. Long conversations. Honest questions. Bread
                broken and passed. The Dinner Party is our attempt to stay close to that.
              </p>
              <p className="mt-6">
                Every Wednesday night across New York City, FOUNT members gather in homes,
                on rooftops, in parks, at kitchen tables. Anyone is welcome. Conversation
                is real. The gospel is close. And over thirteen years we&rsquo;ve watched
                something happen at those tables that no other ministry format has matched.
                Strangers become friends, friends become family, and family becomes church.
              </p>
              <p className="mt-6">
                We&rsquo;ve now trained over seven hundred churches and leaders to
                implement this model across the world. What you&rsquo;ll find here is the
                same training we give our own leaders. Free, unlocked, and structured so
                you can work through it at your own pace.
              </p>
            </article>
          </div>
        </section>

        {/* PART ONE */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
              Part One
            </p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">
              Vision
            </h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">
              Why the Dinner Party. The biblical and theological foundation.
            </p>
          </div>
          <div className="grid gap-6">
            {partOne.map((c) => (
              <ChapterCard key={c.href} chapter={c} />
            ))}
          </div>
        </section>

        {/* PART TWO */}
        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
            <div className="mb-10">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
                Part Two
              </p>
              <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">
                The Model
              </h2>
              <p className="font-serif text-lg text-ink/75 max-w-prose">
                How Dinner Parties actually work. The night, the leadership, the culture.
              </p>
            </div>
            <div className="grid gap-6">
              {partTwo.map((c) => (
                <ChapterCard key={c.href} chapter={c} />
              ))}
            </div>
          </div>
        </section>

        {/* PART THREE */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
              Part Three
            </p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">
              Leadership
            </h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">
              How to lead, raise leaders, multiply, and sustain Dinner Parties for the
              long haul.
            </p>
          </div>
          <div className="grid gap-6">
            {partThree.map((c) => (
              <ChapterCard key={c.href} chapter={c} />
            ))}
          </div>
        </section>

        {/* REFERENCE */}
        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              Reference
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {references.map((r) => (
                <Link
                  key={r.href}
                  href={r.href}
                  className="group block border border-border bg-paper p-6 md:p-8 hover:border-ink transition-colors"
                >
                  <h3 className="font-display text-2xl md:text-3xl text-ink mb-3 group-hover:text-accent transition-colors leading-tight">
                    {r.title}
                  </h3>
                  <p className="font-serif text-ink/75 leading-relaxed">{r.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              Start Here
            </p>
            <h2 className="font-display text-display-lg leading-[1.05] text-ink mb-6">
              Begin with the vision.
            </h2>
            <p className="font-serif text-lg text-ink/80 mb-8">
              The most important chapter is the first one. Before any of the model or the
              leadership training, you need to catch the vision for why the table is
              where the church belongs.
            </p>
            <Link
              href="/dinner-parties/vision"
              className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
            >
              Start Chapter One <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
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
