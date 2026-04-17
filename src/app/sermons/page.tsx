import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sermons by Josh Kelsey",
  description:
    "Sermons and teaching by Pastor Josh Kelsey from FOUNT Church NYC. Messages on Scripture, the gospel, and life in the city.",
  alternates: { canonical: "https://joshkelsey.com/sermons" },
  openGraph: {
    title: "Sermons by Josh Kelsey | FOUNT Church NYC",
    description: "Teaching and sermons by Pastor Josh Kelsey.",
    url: "https://joshkelsey.com/sermons",
  },
};

// Featured sermons, replace with real ones over time. These are strong SEO anchors.
const featured = [
  {
    title: "Three Gardens",
    scripture: "John 20:1–18; Isaiah 43:19",
    series: "Easter 2026",
    date: "April 5, 2026",
    summary:
      "Three gardens in Scripture, Eden, Gethsemane, and the empty tomb. What was lost, what Jesus surrendered, and what has now been restored.",
    href: "https://podcasts.apple.com/us/podcast/fount/id1070613870",
  },
  {
    title: "Access Granted",
    scripture: "Colossians 2; Matthew 27; Hebrews 10",
    series: "Good Friday 2026",
    date: "March 29, 2026",
    summary:
      "The torn veil, the opened heavens, and the full access every believer now has through the finished work of Christ.",
    href: "https://podcasts.apple.com/us/podcast/fount/id1070613870",
  },
  {
    title: "The King Who Wept",
    scripture: "Luke 19",
    series: "Palm Sunday 2026",
    date: "March 24, 2026",
    summary:
      "A king who enters the city on a borrowed donkey and weeps over it before He saves it. A meditation on the tenderness of Jesus.",
    href: "https://podcasts.apple.com/us/podcast/fount/id1070613870",
  },
  {
    title: "Dressed for Destiny",
    scripture: "Isaiah 61",
    series: "Identity & Calling",
    date: "2025",
    summary:
      "An exposition of Isaiah 61, the anointing, the mantle, the garments of praise, and what it means to step into the life God has prepared.",
    href: "https://podcasts.apple.com/us/podcast/fount/id1070613870",
  },
];

export default function SermonsPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">Teaching</p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">
            Sermons
            <span className="italic text-accent"> by Josh Kelsey</span>
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            Teaching from FOUNT Church NYC. Scripture, the original languages, and the
            work the Holy Spirit does when the Word is opened. Messages for every season of faith.
          </p>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-12">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">Featured</div>
          <ul className="divide-y divide-border/60">
            {featured.map((s) => (
              <li key={s.title} className="py-8 md:py-10 grid md:grid-cols-12 gap-6 group">
                <div className="md:col-span-3 text-sm font-sans">
                  <p className="uppercase text-[10px] tracking-[0.22em] text-muted">{s.series}</p>
                  <p className="mt-1 text-ink/70">{s.date}</p>
                </div>
                <div className="md:col-span-9">
                  <h2 className="font-display text-3xl md:text-4xl leading-tight text-ink group-hover:text-accent transition-colors">
                    <a href={s.href} target="_blank" rel="noopener">{s.title}</a>
                  </h2>
                  <p className="mt-2 font-serif italic text-ink/60">{s.scripture}</p>
                  <p className="mt-4 font-serif text-ink/85 leading-relaxed max-w-prose">{s.summary}</p>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener"
                    className="mt-5 inline-block text-sm font-sans text-ink hover:text-accent link-underline"
                  >
                    Listen <span aria-hidden>→</span>
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20">
          <div className="bg-soft border border-border rounded-sm p-10 md:p-16 text-center">
            <h2 className="font-display text-3xl md:text-4xl text-ink mb-5 leading-tight">
              Full sermon library
            </h2>
            <p className="font-serif text-lg text-ink/85 max-w-xl mx-auto mb-8">
              The complete catalog of FOUNT sermons, over 700 messages from 2015 to today , 
              is available wherever you listen to podcasts.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://podcasts.apple.com/us/podcast/fount/id1070613870"
                target="_blank"
                rel="noopener"
                className="px-5 py-2.5 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
              >
                Apple Podcasts
              </a>
              <a
                href="https://open.spotify.com/show/1ticMy9P1FbqpZH0SNdbk7"
                target="_blank"
                rel="noopener"
                className="px-5 py-2.5 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
              >
                Spotify
              </a>
              <Link
                href="/podcast"
                className="px-5 py-2.5 border border-ink rounded-full text-sm font-sans hover:bg-ink hover:text-paper transition-colors"
              >
                About the FOUNT podcast
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
