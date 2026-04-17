import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain selection-accent">
      <Nav />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-28 pb-24 md:pb-36">
            <div className="grid md:grid-cols-12 gap-10 items-end">
              <div className="md:col-span-9 reveal">
                <p className="uppercase text-[11px] md:text-xs tracking-[0.22em] text-accent font-sans mb-6 md:mb-8">
                  Pastor · Teacher · Founder of FOUNT Church NYC
                </p>
                <h1 className="font-display text-display-xl font-medium text-ink">
                  Josh
                  <span className="italic text-accent"> Kelsey</span>
                </h1>
                <p className="mt-8 md:mt-10 max-w-prose font-serif text-lg md:text-xl leading-relaxed text-ink/90">
                  Founding and lead pastor of{" "}
                  <a href="https://fount.nyc" className="link-underline text-accent">
                    FOUNT Church
                  </a>{" "}
                  in New York City, planted in 2013 with my wife and co-pastor{" "}
                  <a href="https://georgiekelsey.com" className="link-underline text-accent">
                    Georgie Kelsey
                  </a>
                  . Teaching and writing on the gospel, the city, and a life shaped by Jesus,
                  the true FOUNT.
                </p>
              </div>

              <div className="md:col-span-3 md:pl-6 reveal" style={{ animationDelay: "0.2s" }}>
                <figure className="aspect-[3/4] w-full bg-soft border border-border rounded-sm overflow-hidden relative">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: "url(/josh-kelsey.jpg)" }}
                    aria-hidden
                  />
                  <figcaption className="sr-only">Josh Kelsey, lead pastor of FOUNT Church NYC</figcaption>
                </figure>
              </div>
            </div>
          </div>
        </section>

        {/* INTRO PARAGRAPH */}
        <section className="border-y border-border/60 bg-soft/40">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">
              A Note From Josh
            </div>
            <article className="max-w-prose mx-auto font-serif text-lg md:text-xl leading-[1.7] text-ink/90 reveal">
              <p className="drop-cap">
                For over thirteen years, I&rsquo;ve had the privilege of pastoring in New York City,
                a city I love with everything in me. My wife Georgie and I planted{" "}
                <a href="https://fount.nyc" className="link-underline">FOUNT Church</a>{" "}
                in 2013, believing that Jesus could be met around a table and that the gospel could
                shape a city through people who love Him and love each other. That work is not
                finished. It may never be.
              </p>
              <p className="mt-6">
                The name of our church came through a vision God gave Georgie from the hymn{" "}
                <em>Come Thou Fount of Every Blessing</em>. Our conviction is this.{" "}
                <strong className="font-semibold">Jesus is the Fount.</strong>{" "}
                And out of Him, the church becomes a fount to the city. Every song, every sermon,
                every Dinner Party, every Sunday, exists for that.
              </p>
              <p className="mt-6">
                This site is where I share teaching, writing, sermons, and conversations on the gospel,
                the city, and what it means to live a life genuinely shaped by Jesus. Thanks for being here.
              </p>
            </article>
          </div>
        </section>

        {/* FEATURE GRID */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">Where to begin</div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:gap-10">
            <FeatureCard
              eyebrow="Essays & Reflections"
              title="Writing"
              body={<>Longer pieces on theology, pastoral life, New York, marriage, and what I&rsquo;m learning.</>}
              href="/writing"
            />
            <FeatureCard
              eyebrow="Culture & Endurance"
              title="For Leaders"
              body={<>The long work of leading people and building culture. Resources for pastors, planters, and team leads.</>}
              href="/for-leaders"
            />
            <FeatureCard
              eyebrow="Training Library"
              title="Dinner Parties"
              body={<>The engine behind how we plant and how we pastor. A complete training on the small group model we&rsquo;ve built three churches on.</>}
              href="/dinner-parties"
            />
            <FeatureCard
              eyebrow="Training Library"
              title="Church Planting"
              body={<>Thirteen years, three cities. Teaching for the pastors and leaders called to plant.</>}
              href="/church-planting"
            />
          </div>
        </section>

        {/* ABOUT FOUNT BLOCK */}
        <section className="bg-ink text-paper">
          <div className="max-w-content mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10">
            <div className="md:col-span-5">
              <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-paper/60 mb-6">
                About FOUNT Church
              </p>
              <h2 className="font-display text-display-lg leading-[1.02]">
                One church.<br />
                One city.<br />
                <span className="italic text-paper/80">One Fount.</span>
              </h2>
            </div>
            <div className="md:col-span-7 font-serif text-lg leading-relaxed text-paper/90">
              <p>
                FOUNT Church was planted in New York City in 2013 by Pastors Josh Kelsey and Georgie
                Kelsey. The name came through a vision God gave Georgie from the beloved hymn{" "}
                <em>Come Thou Fount of Every Blessing</em>.
              </p>
              <p className="mt-5">
                Jesus is the Fount. And out of Him, the church becomes a fount. Every life an
                overflow, every church a river, every city a place where He can be tasted and
                seen. That&rsquo;s the call. Every song, every sermon, every Dinner Party, every
                gathering at FOUNT exists for that one thing. That He would be known, and that
                out of Him, rivers of living water would flow to the city.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://fount.nyc"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-paper text-ink rounded-full hover:bg-accent hover:text-paper transition-colors text-sm font-sans"
                >
                  Visit fount.nyc <span aria-hidden>→</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32">
          <div className="max-w-2xl">
            <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-6">Stay in touch</p>
            <h2 className="font-display text-display-lg leading-[1.05] text-ink mb-6">
              Subscribe for new writing, sermons, and teaching.
            </h2>
            <p className="font-serif text-lg text-ink/80 mb-8">
              An occasional email, never sold, never spam. Just my latest essays,
              sermon series, and what I&rsquo;m thinking about from NYC and beyond.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg" action="/api/subscribe" method="POST">
              <label htmlFor="email" className="sr-only">Email address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="you@example.com"
                className="flex-1 px-5 py-3.5 bg-soft border border-border rounded-full font-sans text-sm focus:outline-none focus:border-ink focus:ring-0"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-ink text-paper rounded-full font-sans text-sm hover:bg-accent transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function FeatureCard({
  eyebrow,
  title,
  body,
  href,
}: {
  eyebrow: string;
  title: string;
  body: React.ReactNode;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block border-t border-border pt-8 hover:border-ink transition-colors"
    >
      <p className="uppercase text-[10px] tracking-[0.22em] font-sans text-muted mb-4">
        {eyebrow}
      </p>
      <h3 className="font-display text-3xl md:text-4xl leading-tight text-ink mb-4 group-hover:text-accent transition-colors">
        {title}
      </h3>
      <p className="font-serif text-ink/75 leading-relaxed">{body}</p>
      <p className="mt-5 text-sm font-sans text-ink/60 group-hover:text-accent transition-colors">
        Explore <span aria-hidden>→</span>
      </p>
    </Link>
  );
}
