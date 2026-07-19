import Link from "next/link";

const SUBSTACK = "https://joshuakelsey.substack.com";

/**
 * Velocity footer: giant "Pull up a chair.", the masked signature mark, and
 * link columns covering every route so nothing loses links or crawlability.
 * The canonical entity graph lives once in the root layout (#person, #georgie,
 * #fount, #website); this footer carries no Person block (the old duplicate,
 * unlinked Person schema is gone — SEO fix 5).
 */
export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap">
        <div className="hello">
          <Link href="/contact" data-h>
            Pull up a chair.
          </Link>
        </div>
        <div className="cols">
          <div>
            <div className="h">Get in touch</div>
            <Link href="/contact" data-h>Speaking &amp; interviews</Link>
            <Link href="/about" data-h>About Josh Kelsey</Link>
            <a href={SUBSTACK} data-h target="_blank" rel="me noopener noreferrer">Subscribe</a>
          </div>
          <div>
            <div className="h">Read</div>
            <Link href="/writing" data-h>Writing</Link>
            <Link href="/press" data-h>Press</Link>
            <Link href="/podcast" data-h>Podcast</Link>
            <Link href="/sermons" data-h>Sermons</Link>
          </div>
          <div>
            <div className="h">Do</div>
            <Link href="/dinner-parties" data-h>Dinner Parties</Link>
            <Link href="/church-planting" data-h>Church Planting</Link>
            <Link href="/for-leaders" data-h>For Leaders</Link>
          </div>
          <div>
            <div className="h">More</div>
            <Link href="/running" data-h>Running</Link>
            <a href="https://fount.nyc" data-h target="_blank" rel="noopener noreferrer">FOUNT</a>
            <a href={SUBSTACK} data-h target="_blank" rel="me noopener noreferrer">Substack</a>
          </div>
        </div>
        <div className="fine">
          <span className="sigmark" aria-hidden />
          © 2026 Josh Kelsey
        </div>
      </div>
    </footer>
  );
}
