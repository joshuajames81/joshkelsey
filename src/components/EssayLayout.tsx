import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";
import { articleNode, breadcrumbNode, webPageNode, graphJson } from "@/lib/schema";
import { relatedEssays } from "@/lib/essays";

/**
 * Reusable dark velocity reading template for every essay under /writing.
 * Archivo title (one word lime), Space Mono meta line, Instrument Serif
 * standfirst, one grayscale lead image, serif body at ~40rem on the dark
 * canvas, a pull quote (passed in the body), related essays, then the
 * newsletter and the signature. Emits WebPage + Article + BreadcrumbList JSON
 * referencing the canonical entities by @id.
 */
export default function EssayLayout({
  slug,
  titleLead,
  titleAccent,
  titleTail,
  kicker,
  standfirst,
  leadImage,
  leadAlt,
  byline = "Josh Kelsey",
  bylineMeta = "New York",
  datePublished,
  dateModified,
  wordCount,
  keywords,
  description,
  children,
}: {
  slug: string;
  titleLead: string;
  titleAccent: string;
  titleTail?: string;
  kicker: React.ReactNode;
  standfirst: React.ReactNode;
  leadImage: string;
  leadAlt: string;
  byline?: string;
  bylineMeta?: string;
  datePublished: string;
  dateModified?: string;
  wordCount?: number;
  keywords?: string[];
  description: string;
  children: React.ReactNode;
}) {
  const path = `/writing/${slug}`;
  const headline = `${titleLead}${titleAccent}${titleTail || ""}`.replace(/\s+/g, " ").trim();
  const schema = graphJson([
    webPageNode(path, `${headline} | Josh Kelsey`, description),
    articleNode({
      path,
      headline,
      description,
      image: leadImage,
      datePublished,
      dateModified,
      wordCount,
      articleSection: "Writing",
      keywords,
    }),
    breadcrumbNode([
      { name: "Home", path: "/" },
      { name: "Writing", path: "/writing" },
      { name: headline, path },
    ]),
  ]);

  const related = relatedEssays(slug, 3);

  return (
    <div className="reading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: schema }} />
      <Nav variant="solid" />

      <main style={{ paddingTop: "clamp(5rem,10vw,8rem)" }}>
        <section className="wrap">
          <div className="mono" data-r style={{ marginBottom: "1.6rem" }}>
            {kicker}
          </div>
          <h1
            className="font-disp"
            data-r
            style={{
              fontWeight: 900,
              fontSize: "clamp(2.6rem,8vw,7rem)",
              lineHeight: 0.9,
              letterSpacing: "-0.045em",
              maxWidth: "18ch",
            }}
          >
            {titleLead}
            <em className="font-serif flare" style={{ fontStyle: "italic", fontWeight: 400 }}>
              {titleAccent}
            </em>
            {titleTail}
          </h1>
          <p
            className="font-serif"
            data-r
            style={{
              fontStyle: "italic",
              fontSize: "clamp(1.2rem,2vw,1.7rem)",
              color: "rgba(241,239,230,0.72)",
              maxWidth: "42ch",
              marginTop: "1.6rem",
              lineHeight: 1.4,
            }}
          >
            {standfirst}
          </p>
          <div className="by" data-r style={{ marginTop: "2rem", display: "flex", gap: "1.2rem", alignItems: "center" }}>
            <span className="font-disp" style={{ fontWeight: 800, fontSize: "1rem" }}>{byline}</span>
            <span className="mono">{bylineMeta}</span>
          </div>
        </section>

        <div className="wrap">
          <figure data-r style={{ margin: "clamp(2rem,5vw,4rem) 0" }}>
            <div
              className="photo"
              style={{ width: "100%", aspectRatio: "16 / 8", backgroundImage: `url('${leadImage}')` }}
              role="img"
              aria-label={leadAlt}
            />
          </figure>
        </div>

        <article style={{ paddingBottom: "clamp(3rem,7vw,6rem)" }}>
          <div className="wrap">
            <div className="col">{children}</div>
          </div>
        </article>

        {/* Related essays */}
        <section className="wrap" style={{ paddingBottom: "clamp(3rem,6vw,5rem)" }}>
          <div className="mono" style={{ marginBottom: "1.4rem" }}>Keep reading</div>
          <div className="wlist">
            {related.map((e, i) => (
              <Link key={e.slug} className="wrow" href={`/writing/${e.slug}`} data-h>
                <span className="wn">{String(i + 1).padStart(2, "0")}</span>
                <span className="wt" data-dec>{e.title}</span>
                <span className="wm">{e.meta}</span>
                <span className="wa">→</span>
              </Link>
            ))}
          </div>
          <p style={{ marginTop: "1.6rem" }}>
            <Link href="/writing" className="link-underline flare font-mono" style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
              All essays →
            </Link>
          </p>
        </section>

        <Subscribe
          heading={<>Keep <em>reading.</em></>}
          copy="New essays like this one, free, on Substack."
        />

        <div className="wrap" style={{ padding: "clamp(3rem,6vw,5rem) 0", textAlign: "center" }}>
          <span className="sigmark" aria-hidden style={{ opacity: 0.6 }} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
