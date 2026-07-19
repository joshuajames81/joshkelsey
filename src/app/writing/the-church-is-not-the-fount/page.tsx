import type { Metadata } from "next";
import EssayLayout from "@/components/EssayLayout";

const DESCRIPTION =
  "On the hymn that gave FOUNT Church its name, the theology behind it, and why Jesus Himself must remain the true Fount of every blessing.";

export const metadata: Metadata = {
  title: "The church is not the Fount",
  description: DESCRIPTION,
  alternates: { canonical: "https://joshkelsey.org/writing/the-church-is-not-the-fount" },
  openGraph: {
    title: "The church is not the Fount | Josh Kelsey",
    description: "A reflection on the hymn that gave FOUNT Church NYC its name.",
    type: "article",
    publishedTime: "2026-04-01",
    authors: ["Josh Kelsey"],
    images: [{ url: "/site-images/nyc-follow-jesus-sign.jpg", width: 1600, height: 900, alt: "A hand painted sign on a New York City street" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "The church is not the Fount | Josh Kelsey",
    description: "A reflection on the hymn that gave FOUNT Church NYC its name.",
    images: ["/site-images/nyc-follow-jesus-sign.jpg"],
  },
};

export default function Post() {
  return (
    <EssayLayout
      slug="the-church-is-not-the-fount"
      headline="The church is not the Fount"
      kicker={<>Essay <span className="flare">/</span> 6 min read</>}
      titleLead="The church is not the "
      titleAccent="Fount."
      standfirst="A reflection on the hymn that gave FOUNT Church NYC its name."
      leadImage="/site-images/nyc-follow-jesus-sign.jpg"
      leadAlt="A hand painted sign on a New York City street"
      description={DESCRIPTION}
      datePublished="2026-04-01"
      dateModified="2026-04-01"
      wordCount={500}
      keywords={["Come Thou Fount", "Robert Robinson", "FOUNT Church NYC", "church name", "hymn", "Josh Kelsey"]}
    >
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

      <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-mono text-muted">
        <p className="mb-4">
          Josh Kelsey is the founding and lead pastor of{" "}
          <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City, which
          he planted in 2013 with his wife and co-pastor{" "}
          <a href="https://georgiekelsey.com" className="underline">Georgie Kelsey</a>.
        </p>
      </footer>
    </EssayLayout>
  );
}
