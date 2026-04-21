import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Thirteen years in New York City",
  description:
    "Pastor Josh Kelsey reflects on thirteen years of pastoring, planting, and loving New York City, what FOUNT Church NYC has taught him about ministry in the city that doesn't love back easily.",
  alternates: { canonical: "https://joshkelsey.org/writing/thirteen-years-in-nyc" },
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
  author: { "@type": "Person", name: "Josh Kelsey", url: "https://joshkelsey.org" },
  publisher: { "@type": "Person", name: "Josh Kelsey" },
  datePublished: "2026-03-15",
  dateModified: "2026-03-15",
  mainEntityOfPage: "https://joshkelsey.org/writing/thirteen-years-in-nyc",
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
              In February 2013, my wife Georgie Kelsey and I moved to New York City from Sydney,
              Australia, to plant a church. We had a six-month-old son, two suitcases, and a conviction
              that this was where God was calling us. We did not know anyone in the city. We had no
              building, no team, just a word from God to start as a Dinner Party. Little did we know
              what Jesus would do as we stepped out in faith.
            </p>

            <p>
              Thirteen years later, that church, FOUNT, has become the work of our lives. And in that
              time, I have learned a few things I wish someone had told me on the plane over.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              1. Grow deep and grow fast.
            </h2>
            <p>
              Church planting culture often presents this as a binary. Either you grow slow and deep,
              or you grow fast and shallow. That hasn&rsquo;t been our experience. We saw significant
              and fast growth from the beginning, and we&rsquo;ve grown deep in it. The key wasn&rsquo;t
              choosing one over the other. It was building a church where the relational fabric,
              Dinner Parties, leaders rising from within, genuine community, was strong enough to hold
              the growth we were seeing. Speed isn&rsquo;t the enemy of depth if the foundation is cellular.
            </p>
            <p>
              We&rsquo;ve seen this tested. Through every season, the hard ones included, FOUNT has
              continued to see lives changed, people saved, community deepened. That doesn&rsquo;t
              happen because the church is impressive. It happens because the foundation is real.
              The fruit has continued, and it continues still.
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
              4. The fruit is people, not programs.
            </h2>
            <p>
              From the beginning, we built FOUNT around a simple conviction. The real measure of a
              church is what&rsquo;s happening inside the people in the room. Attendance and
              engagement matter. But they&rsquo;re trailing indicators, the echo of something deeper.
              What we actually watch for is whether people are being transformed. Is someone
              we&rsquo;ve been praying for taking a step? Is a real conversation happening about a
              real thing? Did someone leave more free than they walked in? Those are the questions
              that have guided our leadership from year one, and they still guide it now.
            </p>

            <h2 className="font-display text-3xl text-ink mt-12 mb-2 leading-tight">
              5. The local church is the hope of the city.
            </h2>
            <p>
              For all the valid conversation happening about models, structures, and strategies in
              the modern church, the conviction that keeps us going hasn&rsquo;t changed. The local
              church, rooted in a place, faithful over time, committed to the people in front of it,
              is still the clearest picture of the gospel in the world. It&rsquo;s still God&rsquo;s
              plan A for New York. Everything we&rsquo;ve built at FOUNT is built on that conviction.
              Not the church as event. Not the church as brand. The church as family, gathering week
              after week, believing that Jesus is who He says He is and doing what He says He&rsquo;ll do.
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
              Thirteen years on, FOUNT is the work of our lives. What God has built here will stand
              through this chapter and whatever comes next. If you&rsquo;re a church planter, a pastor,
              or a leader thinking about building something of depth, I hope something here serves
              you. The fruit of this work belongs to Jesus, and it doesn&rsquo;t disappear.
            </p>
          </div>

          <footer className="mt-16 pt-10 border-t border-border/70 text-sm font-sans text-muted">
            <p>
              Josh Kelsey is the founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="underline">FOUNT Church</a> in New York City,
              planted in 2013 with his wife and co-pastor{" "}
              <a href="https://fount.nyc" className="underline">Georgie Kelsey</a>.
            </p>
          </footer>
        </article>
      </main>
      <Footer />
    </div>
  );
}
