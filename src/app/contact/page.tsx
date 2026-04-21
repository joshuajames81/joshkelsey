import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Stay in Touch · Josh Kelsey",
  description:
    "Subscribe to weekly notes from Josh Kelsey. Writing, teaching, and reflections on faith, leadership, and church planting from the founding pastor of FOUNT Church NYC.",
  alternates: { canonical: "https://joshkelsey.org/contact" },
  openGraph: {
    title: "Stay in Touch · Josh Kelsey",
    description:
      "Weekly writing and teaching from Josh Kelsey, Founding Pastor of FOUNT Church NYC.",
    url: "https://joshkelsey.org/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <article className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <header className="mb-16 md:mb-20 max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">
              Stay in touch
            </p>
            <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink">
              Weekly notes,
              <br />
              <span className="italic">and the occasional note back.</span>
            </h1>
          </header>

          <div className="grid md:grid-cols-12 gap-12">
            <section className="md:col-span-7 space-y-8">
              <div>
                <h2 className="font-display text-3xl text-ink mb-4 leading-tight">
                  Weekly Notes
                </h2>
                <p className="font-serif text-lg leading-[1.75] text-ink/90 max-w-prose mb-6">
                  I send a short weekly email with my latest writing, teaching,
                  and reflections on faith, leadership, and church planting.
                </p>
                <div className="bg-soft border border-border p-6 md:p-8">
                  <iframe
                    src="https://joshkelsey.substack.com/embed"
                    width="100%"
                    height="150"
                    style={{ border: "none", background: "transparent" }}
                    frameBorder="0"
                    scrolling="no"
                  ></iframe>
                </div>
              </div>

              <div className="pt-8">
                <h2 className="font-display text-3xl text-ink mb-4 leading-tight">
                  Speaking, writing, and partnerships
                </h2>
                <p className="font-serif text-lg leading-[1.75] text-ink/90 max-w-prose">
                  For speaking requests, book interviews, podcast invitations,
                  and partnership opportunities, please email{" "}
                  <a href="mailto:info@fount.nyc" className="link-underline text-accent">
                    info@fount.nyc
                  </a>
                  .
                </p>
                <p className="font-serif text-lg leading-[1.75] text-ink/90 max-w-prose mt-4">
                  For all questions about FOUNT Church, Sunday services, Dinner
                  Parties, or pastoral care, please visit{" "}
                  <a href="https://fount.nyc" className="link-underline text-accent">
                    fount.nyc
                  </a>
                  .
                </p>
              </div>
            </section>

            <aside className="md:col-span-5">
              <div className="bg-soft border border-border p-8">
                <h3 className="font-display text-2xl text-ink mb-4 leading-tight">
                  Follow along
                </h3>
                <p className="font-serif text-base text-ink/80 mb-6 leading-relaxed">
                  Writing, sermons, and notes from thirteen years of pastoring
                  in New York City.
                </p>
                <ul className="space-y-3 font-sans text-sm">
                  <li>
                    <a href="https://joshkelsey.substack.com" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      Substack
                    </a>
                  </li>
                  <li>
                    <a href="https://medium.com/@joshkelsey" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      Medium
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/josh--kelsey/" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/J_kelsey" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      X
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/jkelsey" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/pastorjoshkelsey" className="link-underline text-accent" target="_blank" rel="noopener noreferrer">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
