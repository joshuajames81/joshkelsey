import Link from "next/link";

/**
 * Site footer. Giant "Pull up a chair." statement, descriptive link columns
 * covering every route (so nothing loses links or crawlability), a Substack
 * signup, and a small monogram.
 *
 * Note: the canonical Person + WebSite JSON-LD lives once in the root layout
 * (`/#person`). This footer intentionally carries no Person block — the old
 * duplicate, unlinked Person schema was removed (SEO fix #5).
 */
export default function Footer() {
  const year = 2026;

  return (
    <footer className="bg-deep text-paper pt-[clamp(5rem,10vw,9rem)] pb-10">
      <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
        <div className="font-disp font-extrabold text-[clamp(3.2rem,15vw,14rem)] leading-[0.82] tracking-[-0.045em]">
          <Link href="/contact" data-hover className="hover:text-red transition-colors">
            Pull up a<br />
            chair.
          </Link>
        </div>

        {/* Substack signup */}
        <div className="mt-[clamp(3rem,6vw,5rem)] grid md:grid-cols-2 gap-8 items-center border-t border-white/[0.14] pt-10">
          <div>
            <div className="mono !text-white/60 mb-2">Newsletter</div>
            <h2 className="font-disp font-extrabold text-[clamp(1.6rem,3.5vw,2.6rem)] leading-[0.95] tracking-[-0.03em]">
              New writing, <em className="font-serif italic font-normal text-red">in your inbox.</em>
            </h2>
          </div>
          <div className="bg-soft rounded-lg p-4">
            <iframe
              title="Subscribe on Substack"
              src="https://joshuakelsey.substack.com/embed"
              width="100%"
              height="120"
              style={{ border: "none", background: "transparent" }}
              scrolling="no"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-[clamp(3rem,6vw,4rem)] pt-8 border-t border-white/[0.14]">
          <div>
            <div className="mono !text-white/[0.42] mb-4">Get in touch</div>
            <FooterLink href="/contact">Speaking &amp; interviews</FooterLink>
            <FooterLink href="/about">About Josh Kelsey</FooterLink>
          </div>
          <div>
            <div className="mono !text-white/[0.42] mb-4">Read</div>
            <FooterLink href="/writing">Writing &amp; essays</FooterLink>
            <FooterLink href="/press">Press &amp; media</FooterLink>
            <FooterLink href="/podcast">Podcast</FooterLink>
            <FooterLink href="/sermons">Sermons</FooterLink>
          </div>
          <div>
            <div className="mono !text-white/[0.42] mb-4">Do</div>
            <FooterLink href="/dinner-parties">Dinner Parties</FooterLink>
            <FooterLink href="/church-planting">Church Planting</FooterLink>
            <FooterLink href="/for-leaders">For Leaders</FooterLink>
          </div>
          <div>
            <div className="mono !text-white/[0.42] mb-4">More</div>
            <FooterLink href="/running">Running</FooterLink>
            <FooterExternal href="https://fount.nyc">FOUNT Church NYC</FooterExternal>
            <FooterExternal href="https://joshuakelsey.substack.com">Substack</FooterExternal>
          </div>
        </div>

        <div className="mt-10 flex items-center gap-4 font-mono text-[0.64rem] tracking-[0.08em] text-white/[0.42]">
          <span className="font-disp font-extrabold text-2xl text-paper">
            JK<span className="text-red">.</span>
          </span>
          © {year} Josh Kelsey
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block font-serif text-base mb-2 text-white/[0.82] hover:text-white transition-colors"
    >
      {children}
    </Link>
  );
}

function FooterExternal({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="me noopener noreferrer"
      className="block font-serif text-base mb-2 text-white/[0.82] hover:text-white transition-colors"
    >
      {children}
    </a>
  );
}
