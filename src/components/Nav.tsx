import Link from "next/link";

export default function Nav() {
  return (
    <header className="relative z-40 border-b border-border/60">
      <div className="max-w-content mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <Link
          href="/"
          className="font-display text-xl md:text-2xl tracking-tight leading-none"
          aria-label="Josh Kelsey, home"
        >
          <span className="block text-ink">Josh Kelsey</span>
          <span className="block text-[11px] md:text-xs uppercase tracking-[0.18em] text-muted mt-0.5 font-sans">
            Pastor · FOUNT Church NYC
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden lg:flex items-center gap-6 text-sm font-sans">
          <Link href="/about" className="link-underline">About</Link>
          <Link href="/writing" className="link-underline">Writing</Link>
          <Link href="/sermons" className="link-underline">Sermons</Link>
          <Link href="/dinner-parties" className="link-underline">Dinner Parties</Link>
          <Link href="/church-planting" className="link-underline">Church Planting</Link>
          <Link href="/for-leaders" className="link-underline">For Leaders</Link>
          <Link href="/podcast" className="link-underline">Podcast</Link>
          <Link href="/contact" className="link-underline">Contact</Link>
          <a
            href="https://fount.nyc"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-ink text-paper rounded-full hover:bg-accent transition-colors"
          >
            FOUNT
            <span aria-hidden>→</span>
          </a>
        </nav>

        {/* Mobile menu */}
        <details className="lg:hidden relative">
          <summary className="list-none cursor-pointer p-2" aria-label="Open menu">
            <span className="block w-6 h-[1.5px] bg-ink mb-1.5" />
            <span className="block w-6 h-[1.5px] bg-ink mb-1.5" />
            <span className="block w-4 h-[1.5px] bg-ink ml-auto" />
          </summary>
          <div className="absolute right-0 top-full mt-2 bg-paper border border-border rounded-lg p-6 min-w-[240px] shadow-xl shadow-ink/5 z-50">
            <nav className="flex flex-col gap-4 text-base font-sans">
              <Link href="/about">About</Link>
              <Link href="/writing">Writing</Link>
              <Link href="/sermons">Sermons</Link>
              <Link href="/dinner-parties">Dinner Parties</Link>
              <Link href="/church-planting">Church Planting</Link>
              <Link href="/for-leaders">For Leaders</Link>
              <Link href="/podcast">Podcast</Link>
              <Link href="/contact">Contact</Link>
              <a href="https://fount.nyc" target="_blank" rel="noopener" className="text-accent">
                FOUNT Church →
              </a>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}
