"use client";

import { useEffect } from "react";

/**
 * Custom cursor on pointer devices only. Respects prefers-reduced-motion.
 * Purely decorative: if the effect never runs, the real cursor stays visible
 * and nothing on the page depends on it.
 */
export default function Cursor() {
  useEffect(() => {
    const el = document.getElementById("jk-cursor");
    if (!el) return;
    const canHover = window.matchMedia("(hover:hover)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!canHover || reduce) {
      el.style.display = "none";
      return;
    }

    document.body.classList.add("has-cursor");
    let cx = window.innerWidth / 2;
    let cy = window.innerHeight / 2;
    let tx = cx;
    let ty = cy;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
    };
    const loop = () => {
      cx += (tx - cx) * 0.22;
      cy += (ty - cy) * 0.22;
      el.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(loop);

    const targets = document.querySelectorAll("a,button,input,[data-hover]");
    const enter = () => el.classList.add("big");
    const leave = () => el.classList.remove("big");
    targets.forEach((t) => {
      t.addEventListener("mouseenter", enter);
      t.addEventListener("mouseleave", leave);
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("mousemove", onMove);
      targets.forEach((t) => {
        t.removeEventListener("mouseenter", enter);
        t.removeEventListener("mouseleave", leave);
      });
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return <div className="cursor" id="jk-cursor" aria-hidden />;
}
