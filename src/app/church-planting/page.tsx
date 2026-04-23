import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Church Planting Training Library · Josh Kelsey",
  description:
    "Thirteen years, three cities, one conviction. Resources for pastors and leaders called to plant churches in the places everyone else has written off.",
  alternates: { canonical: "https://joshkelsey.org/church-planting" },
};

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

export default function ChurchPlantingPage() {
  return (
    <>
      <Nav />
      <main>
        {/* HERO */}
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20 md:pb-28">
          <div className="max-w-4xl">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">
              Training & Resources
            </p>
            <h1 className="font-display text-display-xl md:text-display-2xl leading-[0.95] text-ink mb-6">
              Church
              <br />
              <span className="italic text-accent">Planting.</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-ink/80 max-w-3xl leading-relaxed">
              Thirteen years, three cities, one conviction. Resources for the pastors and
              leaders called to plant churches in the places everyone else has written off.
            </p>
          </div>
        </section>

        {/* ORIGIN */}
        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-8">
              The Heart of It
            </h2>
            <div className="max-w-prose font-serif text-lg text-ink/85 leading-relaxed space-y-5">
              <p>
                My wife Georgie and I planted FOUNT Church in Brooklyn in 2013 with five
                people and a Dinner Party. Since then we've watched God build what
                we could not have imagined. Five locations across the boroughs of
                New York before COVID, a rebuild after, and church plants in Paris and
                Berlin that are now self sustaining and thriving in their own way.
              </p>
              <p>
                Three of the most challenging cities in the Western world. Three places
                everyone said the church couldn't take root. And in each one, God
                has done what only God can do.
              </p>
              <p>
                The lessons from those thirteen years (the theology, the practices,
                the failures, the things we would do again, the things we would never)
                are what I want to share here. If you're called to plant a church,
                or to help plant one, or to pastor one through its hardest seasons, my
                prayer is that what we've learned would serve you.
              </p>
            </div>
          </div>
        </section>

        {/* PART ONE */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-24">
          <div className="mb-10">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-accent mb-3">
              Part One
            </p>
            <h2 className="font-display text-display-lg leading-[1.02] text-ink mb-4">
              Foundation
            </h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">
              The calling, character, and preparation required before you plant.
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
                The Work
              </h2>
              <p className="font-serif text-lg text-ink/75 max-w-prose">
                Strategy, culture, and reaching the communities God has called you to serve.
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
              Sustainability
            </h2>
            <p className="font-serif text-lg text-ink/75 max-w-prose">
              Building teams, systems, and churches that will thrive for generations.
            </p>
          </div>
          <div className="grid gap-6">
            {partThree.map((c) => (
              <ChapterCard key={c.href} chapter={c} />
            ))}
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
                Begin at the<br />
                <span className="italic text-paper/80">beginning.</span>
              </h2>
            </div>
            <div className="md:col-span-7 font-serif text-lg leading-relaxed text-paper/90">
              <p>
                The most important chapter is the first one. Before strategy, before team,
                before location, you need to be clear on the why. Why plant a church?
                Why this calling? Why you?
              </p>
              <p className="mt-5">
                Start there, and work through each chapter in order. This is thirteen years
                of learning, failure, and God's faithfulness distilled into the essentials.
              </p>
              <div className="mt-8">
                <Link
                  href="/church-planting/beginning"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink rounded-full hover:bg-accent hover:text-paper transition-colors text-sm font-sans"
                >
                  Begin Chapter One <span aria-hidden>→</span>
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
