import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact Josh Kelsey",
  description:
    "Contact Pastor Josh Kelsey for speaking requests, interview inquiries, and partnership opportunities. For FOUNT Church questions, visit fount.nyc.",
  alternates: { canonical: "https://joshkelsey.org/contact" },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-24">
          <div className="max-w-3xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">Get in touch</p>
            <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink mb-10">
              Contact
            </h1>

            <div className="grid md:grid-cols-2 gap-10 md:gap-16 font-serif text-lg leading-relaxed text-ink/90">
              <div>
                <h2 className="font-display text-2xl text-ink mb-3">Speaking & interviews</h2>
                <p className="mb-4">
                  For speaking requests, podcast interviews, media inquiries, and partnership
                  opportunities, please email{" "}
                  <a href="mailto:hello@joshkelsey.org" className="link-underline text-accent">
                    hello@joshkelsey.org
                  </a>
                  .
                </p>
              </div>
              <div>
                <h2 className="font-display text-2xl text-ink mb-3">FOUNT Church</h2>
                <p className="mb-4">
                  For questions about Sunday services, Dinner Parties, prayer requests, or anything
                  else related to FOUNT Church directly, please visit{" "}
                  <a href="https://fount.nyc" className="link-underline text-accent">fount.nyc</a>.
                </p>
              </div>
            </div>

            <form
              className="mt-16 grid gap-5 max-w-xl"
              action="/api/contact"
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2 font-sans">Name</label>
                <input
                  id="name" name="name" type="text" required
                  className="w-full px-4 py-3 bg-soft border border-border rounded-sm font-serif focus:outline-none focus:border-ink"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2 font-sans">Email</label>
                <input
                  id="email" name="email" type="email" required
                  className="w-full px-4 py-3 bg-soft border border-border rounded-sm font-serif focus:outline-none focus:border-ink"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2 font-sans">Subject</label>
                <input
                  id="subject" name="subject" type="text" required
                  className="w-full px-4 py-3 bg-soft border border-border rounded-sm font-serif focus:outline-none focus:border-ink"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs uppercase tracking-[0.18em] text-muted mb-2 font-sans">Message</label>
                <textarea
                  id="message" name="message" rows={6} required
                  className="w-full px-4 py-3 bg-soft border border-border rounded-sm font-serif focus:outline-none focus:border-ink resize-y"
                />
              </div>
              <button
                type="submit"
                className="self-start px-7 py-3 bg-ink text-paper rounded-full text-sm font-sans hover:bg-accent transition-colors"
              >
                Send message
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
