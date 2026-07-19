export default function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-[clamp(2.5rem,5vw,4rem)] mx-auto max-w-[52rem] not-prose">
      <blockquote className="font-serif italic font-normal text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.1] tracking-[-0.01em] text-ink border-l-2 border-red pl-6">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-6 pl-6 uppercase text-[11px] tracking-[0.22em] font-mono text-red">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
