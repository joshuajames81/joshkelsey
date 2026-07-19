import Link from "next/link";

const LINKS = [
  { href: "/writing", label: "Writing" },
  { href: "/dinner-parties", label: "Dinner Parties" },
  { href: "/church-planting", label: "Church Planting" },
  { href: "/for-leaders", label: "For Leaders" },
  { href: "/running", label: "Running" },
  { href: "/about", label: "About" },
];

/**
 * Fixed velocity header. `variant="hero"` (default) staggers in after the
 * intro and sits over the hero scrim; `variant="solid"` is the dark, always-on
 * header for inner pages. Decode-on-hover and cursor-scale are wired globally
 * via [data-dec] / [data-h] in Cursor.
 */
export default function Nav({ variant = "hero" }: { variant?: "hero" | "solid" }) {
  const solid = variant === "solid";
  return (
    <>
      <div className="topscrim" aria-hidden />
      <header className={`top${solid ? " solid" : ""}`}>
        <Link href="/" className="brand" data-h aria-label="Josh Kelsey, home">
          Josh Kelsey<i>.</i>
        </Link>
        <nav aria-label="Primary">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} data-h data-dec>
              {l.label}
            </Link>
          ))}
        </nav>
        <details className="burger-wrap">
          <summary className="burger" data-h style={{ listStyle: "none", cursor: "pointer" }}>
            Menu
          </summary>
          <div
            style={{
              position: "absolute",
              right: 0,
              top: "100%",
              marginTop: "0.75rem",
              background: "var(--deep)",
              border: "1px solid var(--line)",
              padding: "1.25rem 1.5rem",
              minWidth: "220px",
              zIndex: 50,
            }}
          >
            <nav className="flex flex-col gap-3">
              {LINKS.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="font-mono text-xs uppercase tracking-[0.12em] text-fg hover:text-flare"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </details>
      </header>
    </>
  );
}
