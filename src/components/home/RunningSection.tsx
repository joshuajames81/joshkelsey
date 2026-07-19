"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type Marathon = { city: string; time: string; width: string; best?: boolean };

const MARATHONS: Marathon[] = [
  { city: "Paris", time: "3:23:11", width: "52%" },
  { city: "Berlin", time: "3:06:44", width: "100%", best: true },
  { city: "New York", time: "3:21:29", width: "58%" },
];

function toSec(t: string) {
  const p = t.split(":").map(Number);
  return p[0] * 3600 + p[1] * 60 + p[2];
}
function fmt(x: number) {
  x = Math.max(0, Math.round(x));
  const h = Math.floor(x / 3600);
  const m = Math.floor((x % 3600) / 60);
  const s = x % 60;
  return `${h}:${("0" + m).slice(-2)}:${("0" + s).slice(-2)}`;
}

/**
 * The Running section: dark, type-only, three marathons whose times count up
 * from zero when the section enters view. The final value is already in the
 * markup, so if the script never runs the real times still read. Scroll only
 * triggers the count, never visibility.
 */
export default function RunningSection({
  heading = "Running",
  intro = "Leadership and long distance run on the same discipline. Three marathons, the training plans that got me to each start line, and what the miles teach about the work. Yours to take.",
  cta = { href: "/running", label: "See the training plans →" },
  number = "05 / Running",
  headingTag = "h2",
}: {
  heading?: string;
  intro?: string;
  cta?: { href: string; label: string } | null;
  number?: string;
  headingTag?: "h1" | "h2";
}) {
  const Heading = headingTag;
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const rows = Array.from(root.querySelectorAll<HTMLElement>(".mrow"));
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const play = (row: HTMLElement) => {
      const timeEl = row.querySelector<HTMLElement>(".time");
      const fill = row.querySelector<HTMLElement>(".fill");
      if (!timeEl || !fill) return;
      const target = toSec(timeEl.dataset.t || "0");
      const wattr = row.style.getPropertyValue("--w") || "100%";
      const wnum = parseFloat(wattr);
      if (reduce) {
        timeEl.textContent = timeEl.dataset.t || "";
        fill.style.width = wattr;
        return;
      }
      let st: number | null = null;
      const dur = 1700;
      const step = (ts: number) => {
        if (st === null) st = ts;
        const p = Math.min(1, (ts - st) / dur);
        const e = 1 - Math.pow(1 - p, 3);
        timeEl.textContent = fmt(target * e);
        fill.style.width = wnum * e + "%";
        if (p < 1) requestAnimationFrame(step);
        else {
          timeEl.textContent = timeEl.dataset.t || "";
          fill.style.width = wattr;
        }
      };
      requestAnimationFrame(step);
    };

    if (!("IntersectionObserver" in window)) {
      rows.forEach(play);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            rows.forEach(play);
            io.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    io.observe(root);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={rootRef} className="running" id="running">
      <div className="w-full max-w-content mx-auto px-[clamp(1.1rem,4vw,4.5rem)]">
        <div data-r>
          <span className="run-no">{number}</span>
          <Heading className="run-h">{heading}</Heading>
          <p className="run-p">{intro}</p>
        </div>

        <div className="rmarquee" aria-hidden>
          <div className="rtrack">
            <span>Paris</span><span className="s">&#10035;</span>
            <span>Berlin</span><span className="s">&#10035;</span>
            <span>New York</span><span className="s">&#10035;</span>
            <span>Paris</span><span className="s">&#10035;</span>
            <span>Berlin</span><span className="s">&#10035;</span>
            <span>New York</span><span className="s">&#10035;</span>
          </div>
        </div>

        <div className="marathons">
          {MARATHONS.map((m) => (
            <div
              key={m.city}
              className={`mrow${m.best ? " best" : ""}`}
              style={{ ["--w" as string]: m.width }}
            >
              <span className="city">
                {m.city}
                {m.best ? <span className="pb">PB</span> : null}
              </span>
              <span className="yr">Marathon</span>
              <span className="time" data-t={m.time}>
                {m.time}
              </span>
              <span className="bar">
                <span className="fill" />
              </span>
            </div>
          ))}
        </div>

        {cta ? (
          <Link href={cta.href} data-hover className="run-cta">
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
