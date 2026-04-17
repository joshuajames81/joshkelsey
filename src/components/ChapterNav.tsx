import Link from "next/link";

type ChapterLink = {
  href: string;
  part: string;
  title: string;
};

export default function ChapterNav({
  previous,
  next,
}: {
  previous?: ChapterLink;
  next?: ChapterLink;
}) {
  return (
    <nav
      aria-label="Chapter navigation"
      className="mt-20 pt-10 border-t border-border/70 grid grid-cols-1 md:grid-cols-2 gap-8"
    >
      {previous ? (
        <Link
          href={previous.href}
          className="group block border-l-2 border-border pl-5 hover:border-accent transition-colors"
        >
          <p className="uppercase text-[10px] tracking-[0.22em] font-sans text-muted mb-2">
            ← Previous · {previous.part}
          </p>
          <p className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors leading-tight">
            {previous.title}
          </p>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={next.href}
          className="group block border-r-2 border-border pr-5 md:text-right hover:border-accent transition-colors"
        >
          <p className="uppercase text-[10px] tracking-[0.22em] font-sans text-muted mb-2">
            Next · {next.part} →
          </p>
          <p className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors leading-tight">
            {next.title}
          </p>
        </Link>
      ) : (
        <div />
      )}
    </nav>
  );
}
