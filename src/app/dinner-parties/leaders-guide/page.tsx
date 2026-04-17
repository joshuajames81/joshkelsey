import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Leaders Guide (Free PDF Download)",
  description:
    "Download the Dinner Parties Leaders Guide, the practical PDF handout we give to every Dinner Party leader at FOUNT Church. Free, printable, and ready to use in your church.",
  alternates: { canonical: "https://joshkelsey.com/dinner-parties/leaders-guide" },
  openGraph: {
    title: "Leaders Guide (Free PDF Download) | Josh Kelsey",
    description:
      "The practical PDF handout we give to every Dinner Party leader at FOUNT.",
    url: "https://joshkelsey.com/dinner-parties/leaders-guide",
  },
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-14 md:mb-20 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Link
                href="/dinner-parties"
                className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans hover:underline"
              >
                Dinner Parties
              </Link>
              <span className="text-muted font-sans text-xs" aria-hidden>/</span>
              <p className="uppercase text-[11px] tracking-[0.22em] text-muted font-sans">
                Reference
              </p>
            </div>
            <h1 className="font-display text-display-lg md:text-display-xl font-medium leading-[1] text-ink mb-8">
              Leaders
              <br />
              <span className="italic text-accent">Guide.</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-ink/80 leading-relaxed max-w-prose">
              A twelve-page practical handout designed for Dinner Party leaders. The
              same document we give our leaders at FOUNT Church. Free to download,
              print, and use in your church.
            </p>
          </header>

          <section className="grid md:grid-cols-12 gap-10 md:gap-16">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl text-ink mb-6 leading-tight">
                What&rsquo;s inside
              </h2>
              <div className="font-serif text-lg text-ink/85 leading-relaxed space-y-5">
                <p>
                  This is the practical, printable companion to the full training
                  library. Every Dinner Party leader at FOUNT receives a copy. It
                  covers the essentials in a form leaders can reference quickly, keep
                  on their desk, and share with rising leaders they&rsquo;re raising
                  up.
                </p>
                <div>
                  <p className="font-sans uppercase text-xs tracking-[0.18em] text-accent mb-3">
                    Included
                  </p>
                  <ul className="list-none space-y-2.5">
                    <li>
                      <strong>Vision.</strong> The heart and purpose of a Dinner Party.
                    </li>
                    <li>
                      <strong>Structure.</strong> Welcome, Party, Discussion, Prayer.
                    </li>
                    <li>
                      <strong>Leadership Roles.</strong> The 2x2 model. Host,
                      Hospitality, Follow Up, Discussion.
                    </li>
                    <li>
                      <strong>Hospitality.</strong> Keys to a great meal and top tips
                      for hosts.
                    </li>
                    <li>
                      <strong>Discussion.</strong> Preparation, atmosphere, and the
                      keys to leading well.
                    </li>
                    <li>
                      <strong>Follow Up.</strong> A weekly timeline, call scripts, and
                      reporting practices.
                    </li>
                  </ul>
                </div>
                <p>
                  Use it as-is. Adapt it for your context. Rebrand it if you&rsquo;d
                  like. Our only ask is that it serves your leaders well and ultimately
                  points people to Jesus.
                </p>
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="/downloads/FOUNT-dinner-parties-leaders-guide.pdf"
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
                >
                  Download the PDF <span aria-hidden>↓</span>
                </a>
                <a
                  href="/downloads/FOUNT-dinner-parties-leaders-guide.pdf"
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-sans hover:bg-ink hover:text-paper transition-colors"
                >
                  Open in browser <span aria-hidden>→</span>
                </a>
              </div>
            </div>

            <aside className="md:col-span-5">
              <div className="border border-border bg-soft/50 p-8">
                <p className="uppercase text-[11px] tracking-[0.22em] font-sans text-muted mb-4">
                  File details
                </p>
                <dl className="font-serif text-ink/85 leading-relaxed space-y-3">
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted">Format</dt>
                    <dd>PDF</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted">Pages</dt>
                    <dd>12</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted">Size</dt>
                    <dd>~93 KB</dd>
                  </div>
                  <div className="flex justify-between border-b border-border/60 pb-2">
                    <dt className="text-muted">Price</dt>
                    <dd>Free</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted">License</dt>
                    <dd>Use freely</dd>
                  </div>
                </dl>
              </div>

              <div className="mt-6 p-6 border-l-2 border-accent bg-paper">
                <p className="font-serif text-ink/85 leading-relaxed text-base italic">
                  &ldquo;This is genuinely the guide we hand our leaders. No gate, no
                  email form, no upsell. If it serves the church, that&rsquo;s the
                  win.&rdquo;
                </p>
                <p className="mt-3 uppercase text-[10px] tracking-[0.22em] font-sans text-muted">
                  Josh Kelsey
                </p>
              </div>
            </aside>
          </section>

          <section className="mt-20 pt-10 border-t border-border/70">
            <h2 className="font-display text-3xl text-ink mb-6 leading-tight max-w-prose">
              Pair it with the full training library
            </h2>
            <p className="font-serif text-lg text-ink/80 leading-relaxed max-w-prose mb-8">
              The PDF is the practical handout. The full training library goes deeper
              into every topic, with the theology, the stories, and the lessons from
              thirteen years of doing this.
            </p>
            <Link
              href="/dinner-parties"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-sans hover:bg-ink hover:text-paper transition-colors"
            >
              Browse the training library <span aria-hidden>→</span>
            </Link>
          </section>
        </article>
      </main>
      <Footer />
    </div>
  );
}
