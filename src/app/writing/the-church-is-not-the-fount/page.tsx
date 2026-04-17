import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The church is not the Fount",
  description:
    "On the hymn that gave FOUNT Church its name, the theology behind it, and why Jesus Himself must remain the true Fount of every blessing.",
  alternates: { canonical: "https://joshkelsey.org/writing/the-church-is-not-the-fount" },
  openGraph: {
    title: "The church is not the Fount | Josh Kelsey",
    description: "A reflection on the hymn that gave FOUNT Church NYC its name.",
    type: "article",
    publishedTime: "2026-04-01",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "The church is not the Fount",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: "https://joshkelsey.org/writing/the-church-is-not-the-fount",
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
              The church is not the Fount.
            </h1>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>·</span>
              <time dateTime="2026-04-01">April 2026</time>
              <span aria-hidden>·</span>
              <span>6 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              When Georgie and I were preparing to rename our church in 2023, she came to me with
              something she said had been sitting on her for weeks. It wasn&rsquo;t a brainstorm
              list. It was a hymn.
            </p>
            <p>
              <em>Come thou fount of every blessing, tune my heart to sing thy grace.</em>
            </p>
            <p>
              Robert Robinson wrote those words in 1758 when he was twenty-two years old, two years
              after a conversion under George Whitefield. He would eventually walk away from faith,
              then return, then waver again. The hymn itself outlived his own doubts. That&rsquo;s
              part of why I love it. The theology is steadier than the man who wrote it, which is
              exactly how it should be.
            </p>
            <p>
              The conviction behind our name is simple and I want to say it plainly: the church is
              not the Fount. Jesus is. A church can be a place where people meet the Fount. A church
              can be shaped by the Fount. A church can sing about the Fount and preach about the
              Fount and point people toward the Fount. But a church is never the Fount.
            </p>
            <p>
              That matters more than you might think. Because when a church forgets this , 
              when the institution starts to believe that <em>it</em> is what people are coming for,
              or that <em>its</em> culture is what saves them, or that <em>its</em> pastor is the
              reason the lives are changing, something slow and quiet begins to die.
            </p>
            <p>
              Ministry of any kind lives on borrowed water. The minute we forget that, we start
              trying to manufacture what was only ever meant to be received.
            </p>
            <p>
              Every Sunday at FOUNT we sing songs that were not ours first. We read from a Book that
              was not ours first. We preach a Jesus who was not ours first. And if we ever start to
              act like <em>we</em> are the Fount, like people are here for our branding, our
              creativity, our pastors, our anything, then we have become exactly the kind of
              church we said we would never be.
            </p>
            <p>
              So we keep the name in front of us. FOUNT. Not because the name is magic but because
              the name is a reminder. Every time I see it on a wall, every time I hear our people
              say it, every time a stranger asks what the name means, it does its small faithful
              work: it points past us to Him.
            </p>
            <p>
              <em>Streams of mercy, never ceasing, call for songs of loudest praise.</em>
            </p>
            <p>
              Not streams from us. Streams through us. That&rsquo;s the whole thing.
            </p>
          </div>

          <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-sans text-muted">
            <p className="mb-4">
              Josh Kelsey is the founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City, which
              he planted in 2013 with his wife and co-pastor{" "}
              <a href="https://georgiekelsey.com" className="underline">Georgie Kelsey</a>.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
