export default function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-12 md:my-16 py-10 md:py-14 px-6 md:px-10 border-y border-border bg-soft/50 not-prose">
      <blockquote className="font-display text-2xl md:text-3xl leading-[1.3] text-ink italic max-w-3xl mx-auto text-center">
        &ldquo;{children}&rdquo;
      </blockquote>
      {attribution ? (
        <figcaption className="mt-6 text-center uppercase text-[11px] tracking-[0.22em] font-sans text-accent">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
