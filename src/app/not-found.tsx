import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col paper-grain">
      <Nav variant="solid" />
      <main className="flex-1 flex items-center">
        <section className="max-w-content mx-auto px-6 md:px-10 py-24 md:py-32 w-full">
          <div className="max-w-2xl">
            <p className="uppercase text-[11px] tracking-[0.22em] text-flare font-mono mb-6">
              404, Page not found
            </p>
            <h1 className="font-disp text-display-xl font-black leading-[0.9] text-fg mb-8">
              That page has<br />
              <span className="font-serif italic text-flare">gone missing.</span>
            </h1>
            <p className="font-serif text-lg md:text-xl text-fg/85 leading-relaxed mb-10 max-w-prose">
              It may have moved, been retitled, or it never existed in the first place.
              Either way, here are some better places to start.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href="/"
                className="px-5 py-2.5 bg-flare text-deep rounded-full text-sm font-mono hover:bg-fg transition-colors"
              >
                Home
              </Link>
              <Link
                href="/sermons"
                className="px-5 py-2.5 border border-fg rounded-full text-sm font-mono hover:bg-flare hover:text-deep transition-colors"
              >
                Sermons
              </Link>
              <Link
                href="/writing"
                className="px-5 py-2.5 border border-fg rounded-full text-sm font-mono hover:bg-flare hover:text-deep transition-colors"
              >
                Writing
              </Link>
              <a
                href="https://fount.nyc"
                className="px-5 py-2.5 border border-fg rounded-full text-sm font-mono hover:bg-flare hover:text-deep transition-colors"
              >
                FOUNT Church
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
