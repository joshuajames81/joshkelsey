import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import HomeHero from "@/components/home/HomeHero";
import RunningSection from "@/components/home/RunningSection";

const WORRY_HREF = "/writing/worry-is-the-misuse-of-your-imagination";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col selection-accent">
      <Nav variant="overlay" />

      <main>
        {/* HERO — rotating quotes */}
        <HomeHero image="/images/hero.jpg" />

        {/* SEO / intro band — keyword-carrying H1 and paragraph, styled in */}
        <section className="border-b border-line py-[clamp(3.5rem,7vw,6rem)]">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <p className="mono mb-6" data-r>
              Pastor · Teacher · Founder of FOUNT Church NYC
            </p>
            <h1
              className="font-disp font-extrabold text-[clamp(2.6rem,9vw,7rem)] leading-[0.9] tracking-[-0.04em]"
              data-r
            >
              Josh <em className="font-serif italic font-normal text-red">Kelsey</em>
            </h1>
            <p
              className="font-serif text-lg md:text-xl leading-relaxed text-ink/90 max-w-[52ch] mt-6"
              data-r
            >
              Founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="link-underline text-red">
                FOUNT Church
              </a>{" "}
              in New York City, planted in 2013 with my wife and co-pastor{" "}
              <a href="https://fount.nyc" className="link-underline text-red">
                Georgie Kelsey
              </a>
              . Teaching and writing on ideas, leadership, the city, and a life shaped by
              Jesus, the true FOUNT.
            </p>
          </div>
        </section>

        {/* BANNER — word cycler */}
        <section className="banner">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="big" data-r>
              <span>Good ideas arrive</span>
              <span className="cycler">
                <span className="cw chroma">slowly.</span>
                <span className="cw chroma">uninvited.</span>
                <span className="cw chroma">at the table.</span>
                <span className="cw chroma">mid&#8209;run.</span>
              </span>
            </div>
            <div className="foot">
              <span className="mono" data-r>
                Writing · Dinner Parties · Church Planting
              </span>
              <span className="mono" data-r>
                For Leaders · Running
              </span>
            </div>
          </div>
        </section>

        {/* INTERACTIVE INDEX */}
        <section className="index">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <IndexRow
              no="01"
              href="/writing"
              title={<em>Writing</em>}
              desc="Essays on ideas, leadership, and creativity."
              go="Read →"
              image="/images/writing.jpg"
            />
            <IndexRow
              no="02"
              href="/dinner-parties"
              title={<>Dinner <em>Parties</em></>}
              desc="A course for gathering people around a table, and multiplying it."
              go="The method →"
              image="/images/dinner-parties.jpg"
            />
            <IndexRow
              no="03"
              href="/church-planting"
              title={<>Church Planting</>}
              desc="A training course for building a church from nothing, drawn from three cities over thirteen years."
              go="The course →"
              image="/images/church-planting.jpg"
            />
            <IndexRow
              no="04"
              href="/for-leaders"
              title={<>For <em>Leaders</em></>}
              desc="Culture, teams, and how they get built."
              go="Start here →"
              image="/images/for-leaders.jpg"
            />
          </div>
        </section>

        {/* RUNNING */}
        <RunningSection />

        {/* JOLT */}
        <section className="jolt">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="big" data-r>
              It all still <em>starts</em> at a table.
            </div>
            <div className="sub" data-r>
              The idea underneath everything here
            </div>
          </div>
        </section>

        {/* FEATURED ESSAY — Worry */}
        <section className="feat">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)] grid">
            <Link href={WORRY_HREF} className="art" data-hover aria-label="Read the essay: Worry Is the Misuse of Your Imagination">
              <div className="photo" style={{ backgroundImage: "url('/images/worry.jpg')" }} />
            </Link>
            <div data-r>
              <span className="tag">New essay</span>
              <h2 className="fh">
                Worry Is the Misuse of Your <em>Imagination</em>
              </h2>
              <p>
                One part of the brain holds your memories, imagines what does not yet exist, and
                teaches you to be afraid. So worry is not an intruder. It is your highest faculty,
                aimed the wrong way.
              </p>
              <Link href={WORRY_HREF} className="read" data-hover>
                Read the essay
              </Link>
            </div>
          </div>
        </section>

        {/* CLOSE */}
        <section className="close">
          <div
            className="photo par absolute inset-0 z-0"
            style={{ backgroundImage: "url('/images/close.jpg')" }}
            aria-hidden
          />
          <div className="veil" aria-hidden />
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="line" data-r>
              The work <em>outlasts</em> the worry.
            </div>
          </div>
        </section>

        {/* SUBSCRIBE */}
        <Subscribe />
      </main>

      <Footer />
    </div>
  );
}

function IndexRow({
  no,
  href,
  title,
  desc,
  go,
  image,
}: {
  no: string;
  href: string;
  title: React.ReactNode;
  desc: string;
  go: string;
  image: string;
}) {
  return (
    <Link href={href} className="row" data-hover>
      <span className="no">{no}</span>
      <span>
        <span className="t">{title}</span>
        <span className="d">{desc}</span>
      </span>
      <span className="go">{go}</span>
      <span className="peek">
        <span className="photo" style={{ backgroundImage: `url('${image}')` }} />
      </span>
    </Link>
  );
}
