"use client";

import { useEffect } from "react";

/**
 * Global kinetics: the warm cursor light (#glow), the lime cursor dot (#cur),
 * hover-scale on [data-h], and decode-on-hover on nav links + [data-dec].
 * Pointer devices only; fully disabled under prefers-reduced-motion. Uses
 * event delegation so it keeps working across client-side navigation.
 * Purely decorative: if it never runs, the real cursor stays and nothing
 * on the page depends on it.
 */
export default function Cursor() {
  useEffect(() => {
    const cur = document.getElementById("cur");
    const glow = document.getElementById("glow");
    const hover = window.matchMedia("(hover:hover)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Decode works regardless of pointer; it only fires on hover of the target.
    const CH = "ABCDEFGHIJKLMNOPQRSTUVWXYZ/#.";
    const timers = new WeakMap<HTMLElement, number>();
    const scramble = (el: HTMLElement) => {
      if (reduce) return;
      const fin = el.getAttribute("data-final") || el.textContent || "";
      el.setAttribute("data-final", fin);
      const L = fin.length;
      let f = 0;
      const prev = timers.get(el);
      if (prev) clearInterval(prev);
      const id = window.setInterval(() => {
        let o = "";
        for (let i = 0; i < L; i++) {
          if (fin[i] === " ") o += " ";
          else if (i < f / 1.5) o += fin[i];
          else o += CH[Math.floor(Math.random() * CH.length)];
        }
        el.textContent = o;
        f++;
        if (f > L * 1.5) {
          clearInterval(id);
          el.textContent = fin;
        }
      }, 26);
      timers.set(el, id);
    };

    const onOver = (e: Event) => {
      const t = e.target as HTMLElement;
      if (!t || !t.closest) return;
      if (t.closest("[data-h]") && cur) cur.classList.add("big");
      const dec = t.closest<HTMLElement>("[data-dec]");
      if (dec) scramble(dec);
    };
    const onOut = (e: Event) => {
      const t = e.target as HTMLElement;
      if (t && t.closest && t.closest("[data-h]") && cur) cur.classList.remove("big");
    };
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);

    let raf = 0;
    let cx = 0;
    let cy = 0;
    let tx = 0;
    let ty = 0;
    let onMove: ((e: MouseEvent) => void) | null = null;

    if (hover && !reduce && cur) {
      document.body.classList.add("has-cursor");
      cx = window.innerWidth / 2;
      cy = window.innerHeight / 2;
      tx = cx;
      ty = cy;
      onMove = (e: MouseEvent) => {
        tx = e.clientX;
        ty = e.clientY;
        if (glow)
          glow.style.background =
            "radial-gradient(360px 360px at " +
            e.clientX +
            "px " +
            e.clientY +
            "px, rgba(205,255,110,.13), rgba(205,255,110,0) 60%)";
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      const loop = () => {
        cx += (tx - cx) * 0.22;
        cy += (ty - cy) * 0.22;
        cur.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
        raf = requestAnimationFrame(loop);
      };
      raf = requestAnimationFrame(loop);
    } else {
      if (cur) cur.style.display = "none";
      if (glow) glow.style.display = "none";
    }

    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      if (onMove) window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      document.body.classList.remove("has-cursor");
    };
  }, []);

  return (
    <>
      <div id="glow" aria-hidden />
      <div id="cur" aria-hidden />
    </>
  );
}
