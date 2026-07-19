import Link from "next/link";
import { featuredEssay, feedEssays } from "@/lib/essays";

/**
 * Writing feed: a large featured essay (Worry) whose image scales and fires a
 * lime Read tab on hover, then a list of the real essays that exist under
 * /writing. Each row decodes to lime (via global [data-dec]), its cover
 * reveals inside its own row and fades into the black, and the arrow fires.
 * Every row clicks through to the real article. Covers hidden on small screens.
 */
export default function WritingFeed() {
  const f = featuredEssay;
  return (
    <section className="writing">
      <div className="wrap">
        <div className="wh" data-r>
          <h2>Writing</h2>
          <Link href="/writing" data-h>All essays →</Link>
        </div>

        <Link className="wfeat" href={`/writing/${f.slug}`} data-h data-r>
          <div className="art">
            <div className="ph" style={{ backgroundImage: `url('${f.cover}')` }} role="img" aria-label={f.alt} />
            <div className="rd"><span>Read the essay →</span></div>
          </div>
          <div>
            <span className="tag">Latest</span>
            <h3 data-dec>{f.title}</h3>
            <p>{f.blurb}</p>
            <div className="meta">{f.meta}</div>
          </div>
        </Link>

        <div className="wlist">
          {feedEssays.map((e, i) => (
            <Link key={e.slug} className="wrow" href={`/writing/${e.slug}`} data-h data-r>
              <div className="cover" style={{ backgroundImage: `url('${e.cover}')` }} role="img" aria-label={e.alt} />
              <span className="wn">{String(i + 2).padStart(2, "0")}</span>
              <span className="wt" data-dec>{e.title}</span>
              <span className="wm">{e.meta}</span>
              <span className="wa">→</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
