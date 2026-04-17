import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "The FOUNT Podcast",
  description:
    "The FOUNT podcast with Pastors Josh Kelsey and Georgie Kelsey. Sermons, interviews, and teaching from FOUNT Church NYC, 770+ episodes, updated biweekly.",
  alternates: { canonical: "https://joshkelsey.org/podcast" },
};

export default function PodcastPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-20">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">Conversations & Teaching</p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">
            The FOUNT
            <span className="italic text-accent"> Podcast.</span>
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            Sermons, interviews, and teaching from Pastors Josh &amp; Georgie Kelsey and the FOUNT
            Church NYC team. Over 770 episodes, updated biweekly.
          </p>

          <div className="mt-12 flex flex-wrap gap-3">
            <a
              href="https://podcasts.apple.com/us/podcast/fount/id1070613870"
              target="_blank"
              rel="noopener"
              className="px-5 py-2.5 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
            >
              Listen on Apple Podcasts
            </a>
            <a
              href="https://open.spotify.com/show/1ticMy9P1FbqpZH0SNdbk7"
              target="_blank"
              rel="noopener"
              className="px-5 py-2.5 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
            >
              Listen on Spotify
            </a>
          </div>
        </section>

        <section className="bg-soft/40 border-y border-border/60">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 grid md:grid-cols-2 gap-12">
            <div>
              <p className="uppercase text-[11px] tracking-[0.22em] text-muted font-sans mb-4">About the show</p>
              <h2 className="font-display text-3xl md:text-4xl text-ink leading-tight mb-6">
                Our vision, in their own words:
              </h2>
            </div>
            <blockquote className="font-serif text-lg md:text-xl italic leading-relaxed text-ink/90 border-l-2 border-accent pl-6">
              Our vision is Jesus Christ. Our reality is freedom. Our mission is people. Our cause
              is love. Join us this Sunday online, and find out more at{" "}
              <a href="https://fount.nyc" className="not-italic underline decoration-border hover:text-accent">fount.nyc</a>.
            </blockquote>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
