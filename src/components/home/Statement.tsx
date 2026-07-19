"use client";

import { useEffect, useRef } from "react";

/**
 * Huge statement line: each word rises on load (CSS), and the whole line tilts
 * in 3D toward the cursor. The closing phrase is the single animated lime
 * gradient moment. Reduced motion: words are static, no tilt.
 */
export default function Statement() {
  const secRef = useRef<HTMLElement>(null);
  const bigRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sec = secRef.current;
    const big = bigRef.current;
    if (!sec || !big) return;
    if (!window.matchMedia("(hover:hover)").matches) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const onMove = (e: MouseEvent) => {
      const b = sec.getBoundingClientRect();
      const px = (e.clientX - b.left) / b.width - 0.5;
      const py = (e.clientY - b.top) / b.height - 0.5;
      big.style.transform = `perspective(1100px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 7).toFixed(2)}deg)`;
    };
    const onLeave = () => {
      big.style.transform = "perspective(1100px)";
    };
    sec.addEventListener("mousemove", onMove);
    sec.addEventListener("mouseleave", onLeave);
    return () => {
      sec.removeEventListener("mousemove", onMove);
      sec.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <section className="stmt" ref={secRef}>
      <div className="wrap">
        <div className="big" ref={bigRef}>
          <span className="w"><span>Fear</span></span>{" "}
          <span className="w"><span>and</span></span>{" "}
          <span className="w"><span>vision</span></span>{" "}
          <span className="w"><span>run</span></span>{" "}
          <span className="w"><span>on</span></span>{" "}
          <span className="w"><span>the</span></span>{" "}
          <span className="w"><span className="chroma">same&nbsp;engine.</span></span>
        </div>
      </div>
    </section>
  );
}
