"use client";

import { useEffect, useRef } from "react";

/**
 * Close: the final line is cut from a photograph with background-clip text, so
 * the words are a window into the image, and the picture shifts inside the
 * letters as the cursor moves. Solid-white fallback where clip text is
 * unsupported (handled in CSS). The line always reads.
 */
export default function CloseCut({
  image = "/site-images/close-chair.jpg",
}: {
  image?: string;
}) {
  const secRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const line = lineRef.current;
    if (!sec || !line) return;
    if (!window.matchMedia("(hover:hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = sec.getBoundingClientRect();
      const x = ((e.clientX - r.left) / r.width) * 100;
      const y = ((e.clientY - r.top) / r.height) * 100;
      line.style.setProperty("--cx", `${30 + x * 0.4}%`);
      line.style.setProperty("--cy", `${25 + y * 0.4}%`);
    };
    sec.addEventListener("mousemove", onMove, { passive: true });
    return () => sec.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section className="close" ref={secRef}>
      <div className="bg ph" style={{ backgroundImage: `url('${image}')` }} aria-hidden />
      <div className="veil" aria-hidden />
      <div className="wrap">
        <div
          className="line"
          ref={lineRef}
          style={{ ["--climg" as string]: `url('${image}')` }}
        >
          You become what you pay <em>attention</em> to.
        </div>
      </div>
    </section>
  );
}
