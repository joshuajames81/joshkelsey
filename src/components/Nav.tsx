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
 * Site header. Two variants:
 *  - "overlay": white, fixed, sits over a full-bleed hero photo (home).
 *  - "solid":   dark-on-paper, sticky, for reading/inner pages (default).
 */
export default function Nav({ variant = "solid" }: { variant?: "overlay" | "solid" }) {
  const overlay = variant === "overlay";

  return (
    <>
      {overlay && <div className="topscrim" aria-hidden />}
      <header
        className={
          overlay
            ? "fixed inset-x-0 top-0 z-[200] flex items-center justify-between px-[clamp(1.1rem,4vw,4.5rem)] py-[1.4rem] text-white"
            : "sticky top-0 z-[100] flex items-center justify-between px-[clamp(1.1rem,4vw,4.5rem)] py-[1.2rem] bg-paper/90 backdrop-blur-md border-b border-line"
        }
      >
        <Link
          href="/"
          data-hover
          className="font-disp font-bold text-[1.12rem] tracking-tight"
          style={overlay ? { textShadow: "0 1px 18px rgba(0,0,0,.6)" } : undefined}
          aria-label="Josh Kelsey, home"
        >
          Josh Kelsey<span className="text-red">.</span>
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-[1.4rem]">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              data-hover
              className={
                overlay
                  ? "nav-link font-mono text-[0.7rem] tracking-[0.08em] uppercase"
                  : "nav-link font-mono text-[0.7rem] tracking-[0.08em] uppercase text-muted hover:text-ink transition-colors"
              }
              style={overlay ? { textShadow: "0 1px 18px rgba(0,0,0,.6)" } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <details className="md:hidden relative">
          <summary
            data-hover
            className="list-none cursor-pointer font-mono text-[0.72rem] tracking-[0.1em] uppercase"
            style={overlay ? { textShadow: "0 1px 18px rgba(0,0,0,.6)" } : undefined}
          >
            Menu
          </summary>
          <div className="absolute right-0 top-full mt-3 bg-deep text-paper rounded-lg p-6 min-w-[240px] shadow-xl z-50">
            <nav className="flex flex-col gap-4 font-mono text-xs uppercase tracking-[0.1em]">
              {LINKS.map((l) => (
                <Link key={l.href} href={l.href} className="hover:text-red">
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
