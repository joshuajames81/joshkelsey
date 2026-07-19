"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

const WORK = [
  { n: "01", label: "Writing", href: "/writing", img: "/site-images/writing.jpg", alt: "An open notebook in low light" },
  { n: "02", label: "Dinner Parties", href: "/dinner-parties", img: "/site-images/dinner-parties.jpg", alt: "A table set for a gathering" },
  { n: "03", label: "Church Planting", href: "/church-planting", img: "/site-images/church-planting.jpg", alt: "A congregation in a city room" },
  { n: "04", label: "For Leaders", href: "/for-leaders", img: "/site-images/for-leaders.jpg", alt: "A team working together" },
];

/**
 * The Work as a torch section. Titles sit as giant outlined type in darkness;
 * a beam of light following the cursor reveals the photography behind them,
 * and each title ignites lime on hover. On touch there is no beam: the photos
 * sit dimly and the list stands alone (handled in CSS). Content always reads.
 */
export default function TorchWork() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = ref.current;
    if (!t || !window.matchMedia("(hover:hover)").matches) return;
    const onMove = (e: MouseEvent) => {
      const r = t.getBoundingClientRect();
      t.style.setProperty("--mx", `${e.clientX - r.left}px`);
      t.style.setProperty("--my", `${e.clientY - r.top}px`);
    };
    t.addEventListener("mousemove", onMove, { passive: true });

    const titles = t.querySelectorAll<HTMLElement>(".wtitle");
    const frames = t.querySelectorAll<HTMLElement>(".fr");
    const onEnter = (el: HTMLElement) => () => {
      const id = el.getAttribute("data-w");
      frames.forEach((f) => f.classList.toggle("on", f.getAttribute("data-fr") === id));
    };
    const handlers: Array<[HTMLElement, () => void]> = [];
    titles.forEach((el) => {
      const h = onEnter(el);
      el.addEventListener("mouseenter", h);
      handlers.push([el, h]);
    });
    return () => {
      t.removeEventListener("mousemove", onMove);
      handlers.forEach(([el, h]) => el.removeEventListener("mouseenter", h));
    };
  }, []);

  return (
    <section className="torch" ref={ref}>
      <div className="rev" aria-hidden>
        {WORK.map((w, i) => (
          <div
            key={w.n}
            className={`fr${i === 0 ? " on" : ""}`}
            data-fr={String(i + 1)}
            style={{ backgroundImage: `url('${w.img}')` }}
            role="img"
            aria-label={w.alt}
          />
        ))}
      </div>
      <div className="dim" aria-hidden />
      <div className="beam" aria-hidden />
      <div className="wrap">
        <div className="list">
          <div className="hd">
            <span className="k">The Work</span>
            <span className="h">Move the light →</span>
          </div>
          {WORK.map((w, i) => (
            <Link key={w.n} className="wtitle" href={w.href} data-w={String(i + 1)} data-h>
              <span className="no">{w.n}</span>
              {w.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
