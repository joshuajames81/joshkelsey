import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { graphJson, webPageNode } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Writing",
  description:
    "Essays and reflections by Pastor Josh Kelsey on theology, pastoral life, New York City, marriage, family, and a life shaped by Jesus.",
  alternates: { canonical: "https://joshkelsey.org/writing" },
};

const schema = graphJson([
  webPageNode("/writing", "Writing | Josh Kelsey", "Essays and reflections by Josh Kelsey."),
]);

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  cover: string;
  alt: string;
};

const featured: Post = {
  slug: "worry-is-the-misuse-of-your-imagination",
  title: "Worry Is the Misuse of Your Imagination",
  excerpt:
    "One part of the brain holds your memories, imagines what does not yet exist, and teaches you to be afraid. So worry is not an intruder. It is your highest faculty, aimed the wrong way.",
  date: "July 2026",
  readTime: "7 min read",
  cover: "/site-images/featured-worry.jpg",
  alt: "A lone figure in shadow, lit from behind",
};

const posts: Post[] = [
  {
    slug: "you-cant-make-it-grow",
    title: "You Can't Make It Grow",
    excerpt:
      "On auxin, the Greek verb Paul used in 1 Corinthians 3:6, and the one thing none of us can actually do: make the growth happen.",
    date: "May 2026",
    readTime: "6 min read",
    cover: "/site-images/land-regrowth.jpg",
    alt: "New growth returning to cleared land",
  },
  {
    slug: "the-press",
    title: "The Press",
    excerpt:
      "Gethsemane means press of oils. On the Hebrew gat shemanim, Isaiah's oil of gladness, and why the oil of joy is the oil of crushing.",
    date: "May 2026",
    readTime: "6 min read",
    cover: "/site-images/rome-columns.jpg",
    alt: "Ancient stone columns in low light",
  },
  {
    slug: "the-first-and-the-last",
    title: "The First and the Last",
    excerpt:
      "One ran 1:59:30. The other ran 12:16:00. On Sabastian Sawe, Clair Roberts, and what both of them teach us about finishing, faith, and the race called life.",
    date: "April 2026",
    readTime: "8 min read",
    cover: "/site-images/airplane-window.jpg",
    alt: "A view of the horizon through an airplane window",
  },
  {
    slug: "the-church-is-not-the-fount",
    title: "The church is not the Fount",
    excerpt:
      "On the hymn that gave our church its name, the theology behind it, and why it matters more now than ever.",
    date: "April 2026",
    readTime: "6 min read",
    cover: "/site-images/nyc-follow-jesus-sign.jpg",
    alt: "A hand painted sign on a New York City street",
  },
  {
    slug: "thirteen-years-in-nyc",
    title: "Thirteen years in New York City",
    excerpt:
      "What I've learned about pastoring, planting, and loving a city that does not love back easily.",
    date: "March 2026",
    readTime: "9 min read",
    cover: "/site-images/nyc-williamsburg-bridge.jpg",
    alt: "The Williamsburg Bridge over the East River",
  },
  {
    slug: "on-preaching-the-whole-text",
    title: "On preaching the whole text",
    excerpt:
      "Preaching isn't a question of style. It's a question of whose voice is supposed to be loudest in the room.",
    date: "February 2026",
    readTime: "7 min read",
    cover: "/site-images/bible-silhouettes.jpg",
    alt: "Silhouetted figures against soft light",
  },
];

export default function WritingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />
      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        <section className="wrap" style={{ paddingBottom: "clamp(2rem,4vw,3rem)" }}>
          <p className="mono" data-r style={{ marginBottom: "1.4rem" }}>
            Essays &amp; reflections
          </p>
          <h1
            className="font-disp"
            data-r
            style={{ fontWeight: 900, fontSize: "clamp(3rem,11vw,10rem)", lineHeight: 0.9, letterSpacing: "-0.045em" }}
          >
            Writing
          </h1>
          <p
            className="font-serif"
            data-r
            style={{ marginTop: "1.4rem", maxWidth: "52ch", fontSize: "1.28rem", color: "rgba(241,239,230,0.75)" }}
          >
            Longer pieces on theology, pastoral life, New York, marriage, family, and what I&rsquo;m
            thinking about, published when they&rsquo;re ready, not on a schedule.
          </p>
        </section>

        <section className="writing" style={{ borderTop: "none", paddingTop: 0 }}>
          <div className="wrap">
            <Link className="wfeat" href={`/writing/${featured.slug}`} data-h data-r>
              <div className="art">
                <div className="ph" style={{ backgroundImage: `url('${featured.cover}')` }} role="img" aria-label={featured.alt} />
                <div className="rd"><span>Read the essay →</span></div>
              </div>
              <div>
                <span className="tag">Latest</span>
                <h3 data-dec>{featured.title}</h3>
                <p>{featured.excerpt}</p>
                <div className="meta">
                  {featured.date} · {featured.readTime}
                </div>
              </div>
            </Link>

            <div className="wlist">
              {posts.map((p, i) => (
                <Link key={p.slug} className="wrow" href={`/writing/${p.slug}`} data-h data-r>
                  <div className="cover" style={{ backgroundImage: `url('${p.cover}')` }} role="img" aria-label={p.alt} />
                  <span className="wn">{String(i + 2).padStart(2, "0")}</span>
                  <span className="wt" data-dec>{p.title}</span>
                  <span className="wm">{p.date} · {p.readTime}</span>
                  <span className="wa">→</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <Subscribe />
      </main>
      <Footer />
    </>
  );
}
