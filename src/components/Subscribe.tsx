"use client";

import { useState } from "react";

const SUBSTACK = "https://joshuakelsey.substack.com";

/**
 * Substack signup, styled to the velocity system. On submit it hands the email
 * to Substack's subscribe page (which prefills and confirms). No content is
 * gated. Used on the home page before the footer, at the end of every article,
 * and referenced from the footer.
 */
export default function Subscribe({
  heading,
  copy = "Essays on faith, leadership, the city, and the life underneath it. Free, on Substack.",
  kicker = "Newsletter",
}: {
  heading?: React.ReactNode;
  copy?: string;
  kicker?: string;
}) {
  const [email, setEmail] = useState("");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email
      ? `${SUBSTACK}/subscribe?email=${encodeURIComponent(email)}`
      : SUBSTACK;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="sub">
      <div className="wrap g">
        <div data-r>
          <div className="mono">{kicker}</div>
          <h2>
            {heading ?? (
              <>
                New writing, <em>in your inbox.</em>
              </>
            )}
          </h2>
          <p>{copy}</p>
        </div>
        <form className="sform" data-r onSubmit={onSubmit}>
          <input
            type="email"
            placeholder="you@email.com"
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button data-h type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}
