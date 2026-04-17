import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-32 border-t border-border/70 bg-soft/40">
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2 max-w-sm">
            <h2 className="font-display text-2xl leading-tight mb-3">Josh Kelsey</h2>
            <p className="text-muted text-sm leading-relaxed">
              Founding and lead pastor of{" "}
              <a href="https://fount.nyc" className="underline decoration-border hover:text-accent">
                FOUNT Church
              </a>{" "}
              in New York City, which he planted with his wife and co-pastor{" "}
              <a href="https://georgiekelsey.com" className="underline decoration-border hover:text-accent">
                Georgie Kelsey
              </a>{" "}
              in 2013.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-[11px] tracking-[0.18em] text-muted font-sans mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/writing" className="hover:text-accent">Writing</Link></li>
              <li><Link href="/sermons" className="hover:text-accent">Sermons</Link></li>
              <li><Link href="/dinner-parties" className="hover:text-accent">Dinner Parties</Link></li>
              <li><Link href="/church-planting" className="hover:text-accent">Church Planting</Link></li>
              <li><Link href="/for-leaders" className="hover:text-accent">For Leaders</Link></li>
              <li><Link href="/podcast" className="hover:text-accent">Podcast</Link></li>
              <li><Link href="/contact" className="hover:text-accent">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="uppercase text-[11px] tracking-[0.18em] text-muted font-sans mb-4">Elsewhere</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://fount.nyc" className="hover:text-accent" rel="me">FOUNT Church</a></li>
              <li><a href="https://georgiekelsey.com" className="hover:text-accent" rel="me">Georgie Kelsey</a></li>
              <li><a href="https://podcasts.apple.com/us/podcast/fount/id1070613870" className="hover:text-accent" rel="me">Apple Podcasts</a></li>
              <li><a href="https://open.spotify.com/show/1ticMy9P1FbqpZH0SNdbk7" className="hover:text-accent" rel="me">Spotify</a></li>
              <li><a href="https://www.instagram.com/jkelsey/" className="hover:text-accent" rel="me">Instagram</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-border/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-xs text-muted font-sans">
          <p>© {year} Josh Kelsey. All rights reserved.</p>
          <p className="italic font-serif text-sm">
            &ldquo;The church is not the Fount. Jesus is.&rdquo;
          </p>
        </div>
      </div>
    </footer>
  );
}
