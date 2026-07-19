import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Subscribe from "@/components/Subscribe";

/**
 * Reusable reading template — the treatment demonstrated in
 * joshkelsey-article-worry.html. Used for essays, and available for any
 * reading page: lede (mono kicker, Bricolage title, Fraunces stand-first,
 * byline), optional grayscale figure, a comfortable measure for the body,
 * then a Substack signup and the footer.
 *
 * Body content is passed as children and should use the reading classes
 * (`para`, `pull`) — the wrapping `.reading .col` provides the measure.
 */
export default function ArticleLayout({
  kicker,
  title,
  standfirst,
  byline = "Josh Kelsey",
  bylineMeta = "New York",
  figureImage,
  figureCaption,
  children,
  subscribeHeading,
  subscribeCopy,
}: {
  kicker: React.ReactNode;
  title: React.ReactNode;
  standfirst?: React.ReactNode;
  byline?: string;
  bylineMeta?: string;
  figureImage?: string;
  figureCaption?: string;
  children: React.ReactNode;
  subscribeHeading?: React.ReactNode;
  subscribeCopy?: string;
}) {
  return (
    <div className="reading min-h-screen flex flex-col selection-accent">
      <Nav variant="solid" />

      <main className="flex-1">
        <section className="pt-[clamp(4rem,9vw,8rem)] pb-[clamp(2rem,4vw,3rem)]">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="mono mb-7" data-r>
              {kicker}
            </div>
            <h1
              className="font-disp font-extrabold text-[clamp(2.6rem,8vw,7rem)] leading-[0.9] tracking-[-0.04em] max-w-[16ch]"
              data-r
            >
              {title}
            </h1>
            {standfirst ? (
              <p
                className="font-serif italic font-light text-[clamp(1.2rem,2vw,1.6rem)] text-[#33322c] max-w-[42ch] mt-6 leading-[1.4]"
                data-r
              >
                {standfirst}
              </p>
            ) : null}
            <div className="mt-8 flex gap-5 items-center" data-r>
              <span className="font-disp font-bold text-base">{byline}</span>
              <span className="mono">{bylineMeta}</span>
            </div>
          </div>
        </section>

        {figureImage ? (
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <figure className="my-[clamp(2rem,5vw,4rem)]" data-r>
              <div
                className="photo w-full aspect-[16/8]"
                style={{ backgroundImage: `url('${figureImage}')` }}
                role="img"
                aria-label={figureCaption || ""}
              />
              {figureCaption ? (
                <figcaption className="mono mt-3">{figureCaption}</figcaption>
              ) : null}
            </figure>
          </div>
        ) : null}

        <article className="pb-[clamp(3rem,7vw,6rem)]">
          <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
            <div className="col">{children}</div>
          </div>
        </article>

        <Subscribe
          kicker="Newsletter"
          heading={
            subscribeHeading ?? (
              <>
                Keep <em className="font-serif italic font-normal text-red">reading.</em>
              </>
            )
          }
          copy={subscribeCopy ?? "New essays like this one, free, on Substack."}
        />
      </main>

      <Footer />
    </div>
  );
}
