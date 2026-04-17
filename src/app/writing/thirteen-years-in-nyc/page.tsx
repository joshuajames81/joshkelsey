import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thirteen years in New York City",
  description:
    "Pastor Josh Kelsey reflects on thirteen years of pastoring, planting, and loving New York City, what FOUNT Church NYC has taught him about ministry in the city that doesn't love back easily.",
  alternates: { canonical: "https://joshkelsey.com/writing/thirteen-years-in-nyc" },
  openGraph: {
    title: "Thirteen years in New York City | Josh Kelsey",
    description:
      "Reflections on pastoring, planting, and loving New York City for thirteen years.",
    type: "article",
    publishedTime: "2026-03-15",
    authors: ["Josh Kelsey"],
  },
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Thirteen years in New York City",
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.com" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-15",
  mainEntityOfPage: "https://joshkelsey.com/writing/thirteen-years-in-nyc",
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
              Thirteen years in New York City.
            </h1>
            <div className="flex items-center gap-4 text-sm font-sans text-muted">
              <span>Josh Kelsey</span>
              <span aria-hidden>·</span>
              <time dateTime="2026-03-15">March 2026</time>
              <span aria-hidden>·</span>
              <span>9 min read</span>
            </div>
          </header>

          <div className="font-serif text-lg leading-[1.75] text-ink/90 space-y-6">
            <p className="drop-cap">
              We arrived in Brooklyn in February of 2013 with a six-month-old baby, two suitcases,
              and a vision that had been sitting on Georgie and me for three years. Snow on the
              ground. A borrowed apartment. Five people at our first Dinner Party. Most of what
              we&rsquo;ve learned since then, we&rsquo;ve learned the slow way.
            </p>
            <p>
              Ministry in New York doesn&rsquo;t happen on a schedule. It happens at dinner,
              in hallways, after the last train home, in group chats at 11:47pm, in the kind of
              conversations you didn&rsquo;t plan to have and won&rsquo;t remember planning. The
              city doesn&rsquo;t love back easily. That&rsquo;s part of what you sign up for. But
              when it does, when it lets you in, it does something to your faith
              that no conference ever could.
            </p>
            <p>
              Here are a few things I&rsquo;ve actually learned. Not the quotable kind. The kind
              that only shows up after you&rsquo;ve been doing something long enough for the
              shortcuts to fail.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              1. Plant slow, pastor slower.
            </h2>
            <p>
              Church planting culture praises speed. Bigger faster sooner. But the churches that
              last in New York are the ones where someone stayed long enough to become an actual
              neighbor. People don&rsquo;t trust a pastor they&rsquo;ve known for six months. They
              trust a pastor they&rsquo;ve watched through ten of their own hardest seasons.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              2. The table is the pulpit.
            </h2>
            <p>
              FOUNT started at a Dinner Party and it has never stopped being one. Everything
              real about our church, the theology, the belonging, the honesty, has
              happened at a table first and a stage second. If you want to know what a church
              believes, don&rsquo;t ask what they preach. Watch where they eat, and with whom.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              3. The city is the discipler.
            </h2>
            <p>
              New York will sand your pretension down to the floorboards. It will ask you
              questions your seminary didn&rsquo;t. It will introduce you to the people your
              theology had opinions about before you had a face to put on them. If you let it,
              the city itself becomes one of the truest teachers of how to actually love people.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              4. Success isn&rsquo;t what you thought it was.
            </h2>
            <p>
              I used to measure a Sunday by attendance. Then I measured it by engagement. Then
              by return rate. Then by something I still don&rsquo;t have a word for , 
              something more like: did anyone leave more free than they walked in? Did a real
              conversation happen about a real thing? Did someone we&rsquo;ve been praying for
              take a step? Numbers still matter. But they&rsquo;re trailing indicators, not
              leading ones.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              5. You cannot outrun your character.
            </h2>
            <p>
              The most sobering thing I&rsquo;ve learned in thirteen years is that you cannot
              build a healthy church on top of an unhealthy interior life. What happens inside
              the pastor eventually happens inside the church. It may take ten years, but it
              comes. Georgie and I have had to fight for our own souls more times than I can
              count, and I&rsquo;m grateful for every pastor and friend who&rsquo;s been honest
              with us when we needed it.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              6. Jesus is still the Fount.
            </h2>
            <p>
              Thirteen years in, I&rsquo;m more convinced of this than when we started. The
              church is not the Fount. The pastor is not the Fount. The building is not the
              Fount. The movement, the method, the message, none of those are the
              Fount. Jesus is. Everything else is just a place where, by grace, people can come
              and drink. That&rsquo;s the whole job.
            </p>

            <p className="mt-10">
              We&rsquo;ll keep doing it here as long as He lets us.
            </p>
          </div>

          <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-sans text-muted">
            <p>
              Josh Kelsey is the founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City,
              planted in 2013 with his wife and co-pastor{" "}
              <a href="https://georgiekelsey.com" className="underline">Georgie Kelsey</a>.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
