import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Velocity palette: dark canvas, one electric-lime accent.
        // Legacy token names are re-aliased so existing pages reskin dark
        // automatically: accent -> flare, paper -> bg, ink -> fg,
        // border -> line, soft -> panel, muted -> dim.
        bg: "#090a08",
        deep: "#050603",
        fg: "#f1efe6",
        flare: "#c9ff2e",
        ice: "#9fb4c9",
        amber: "#f0a52a",
        dim: "#8a857a",
        line: "rgba(234,231,223,0.14)",
        accent: "#c9ff2e", // legacy -> flare
        paper: "#090a08", // legacy -> bg
        ink: "#f1efe6", // legacy -> fg
        soft: "#111310", // legacy -> panel
        border: "rgba(234,231,223,0.14)", // legacy -> line
        muted: "#8a857a", // legacy -> dim
      },
      fontFamily: {
        disp: ['"Archivo"', "system-ui", "sans-serif"],
        display: ['"Archivo"', "system-ui", "sans-serif"],
        serif: ['"Instrument Serif"', "Georgia", "serif"],
        mono: ['"Space Mono"', "ui-monospace", "monospace"],
        sans: ['"Space Mono"', "ui-monospace", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(3.5rem, 15vw, 15rem)", { lineHeight: "0.82", letterSpacing: "-0.05em" }],
        "display-xl": ["clamp(3rem, 11vw, 11rem)", { lineHeight: "0.9", letterSpacing: "-0.045em" }],
        "display-lg": ["clamp(2.2rem, 6vw, 5rem)", { lineHeight: "0.95", letterSpacing: "-0.035em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.6rem)", { lineHeight: "1.02", letterSpacing: "-0.02em" }],
      },
      maxWidth: {
        prose: "40rem",
        content: "1560px",
      },
      transitionTimingFunction: {
        e1: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [typography],
};
export default config;
