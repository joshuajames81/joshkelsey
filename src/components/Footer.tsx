import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Josh Kelsey",
    alternateName: "Joshua Kelsey",
    jobTitle: "Founding Pastor",
    worksFor: {
      "@type": "Organization",
      name: "FOUNT Church NYC",
      url: "https://fount.nyc",
    },
    url: "https://joshkelsey.org",
    sameAs: [
      "https://joshuakelsey.substack.com",
      "https://medium.com/@joshkelsey",
      "https://www.linkedin.com/in/josh--kelsey/",
      "https://x.com/J_kelsey",
      "https://www.instagram.com/jkelsey/",
      "https://www.facebook.com/pastorjoshkelsey/",
      "https://fount.nyc",
    ],
    spouse: {
      "@type": "Person",
      name: "Georgie Kelsey",
      url: "https://fount.nyc",
    },
  };

  return (
    <footer className="mt-32 border-t border-border/70 bg-soft/40">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className="max-w-content mx-auto px-6 md:px-10 py-16">
        <div className="mb-14 pb-14 border-b border-border/70 max-w-2xl">
          <h2 className="font-display text-3xl text-ink mb-3 leading-tight">
            Weekly Notes
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-6 max-w-lg">
            Subscribe for writing, teaching, and reflections on faith, leadership, and church planting, sent once a week.
          </p>
          <div className="bg-soft border border-border p-5 md:p-6">
            <iframe
              src="https://joshuakelsey.substack.com/embed"
              width="100%"
              height="150"
              style={{ border: "none", background: "transparent" }}
              frameBorder="0"
              scrolling="no"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-8">
          <div className="col-span-2 md:col-span-2 max-w-sm">
            <h2 className="font-display text-2xl leading-tight mb-3">Josh Kelsey</h2>
            <p className="text-muted text-sm leading-relaxed">
              Founding Pastor of{" "}
              <a href="https://fount.nyc" className="underline decoration-border hover:text-accent">
                FOUNT Church NYC
              </a>
              , alongside his wife Georgie Kelsey. Planted in 2013 after moving from Sydney to New York City.
            </p>
          </div>

          <div>
            <h3 className="uppercase text-[11px] tracking-[0.18em] text-muted font-sans mb-4">Explore</h3>
            <ul className="space-y-2.5 text-sm">
              <li><Link href="/about" className="hover:text-accent">About</Link></li>
              <li><Link href="/press" className="hover:text-accent">Press</Link></li>
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
            <h3 className="uppercase text-[11px] tracking-[0.18em] text-muted font-sans mb-4">Follow along</h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="https://joshuakelsey.substack.com" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Substack</a></li>
              <li><a href="https://medium.com/@joshkelsey" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Medium</a></li>
              <li><a href="https://www.linkedin.com/in/josh--kelsey/" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">LinkedIn</a></li>
              <li><a href="https://x.com/J_kelsey" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">X</a></li>
              <li><a href="https://www.instagram.com/jkelsey/" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/pastorjoshkelsey/" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Facebook</a></li>
              <li><a href="https://fount.nyc" className="hover:text-accent" rel="me">FOUNT Church</a></li>
              <li><a href="https://podcasts.apple.com/us/podcast/fount/id1070613870" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Apple Podcasts</a></li>
              <li><a href="https://open.spotify.com/show/1ticMy9P1FbqpZH0SNdbk7" className="hover:text-accent" target="_blank" rel="me noopener noreferrer">Spotify</a></li>
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
