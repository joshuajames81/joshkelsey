import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "About Josh Kelsey",
  description:
    "Josh Kelsey is the founding and lead pastor of FOUNT Church in New York City, planted in 2013 with his wife and co-pastor Pastor Georgie Kelsey. Thirteen years of pastoring NYC, with church plants in Paris and Berlin.",
  alternates: { canonical: "https://joshkelsey.com/about" },
  openGraph: {
    title: "About Josh Kelsey",
    description:
      "Lead pastor of FOUNT Church NYC. Thirteen years of ministry in New York City, Paris, and Berlin.",
    url: "https://joshkelsey.com/about",
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-16 md:mb-24 max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
              Pastor · Teacher · Church Planter · Founder of FOUNT Church NYC
            </p>
            <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink">
              A pastor, a city, a table,
              <br />
              <span className="italic">and His church.</span>
            </h1>
            <p className="mt-8 font-serif text-lg md:text-xl text-ink/80 leading-relaxed max-w-prose">
              Josh Kelsey is the founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="link-underline text-accent">FOUNT Church</a>{" "}
              in New York City, planted in 2013 with his wife and co-pastor{" "}
              <strong>Pastor Georgie Kelsey</strong>. Thirteen years of pastoring in NYC, five locations
              across the boroughs, and <a href="/church-planting" className="link-underline text-accent">church plants</a> in Paris and Berlin, all built on the same
              conviction: Jesus is the Fount, and out of Him, the church becomes a fount to its city.
            </p>
          </header>

          <div className="grid md:grid-cols-12 gap-12">
            <aside className="md:col-span-4 md:sticky md:top-10 md:self-start">
              <figure className="aspect-[4/5] bg-soft border border-border overflow-hidden">
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{ backgroundImage: "url(/josh-kelsey.jpg)" }}
                  aria-label="Pastor Josh Kelsey"
                />
              </figure>
              <div className="mt-6 space-y-3 text-sm font-sans">
                <InfoRow label="Based" value="New York City · Sydney" />
                <InfoRow label="Role" value="Lead Pastor, FOUNT Church NYC" />
                <InfoRow label="Planted" value="2013" />
                <InfoRow label="With" value="Pastor Georgie Kelsey" />
              </div>
            </aside>

            <section className="md:col-span-8 font-serif text-lg leading-[1.75] text-ink/90 space-y-6 max-w-prose">
              <p className="drop-cap">
                I&rsquo;m <strong>Josh Kelsey</strong>. My wife <strong>Georgie</strong> and I planted FOUNT Church
                in Brooklyn, New York in February of 2013 with our six-month-old son Brooks. We arrived in
                snow-covered NYC from the sunny beaches of Sydney with a vision God had been shaping in us
                for three years: to plant a church in one of the hardest and most beautiful cities in the
                world, and to do it by gathering people around tables before altars.
              </p>
              <p>
                FOUNT began with five people at a{" "}
                <a href="/dinner-parties" className="link-underline text-accent">Dinner Party</a>.
                That remains the DNA of who we are. Thirteen years later we&rsquo;re still meeting on
                Wednesdays in homes and parks and rooftops across New York, still believing that
                the gospel moves best through real, honest community around a table.
              </p>
              <p>
                Before COVID, we watched God move powerfully across New York, expanding to five
                locations spanning the boroughs of NYC. When the pandemic upended everything, we
                had to rebuild from the ground up, and in that same season, God graced us to step
                out even further. We planted FOUNT Paris and FOUNT Berlin, which are now
                self sustaining churches thriving in their own way.
              </p>
              <p>
                Three of the most challenging cities in the Western world. Three places where we
                have watched the Dinner Party model take root and do what only it can do: gather
                strangers around a table and send them out as family. Hard cities have become
                fertile ground for the Kingdom and His church, and it has been one of the great
                honors of our lives to be part of it.
              </p>
              <p>
                This site is a place where I hope to serve you. You&rsquo;ll find{" "}
                <a href="/sermons" className="link-underline text-accent">sermons</a> and teaching
                from across thirteen years of ministry, longer form{" "}
                <a href="/writing" className="link-underline text-accent">writing</a> on theology,
                pastoral life, and the gospel, plus resources on the{" "}
                <a href="/dinner-parties" className="link-underline text-accent">Dinner Party</a>{" "}
                model we&rsquo;ve spent over a decade developing. If any of it is useful to you, your
                church, or the people you love, take it, use it, share it. It&rsquo;s all here
                to point to Jesus.
              </p>

              <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
                The name FOUNT
              </h2>
              <p>
                God gave Georgie a vision for our church&rsquo;s name through the beloved hymn{" "}
                <em>Come Thou Fount of Every Blessing</em>. From those words came the conviction that
                still shapes everything we do. Jesus is the Fount. And out of Him, the church
                becomes a fount too, every life an overflow, every church a river, every city a
                place where He can be tasted and seen. That&rsquo;s the call, and it&rsquo;s what
                FOUNT is for.
              </p>

              <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
                Beyond the pulpit
              </h2>
              <p>
                Outside of FOUNT, I&rsquo;m a husband, a father, a runner (marathon-adjacent, on a
                good year), and a builder of things. I care about the intersection of theology and
                technology, the future of the church in the AI era, and how leaders can stay deeply
                rooted while moving fast.
              </p>
              <p>
                I split my time between New York City and Sydney, where I grew up. My three kids
                keep me honest, humbled, and occasionally late.
              </p>

              <h2 className="font-display text-3xl text-ink mt-14 mb-2 leading-tight">
                Get in touch
              </h2>
              <p>
                For speaking requests, interview inquiries, partnership opportunities, or simply to
                say hello, the best way to reach me is through the{" "}
                <a href="/contact" className="link-underline text-accent">contact page</a>.
                For anything related to FOUNT Church directly, including Sunday services, Dinner
                Parties, prayer requests, or general ministry questions, please visit{" "}
                <a href="https://fount.nyc" className="link-underline text-accent">fount.nyc</a>.
              </p>
            </section>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-baseline gap-3 border-b border-border/60 pb-3">
      <dt className="uppercase text-[10px] tracking-[0.22em] text-muted w-20 shrink-0">{label}</dt>
      <dd className="text-ink">{value}</dd>
    </div>
  );
}
