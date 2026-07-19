export default function PullQuote({
  children,
  attribution,
}: {
  children: React.ReactNode;
  attribution?: string;
}) {
  return (
    <figure className="my-[clamp(2.5rem,5vw,4rem)] mx-auto max-w-[52rem] not-prose">
      <blockquote className="font-disp font-black text-[clamp(1.8rem,4.4vw,3.2rem)] leading-[1.02] tracking-[-0.03em] text-fg border-l-2 border-flare pl-6">
        {children}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-6 pl-6 uppercase text-[11px] tracking-[0.2em] font-mono text-flare">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
