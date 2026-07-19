import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

export const metadata: Metadata = {
  title: "You Can't Make It Grow",
  description:
    "Pastor Josh Kelsey on auxin, the Greek word auxanō Paul used in 1 Corinthians 3:6-7, and the one thing none of us can do: make the growth happen. On leadership, the messiah complex, and trusting God for the increase.",
  keywords: [
    "Josh Kelsey",
    "Pastor Josh Kelsey",
    "Georgie Kelsey",
    "FOUNT Church NYC",
    "FOUNT NYC",
    "auxanō",
    "auxin",
    "1 Corinthians 3:6",
    "I planted Apollos watered",
    "Mark 4:27",
    "messiah complex",
    "Christian leadership",
    "church growth",
    "sustainable ministry",
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
    "On auxin, the Greek word auxanō Paul used in 1 Corinthians 3:6-7, and the one thing none of us can do: make the growth happen.",
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
    { "@type": "Thing", name: "1 Corinthians 3" },
    { "@type": "Thing", name: "Christian leadership" },
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
              <span>6 min read</span>
            </div>
          </header>

          <blockquote className="mb-12 md:mb-16 border-l-2 pl-6 font-serif italic text-xl text-ink/75 leading-snug">
            &ldquo;I have great faith in a seed. Convince me that you have a seed there, and I am
            prepared to expect wonders.&rdquo;
            <footer className="mt-3 text-sm not-italic font-sans text-muted">
              Henry David Thoreau, <cite className="not-italic">Faith in a Seed</cite>
            </footer>
          </blockquote>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
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
              I find that quietly maddening. I would much prefer that effort and outcome sat right
              next to each other. Push harder, grow faster. But growth does not work like that, and
              neither, it turns out, does almost anything worth having.
            </p>

            <p>
              Centuries before anyone had a microscope, Paul used that same verb. Writing to a
              church that had fractured into factions, arguing over which leader was best, he ends
              the whole debate in two lines. <em>I planted, Apollos watered, but God gave the
              growth. So neither he who plants nor he who waters is anything, but only God who
              gives the growth</em> (1 Corinthians 3:6-7). The word for growth there is{" "}
              <em>auxan&#333;</em>. The same root those scientists would one day borrow.
            </p>

            <p>
              It is worth knowing what kind of word it is. <em>Auxan&#333;</em> is an agricultural
              word, an organic one. It belongs to the world of seeds and soil and lilies, not to
              machinery or construction. You cannot manufacture it. You cannot schedule it or force
              it. It is the kind of growth Jesus pointed at when he said the kingdom is like a man
              who scatters seed and then sleeps and rises, night and day, while the seed sprouts
              and grows, and he does not know how (Mark 4:27). The farmer does not know how. He
              just wakes up to find it has happened.
            </p>

            <p>
              And the grammar is doing something I think he meant on purpose. Planted and watered
              are finished actions. The workers turned up, did their bit, went home. But the
              growth itself, the giving of it, is written as something ongoing. Continuous. Never
              stopping. So while we come and go, doing our small and visible jobs and clocking off,
              God is the one quietly at work the entire time, down in the part of the soil none of
              us will ever see.
            </p>

            <p>
              And it is not a one-off word. The same root runs all the way through the New
              Testament like a signature of God&rsquo;s quiet expansion. The word of God{" "}
              <em>increased</em> in Acts. The church <em>grows</em> into a holy temple in
              Ephesians. The whole body, Paul tells the Colossians, <em>grows with a growth that is
              from God</em>. Same root every time. The growth is always his.
            </p>

            <p>
              Because if you lead anything, lead a business, pastor a church, teach students,
              parent a child, are committed to the growth of your marriage, mentor a friend, and
              most importantly are leading yourself, sooner or later you feel the pressure
              to be the one who makes the growth happen. To force it. To engineer it. To lie awake
              at night wondering why it is not coming faster.
            </p>

            <p>
              But you cannot make it grow. You genuinely cannot. It was never your job and never
              your power. You plant. You water. You show up and do your bit, and then, and this is
              the part I find hardest, you go home and you sleep, trusting that the One who has
              actually been doing the growing all along did not clock off when you did.
            </p>

            <p>
              Two things break loose when you actually believe this. The first is that it kills the
              messiah complex. If you cannot grow anyone, and you cannot, then the weight of
              another person&rsquo;s transformation was never yours to carry. Neither was the
              growth of a whole church. That is the difference between a ministry that is
              sustainable and one that slowly crushes you. You were never the source. You were only
              ever a hand in the soil.
            </p>

            <p>
              The second is that it quietly dissolves rivalry. Remember what the Corinthians were
              actually fighting about. <em>I follow Paul. I follow Apollos.</em> Picking sides over
              who was the better leader. <em>Auxan&#333;</em> ends the argument. If the increase
              belongs entirely to God, then keeping score over who planted and who watered is
              meaningless. There are no stars on a team where God gives all the growth.
            </p>

            <p>
              I remember feeling completely overwhelmed when we started FOUNT in 2013, back when we
              were still called C3 Brooklyn. And in the middle of all of it, God gave me a picture
              so simple it almost seemed silly. <em>You are a gardener</em>, he said.{" "}
              <em>Just be a gardener. Sow the right seeds, water the right things, and I will do the
              rest.</em>
            </p>

            <p>
              It set me free. Looking back, I think that was the moment the church actually began to
              grow, and not just in numbers. It grew in every area, and most of all in people&rsquo;s
              lives. But the picture was powerful for a reason I did not expect. It changed how I led,
              and then it changed how I trained everyone else. I stopped raising people up only to do
              tasks and started raising them up to be gardeners too. And when a whole room of leaders
              stops striving to manufacture growth and simply starts sowing, watering, and trusting,
              the effect is not additive. It is exponential.
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

            <p className="text-sm font-sans text-ink/70 mt-5">
              <Link href="/writing" className="text-accent hover:underline">
                More essays and resources
              </Link>{" "}
              <span aria-hidden>&rarr;</span>
            </p>
          </div>
        </article>
      </main>
      <Subscribe />
      <Footer />
    </div>
  );
}
