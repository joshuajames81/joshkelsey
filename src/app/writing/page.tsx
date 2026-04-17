import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Writing by Josh Kelsey",
  description:
    "Essays and reflections by Pastor Josh Kelsey on theology, pastoral life, New York City, marriage, family, and a life shaped by Jesus.",
  alternates: { canonical: "https://joshkelsey.org/writing" },
};

const posts = [
  {
    slug: "the-church-is-not-the-fount",
    title: "The church is not the Fount",
    excerpt:
      "On the hymn that gave our church its name, the theology behind it, and why it matters more now than ever.",
    date: "April 2026",
    readTime: "6 min read",
  },
  {
    slug: "thirteen-years-in-nyc",
    title: "Thirteen years in New York City",
    excerpt:
      "What I&rsquo;ve learned about pastoring, planting, and loving a city that does not love back easily.",
    date: "March 2026",
    readTime: "9 min read",
  },
  {
    slug: "on-preaching-the-whole-text",
    title: "On preaching the whole text",
    excerpt:
      "Preaching isn&rsquo;t a question of style. It&rsquo;s a question of whose voice is supposed to be loudest in the room.",
    date: "February 2026",
    readTime: "7 min read",
  },
];

export default function WritingPage() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav />
      <main className="flex-1">
        <section className="max-w-content mx-auto px-6 md:px-10 pt-16 md:pt-24 pb-12">
          <p className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans mb-6">Essays & Reflections</p>
          <h1 className="font-display text-display-xl font-medium leading-[0.95] text-ink">
            Writing
          </h1>
          <p className="mt-8 max-w-prose font-serif text-lg md:text-xl text-ink/85 leading-relaxed">
            Longer pieces on theology, pastoral life, New York, marriage, family, and what I&rsquo;m
            thinking about, published when they&rsquo;re ready, not on a schedule.
          </p>
        </section>

        <section className="max-w-content mx-auto px-6 md:px-10 py-12">
          <div className="rule text-[11px] uppercase tracking-[0.22em] font-sans mb-12">Recent</div>
          <ul className="divide-y divide-border/60">
            {posts.map((p) => (
              <li key={p.slug} className="py-8 md:py-10">
                <Link href={`/writing/${p.slug}`} className="group grid md:grid-cols-12 gap-6">
                  <div className="md:col-span-3 text-sm font-sans">
                    <p className="uppercase text-[10px] tracking-[0.22em] text-muted">{p.date}</p>
                    <p className="mt-1 text-ink/70">{p.readTime}</p>
                  </div>
                  <div className="md:col-span-9">
                    <h2
                      className="font-display text-3xl md:text-4xl leading-tight text-ink group-hover:text-accent transition-colors"
                      dangerouslySetInnerHTML={{ __html: p.title }}
                    />
                    <p
                      className="mt-4 font-serif text-ink/85 leading-relaxed max-w-prose"
                      dangerouslySetInnerHTML={{ __html: p.excerpt }}
                    />
                    <p className="mt-5 text-sm font-sans text-ink/60 group-hover:text-accent transition-colors">
                      Read <span aria-hidden>→</span>
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}
