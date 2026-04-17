import Link from "next/link";

export default function ChapterHeader({
  partNumber,
  partName,
  chapterNumber,
  title,
  intro,
  parentHref = "/dinner-parties",
  parentLabel = "Dinner Parties",
}: {
  partNumber: string;
  partName: string;
  chapterNumber: string;
  title: string;
  intro: string;
  parentHref?: string;
  parentLabel?: string;
}) {
  return (
    <header className="mb-14 md:mb-20 max-w-3xl">
      <div className="flex items-center gap-3 mb-6">
        <Link
          href={parentHref}
          className="uppercase text-[11px] tracking-[0.22em] text-accent font-sans hover:underline"
        >
          {parentLabel}
        </Link>
        <span className="text-muted font-sans text-xs" aria-hidden>
          /
        </span>
        <p className="uppercase text-[11px] tracking-[0.22em] text-muted font-sans">
          Part {partNumber} · {partName}
        </p>
      </div>
      <p className="font-sans text-sm text-muted mb-4">Chapter {chapterNumber}</p>
      <h1 className="font-display text-display-lg md:text-display-xl font-medium leading-[1] text-ink mb-8">
        {title}
      </h1>
      <p className="font-serif text-lg md:text-xl text-ink/80 leading-relaxed max-w-prose">
        {intro}
      </p>
    </header>
  );
}
