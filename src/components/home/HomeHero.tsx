"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed grayscale hero with a single rotating quote in large Fraunces
 * italic, one word in red. Quotes are an array so more can be added. The first
 * quote carries `on` in the markup, so if the script never runs one quote is
 * still visible. Scroll only drives the parallax, never visibility.
 */
const QUOTES: { text: string; red: string; tail?: string }[] = [
  { text: "Worry is the misuse of your ", red: "imagination." },
  { text: "Grace is ", red: "given", tail: " to be given." },
  { text: "The oil of joy is the oil of ", red: "crushing." },
];

export default function HomeHero({ image = "/images/hero.jpg" }: { image?: string }) {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rows = stackRef.current?.querySelectorAll<HTMLElement>(".qrow");
    if (!rows || rows.length < 2) return;
    let i = 0;
    const id = setInterval(() => {
      rows[i].classList.remove("on");
      i = (i + 1) % rows.length;
      rows[i].classList.add("on");
    }, 4400);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="hero relative h-[100svh] min-h-[660px] overflow-hidden flex items-end">
      <div
        className="photo par absolute inset-0 z-0"
        style={{ backgroundImage: `url('${image}')` }}
        aria-hidden
      />
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg,rgba(8,8,6,.3),rgba(8,8,6,.02) 42%,rgba(8,8,6,.7))",
        }}
        aria-hidden
      />
      <div className="relative z-[2] w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)] pb-[clamp(2.4rem,5vw,5rem)]">
        <div ref={stackRef} className="grid">
          {QUOTES.map((q, idx) => (
            <blockquote
              key={idx}
              className={`qrow${idx === 0 ? " on" : ""}`}
            >
              {q.text}
              <span className="red">{q.red}</span>
              {q.tail}
            </blockquote>
          ))}
        </div>
      </div>
      <div className="hero-cue" aria-hidden>
        Scroll
      </div>
    </section>
  );
}
