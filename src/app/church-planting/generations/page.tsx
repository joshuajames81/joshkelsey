import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import ChapterHeader from "@/components/ChapterHeader";
import ChapterNav from "@/components/ChapterNav";
import PullQuote from "@/components/PullQuote";

export const metadata: Metadata = {
  title: "Generations: Multiplication, the One, and the Long Horizon",
  description:
    "God never designed something without the ability to multiply. A heart for multiplication, the power of the one, and planting for generations you will never meet.",
  alternates: { canonical: "https://joshkelsey.com/church-planting/generations" },
  openGraph: {
    title: "Generations | Josh Kelsey",
    description:
      "Multiplication, the power of the one, and planting for generations you will never meet.",
    type: "article",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Generations: Multiplication, the One, and the Long Horizon",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-04-17",
  dateModified: "2026-04-17",
  mainEntityOfPage: "https://joshkelsey.com/church-planting/generations",
  isPartOf: {
    "@type": "CreativeWorkSeries",
    name: "Church Planting Training Library",
    url: "https://joshkelsey.com/church-planting",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <ChapterHeader
            partNumber="Three"
            partName="The Long Haul"
            chapterNumber="10"
            title="A heart for the one, a horizon for generations."
            intro="God never designed something without the ability to multiply. Multiplication, the power of going after one, and the long horizon that keeps you building when no one is watching."
            parentHref="/church-planting"
            parentLabel="Church Planting"
          />

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <h2 className="font-display text-3xl text-ink mt-4 mb-2 leading-tight">
              The DNA of multiplication
            </h2>

            <p className="drop-cap">
              God never designed something without the ability to multiply. Every
              part of our being has the potential to multiply and reproduce. That
              was always his design. So why would we design churches or small
              groups or leadership models in which they can&rsquo;t multiply?
              There is something missed in the church today when it doesn&rsquo;t
              have a heart to multiply. It loses its sense of purpose and mission.
              The heart to multiply, empower, equip, and be part of the Great
              Commission has to be in the DNA of what you&rsquo;re building, or
              we miss the heart of God.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Going after the one
            </h2>
            <p>
              We don&rsquo;t train our church to reach the nine million in New
              York City. We train our church to reach the one. That&rsquo;s what
              has to keep you going, the idea of the one. As you grow, as you
              develop, as influence or success come, the one has to always be the
              reason. The fuel in your spirit has to be the one person that now
              knows Christ, that makes it all worth it.
            </p>
            <p>
              The question I&rsquo;ve been asked lately is, why would you leave
              the 99 in New York, you have something going there. What strikes me
              is that there are still ones there. But there are also ones in
              Paris. Ones in Berlin that we&rsquo;ve now been called to reach.
              I&rsquo;m not leaving the 99 in unhealthy places. I&rsquo;ve
              focused on the 99 so that the ones out there can be reached.
              That&rsquo;s the future, the ones you will reach as your 99 are
              healthy.
            </p>
          </div>

          <PullQuote>
            An audience of One. A heart for the one. A horizon for generations.
          </PullQuote>

          <div className="max-w-prose font-serif text-lg md:text-xl leading-[1.75] text-ink/90 space-y-6">
            <p>
              We&rsquo;re built around the one. Our culture from the beginning,
              and what will sustain us, is for the one. First and foremost, you
              have to be doing all of this for an audience of One. Leading from a
              place of truth for One. It&rsquo;s always for him, it&rsquo;s his
              truth, his word you&rsquo;re faithful to. Then on the other side,
              what motivates you has to be the one. The lost. The one person that
              now knows Christ.
            </p>

            <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
              Playing for the long horizon
            </h2>
            <p>
              Then you start to think about generations. The kids. The legacy.
              The one reached right now could impact a whole generation. Whatever
              you&rsquo;re building, there&rsquo;s a legacy attached to it. Always
              know that, always remember that. It changes how you act now, knowing
              there are future generations that will be changed by what you&rsquo;re
              doing today.
            </p>
            <p>
              Planting a church is not a short project. It&rsquo;s the longest
              possible one. You plant it for the person who walks in next Sunday,
              and you also plant it for the great-grandchild of that person, the
              one you will never meet. For the city to be different because you
              were faithful for thirteen years, and thirty, and whatever comes
              after. For the next planter who sits where you&rsquo;re sitting and
              needs to know someone did this before them.
            </p>
            <p>
              If you&rsquo;ve made it to the end of this library, I want to pray
              something over you. That the God who spoke the call in the first
              place would speak again in the weeks you&rsquo;re about to walk
              into. That your team would be knit together for the long haul. That
              your marriage would be guarded. That the city you&rsquo;ve been given
              would open to you in ways you don&rsquo;t yet see. That the ones
              you&rsquo;re about to reach are already being prepared by the Holy
              Spirit before you arrive. That generations you will never meet would
              call you blessed.
            </p>
            <p>
              You&rsquo;re not alone in this. I&rsquo;d love to connect with you.
              If you&rsquo;re wrestling with a particular chapter of your plant,
              or you want to be in touch about coaching, please reach out through
              the contact page. Go well.
            </p>
          </div>

          <ChapterNav
            previous={{
              href: "/church-planting/personal-health",
              part: "Part Three: The Long Haul",
              title: "Personal Health",
            }}
          />
        </article>
      </main>
      <Footer />
    </div>
  );
}
