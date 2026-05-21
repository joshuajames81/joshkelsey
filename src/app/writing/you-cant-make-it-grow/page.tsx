import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "You Can't Make It Grow",
  description:
    "Pastor Josh Kelsey on auxin, the Greek verb Paul used in 1 Corinthians 3:6, and the one thing none of us can actually do: make the growth happen.",
  keywords: [
    "Josh Kelsey",
    "Pastor Josh Kelsey",
    "Georgie Kelsey",
    "FOUNT Church NYC",
    "FOUNT NYC",
    "auxin",
    "1 Corinthians 3:6",
    "I planted Apollos watered",
    "Christian growth",
    "leadership and rest",
  ],
  alternates: { canonical: "https://joshkelsey.org/writing/you-cant-make-it-grow" },
  openGraph: {
    title: "You Can't Make It Grow | Josh Kelsey",
    description:
      "On auxin, a verb Paul used, and the one thing none of us can actually do.",
    type: "article",
    url: "https://joshkelsey.org/writing/you-cant-make-it-grow",
    publishedTime: "2026-05-20",
    modifiedTime: "2026-05-20",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "You Can't Make It Grow",
  description:
    "On auxin, the Greek verb Paul used in 1 Corinthians 3:6, and the one thing none of us can actually do: make the growth happen.",
  author: {
    "@type": "Person",
    "@id": "https://joshkelsey.org/#person",
    name: "Josh Kelsey",
    url: "https://joshkelsey.org",
  },
  publisher: { "@id": "https://joshkelsey.org/#person" },
  datePublished: "2026-05-20",
  dateModified: "2026-05-20",
  mainEntityOfPage: "https://joshkelsey.org/writing/you-cant-make-it-grow",
  image: "https://joshkelsey.org/og-image.jpg",
  about: [
    { "@type": "Thing", name: "Auxin" },
    { "@type": "Thing", name: "1 Corinthians 3:6" },
    { "@type": "Thing", name: "Spiritual growth" },
  ],
};

export default function Post() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <Nav />
      <main className="flex-1">
        <article className="max-w-prose mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-12 md:mb-16">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-5">Essay</p>
            <h1 className="font-display text-display-lg font-medium leading-[1.05] text-ink mb-6">
              You Can&rsquo;t Make It Grow.
            </h1>
            <p className="font-serif italic text-lg text-muted mb-6">
              On auxin, a verb Paul used, and the one thing none of us can actually do.
            </p>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>·</span>
              <time dateTime="2026-05-20">May 2026</time>
              <span aria-hidden>·</span>
              <span>4 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              Every runner eventually learns a slightly insulting truth. You do not get fitter
              while you run. You get fitter afterwards, asleep on the couch, doing absolutely
              nothing. The run is just the stress. The actual growth happens later, in the dark, in
              the rest, through a process you cannot see or feel or hurry along.
            </p>

            <p>
              I find that quietly maddening. I would much prefer that effort and outcome sat right
              next to each other. Push harder, grow faster. But the body does not work like that,
              and neither, it turns out, does almost anything worth having.
            </p>

            <p>
              In the 1930s, scientists finally isolated the hormone that drives the growth of a
              plant. The thing that pushes a shoot up through soil, bends a stem toward the light,
              turns a seed into something with leaves. They needed a name for it, so they reached
              back to an old Greek verb, <em>auxein</em>, meaning to grow, to increase. The hormone
              has been called <em>auxin</em> ever since.
            </p>

            <p>
              Here is the part I cannot get over. It does its work mostly where you are not
              looking. In the root tips. At night. In tissue you would have to tear the plant apart
              to see. The quiet engine of all that growing runs almost entirely out of view.
            </p>

            <p>
              Centuries before anyone had a microscope, Paul used that same verb. Writing to a
              church that had fractured into factions, arguing over which leader was best, he ends
              the whole debate in a single line. <em>I planted, Apollos watered, but God gave the
              growth</em> (1 Corinthians 3:6). The word for growth there is <em>auxan&#333;</em>.
              The same root those scientists would one day borrow.
            </p>

            <p>
              And the grammar is doing something I think he meant on purpose. Planted and watered
              are finished actions. The workers turned up, did their bit, went home. But{" "}
              <em>gave the growth</em> is written as something ongoing, continuous, never stopping.
              So while we come and go, doing our small and visible jobs and clocking off, God is the
              one quietly at work the entire time, down in the part of the soil none of us will ever
              see.
            </p>

            <p>
              Because if you lead anything, parent anyone, pastor a church, carry a marriage, mentor
              a friend, and most importantly self-leadership, sooner or later you feel the pressure
              to be the one who makes the growth happen. To force it. To engineer it. To lie awake
              at night wondering why it is not coming faster.
            </p>

            <p>
              But you cannot make it grow. You genuinely cannot. It was never your job and never
              your power. You plant. You water. You show up and do your bit, and then, and this is
              the part I find hardest, you go home and you sleep, trusting that the One who has
              actually been doing the growing all along did not clock off when you did.
            </p>

            <blockquote className="border-l-2 pl-6 italic my-8 text-ink/80">
              The most important work is the part you will never see.
            </blockquote>

            <p>
              We are all gardeners. Sow the right things, water the right things, and then&hellip;
            </p>

            <p className="font-display text-2xl md:text-3xl text-ink not-italic">
              Get some sleep.
            </p>

            <p className="text-sm font-sans text-ink/65 leading-relaxed border-t border-border/60 pt-8 mt-12">
              Josh Kelsey is the founding and lead pastor of FOUNT Church NYC, which he planted in
              2013 with his wife and co-pastor, Georgie Kelsey. He writes on theology, the city, and
              a life shaped by Jesus, the true Fount.
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
