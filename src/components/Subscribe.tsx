/**
 * Substack signup. Styled to the design system, wired to the real
 * joshuakelsey.substack.com embed so it actually collects subscribers.
 * Used on the home page, at the end of every article, and in the footer.
 */
export default function Subscribe({
  heading = (
    <>
      New writing, <em className="font-serif italic font-normal text-red">in your inbox.</em>
    </>
  ),
  copy = "New essays on faith, leadership, the city, and the life underneath it. Free, on Substack.",
  kicker = "Newsletter",
  className = "",
}: {
  heading?: React.ReactNode;
  copy?: string;
  kicker?: string;
  className?: string;
}) {
  return (
    <section className={`border-t border-line py-[clamp(4.5rem,9vw,8rem)] ${className}`}>
      <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
        <div className="grid md:grid-cols-2 gap-[clamp(2rem,5vw,5rem)] items-center">
          <div data-r>
            <div className="mono mb-4">{kicker}</div>
            <h2 className="font-disp font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[0.95] tracking-[-0.03em]">
              {heading}
            </h2>
            <p className="font-serif text-[#33322c] mt-4 max-w-[38ch]">{copy}</p>
          </div>
          <div data-r className="bg-soft border border-line rounded-lg p-5 md:p-6">
            <iframe
              title="Subscribe on Substack"
              src="https://joshuakelsey.substack.com/embed"
              width="100%"
              height="150"
              style={{ border: "none", background: "transparent" }}
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
