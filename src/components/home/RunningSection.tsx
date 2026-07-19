"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type Marathon = { city: string; time: string; width: string };

const MARATHONS: Marathon[] = [
  { city: "Paris", time: "3:23:11", width: "52%" },
  { city: "Berlin", time: "3:06:44", width: "100%" },
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
 * Running: outlined city marquee + the hover race. Hovering a marathon climbs
 * its time from zero while a pace bar runs out in sync; leaving resets it. On
 * touch, the rows animate once when the section scrolls into view. The final
 * time is always in the markup, so it reads with no script. No fastest tag.
 */
export default function RunningSection({
  heading = "Running",
  headingTag = "h2",
  number = "05 / Running",
  intro = "Leadership and long distance run on the same discipline. Three marathons, the training plans that got me to each start line, and what the miles teach about the work. Yours to take.",
  cta = { href: "/running", label: "See the training plans →" },
}: {
  heading?: string;
  headingTag?: "h1" | "h2";
  number?: string;
  intro?: string;
  cta?: { href: string; label: string } | null;
}) {
  const Heading = headingTag;
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const root = ref.current;
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
      fill.style.transition = "none";
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
    const reset = (row: HTMLElement) => {
      const timeEl = row.querySelector<HTMLElement>(".time");
      const fill = row.querySelector<HTMLElement>(".fill");
      if (!timeEl || !fill) return;
      timeEl.textContent = timeEl.dataset.t || "";
      fill.style.width = "0";
    };

    const canHover = window.matchMedia("(hover:hover)").matches;
    const cleanups: Array<() => void> = [];
    if (canHover) {
      rows.forEach((row) => {
        const enter = () => play(row);
        const leave = () => reset(row);
        row.addEventListener("mouseenter", enter);
        row.addEventListener("mouseleave", leave);
        cleanups.push(() => {
          row.removeEventListener("mouseenter", enter);
          row.removeEventListener("mouseleave", leave);
        });
      });
    } else if ("IntersectionObserver" in window) {
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
      cleanups.push(() => io.disconnect());
    }
    return () => cleanups.forEach((c) => c());
  }, []);

  return (
    <section className="run" ref={ref}>
      <div className="wrap">
        <div data-r>
          <span className="n">{number}</span>
          <Heading className="rh">{heading}</Heading>
          <p>{intro}</p>
        </div>
        <div className="rmq" aria-hidden>
          <div className="rmqt">
            <span>Paris</span><span className="s">&#10035;</span>
            <span>Berlin</span><span className="s">&#10035;</span>
            <span>New York</span><span className="s">&#10035;</span>
            <span>Paris</span><span className="s">&#10035;</span>
            <span>Berlin</span><span className="s">&#10035;</span>
            <span>New York</span><span className="s">&#10035;</span>
          </div>
        </div>
        <div className="mars">
          {MARATHONS.map((m) => (
            <div key={m.city} className="mrow" style={{ ["--w" as string]: m.width }}>
              <span className="city">{m.city}</span>
              <span className="yr">Marathon</span>
              <span className="time" data-t={m.time}>{m.time}</span>
              <span className="bar"><span className="fill" /></span>
            </div>
          ))}
        </div>
        {cta ? (
          <Link className="go" href={cta.href} data-h>
            {cta.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
