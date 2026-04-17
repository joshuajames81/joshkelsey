import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Church Planting",
  description:
    "Resources and training on church planting from Pastor Josh Kelsey. Lessons from planting FOUNT Church in New York, Paris, and Berlin across thirteen years of ministry.",
  alternates: { canonical: "https://joshkelsey.org/church-planting" },
  openGraph: {
    title: "Church Planting | Josh Kelsey",
    description:
      "Resources and training on church planting from Pastor Josh Kelsey.",
    url: "https://joshkelsey.org/church-planting",
  },
};

export default function ChurchPlantingPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
            Training & Resources
          </p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink max-w-4xl">
            Church
            <br />
            <span className="italic text-accent">Planting.</span>
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            Thirteen years, three cities, one conviction. Resources for the pastors and
            leaders called to plant churches in the places everyone else has written off.
          </p>
        </section>

        <section className="border-y border-border/60 bg-soft/40">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              The Heart of It
            </div>
            <article className="max-w-prose mx-auto font-serif text-lg md:text-xl leading-[1.75] text-ink/90">
              <p className="drop-cap">
                My wife Georgie and I planted FOUNT Church in Brooklyn in 2013 with five
                people and a Dinner Party. Since then we&rsquo;ve watched God build what
                we could not have imagined. Five locations across the boroughs of
                New York before COVID, a rebuild after, and church plants in Paris and
                Berlin that are now self sustaining and thriving in their own way.
              </p>
              <p className="mt-6">
                Three of the most challenging cities in the Western world. Three places
                everyone said the church couldn&rsquo;t take root. And in each one, God
                has done what only God can do.
              </p>
              <p className="mt-6">
                The lessons from those thirteen years (the theology, the practices,
                the failures, the things we would do again, the things we would never)
                are what I want to share here. If you&rsquo;re called to plant a church,
                or to help plant one, or to pastor one through its hardest seasons, my
                prayer is that what we&rsquo;ve learned would serve you.
              </p>
            </article>
          </div>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
            What&rsquo;s Coming
          </div>
          <div className="max-w-prose font-serif text-lg text-ink/85 leading-relaxed space-y-5">
            <p>
              I&rsquo;m in the process of pulling together a full training library for
              church planters. Teaching series, frameworks, guides, and stories
              from the FOUNT journey across New York, Paris, and Berlin.
            </p>
            <p>
              That library is coming here soon. In the meantime, if you&rsquo;re a
              church planter or pastor and want to be in touch directly, please reach out
              through the{" "}
              <Link href="/contact" className="link-underline text-accent">contact page</Link>.
            </p>
          </div>
        </section>

        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-paper/60 mb-6">
                Foundational to Our Model
              </p>
              <h2 className="font-display text-display-lg leading-[1.02]">
                It began at a<br />
                <span className="italic text-paper/80">table.</span>
              </h2>
            </div>
            <div className="md:col-span-7 font-serif text-lg leading-relaxed text-paper/90">
              <p>
                Every FOUNT plant has started the same way. Not with a launch event,
                but with a Dinner Party. The Dinner Party is the centerpiece of how we
                plant and how we pastor.
              </p>
              <p className="mt-5">
                If you&rsquo;re exploring church planting and want to understand the
                model we&rsquo;ve built three churches on, start there.
              </p>
              <div className="mt-8">
                <Link
                  href="/dinner-parties"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink rounded-full hover:bg-accent hover:text-paper transition-colors text-sm font-sans"
                >
                  Explore the Dinner Party model <span aria-hidden>→</span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
