import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New design-system palette. Legacy token names are kept and
        // re-aliased so existing pages reskin automatically:
        //   accent -> red, border -> line, soft -> subtle paper.
        paper: "#ecebe4",
        ink: "#121110",
        deep: "#0a0908",
        red: "#e8371a",
        amber: "#f0a52a",
        blue: "#2f5bd0",
        muted: "#6f6b60",
        line: "#d1cdc0",
        accent: "#e8371a", // legacy alias -> red
        soft: "#e4e2d9", // legacy alias -> subtle paper
        border: "#d1cdc0", // legacy alias -> line
      },
      fontFamily: {
        // disp = Bricolage Grotesque, serif = Fraunces, mono = Geist Mono.
        // Legacy `display` -> Bricolage, `sans` -> Geist Mono (labels).
        disp: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        serif: ['"Fraunces"', "Georgia", "serif"],
        mono: ['"Geist Mono"', "ui-monospace", "monospace"],
        sans: ['"Geist Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3rem, 13vw, 13rem)", { lineHeight: "0.86", letterSpacing: "-0.045em" }],
        "display-xl": ["clamp(2.6rem, 8vw, 7rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-lg": ["clamp(2rem, 5vw, 4rem)", { lineHeight: "0.95", letterSpacing: "-0.03em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose: "40rem",
        content: "1500px",
      },
      transitionTimingFunction: {
        e1: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
export default config;
