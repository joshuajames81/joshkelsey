"use client";

import { useEffect, useRef } from "react";

/**
 * Full-bleed grayscale hero. The intro is one continuous moment: the black
 * introveil covers the shot while the lime signature draws itself over it,
 * then the veil lifts to reveal the photograph with the signature already on
 * it. After the intro the signature is cursor-aware (pulls off when the pointer
 * leaves the figure, draws back when it returns; on touch it stays drawn).
 * A single rotating quote sits above the signature so it is never obscured.
 * The first quote carries `on` in the markup, so one quote always shows.
 */
const QUOTES: { pre: string; em: string; post?: string }[] = [
  { pre: "Worry is the misuse of your ", em: "imagination." },
  { pre: "Grace is ", em: "given", post: " to be given." },
  { pre: "The oil of joy is the oil of ", em: "crushing." },
];

export default function HomeHero({ image = "/site-images/home-hero.jpg" }: { image?: string }) {
  const heroRef = useRef<HTMLElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // rotating quotes
    const rows = stackRef.current?.querySelectorAll<HTMLElement>(".qrow");
    let interval = 0;
    if (rows && rows.length > 1) {
      let i = 0;
      interval = window.setInterval(() => {
        rows[i].classList.remove("on");
        i = (i + 1) % rows.length;
        rows[i].classList.add("on");
      }, 4400);
    }

    // cursor-aware signature (after the intro settles)
    const hero = heroRef.current;
    let t = 0;
    if (hero && window.matchMedia("(hover:hover)").matches) {
      const onMove = () => hero.classList.remove("sig-off");
      const onLeave = () => hero.classList.add("sig-off");
      t = window.setTimeout(() => {
        hero.addEventListener("mousemove", onMove, { passive: true });
        hero.addEventListener("mouseleave", onLeave);
      }, 2700);
      return () => {
        clearInterval(interval);
        clearTimeout(t);
        hero.removeEventListener("mousemove", onMove);
        hero.removeEventListener("mouseleave", onLeave);
      };
    }
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="hero" ref={heroRef}>
      <div className="bg ph par" style={{ backgroundImage: `url('${image}')` }} aria-hidden />
      <div className="vig" aria-hidden />
      <div className="streaks" aria-hidden>
        <i /><i /><i /><i /><i />
      </div>
      <div className="introveil" aria-hidden />
      <div className="herosig" aria-hidden />
      <div className="tagno" aria-hidden>
        Writer &amp; thinker<br />
        New York City<br />
        Est. thirteen years
      </div>
      <div className="wrap">
        <div className="qstack" ref={stackRef}>
          {QUOTES.map((q, i) => (
            <blockquote key={i} className={`qrow${i === 0 ? " on" : ""}`}>
              {q.pre}
              <em>{q.em}</em>
              {q.post}
            </blockquote>
          ))}
        </div>
      </div>
      <div className="cue" aria-hidden>
        Scroll
      </div>
    </section>
  );
}
