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
        paper: "#F5F1E8",
        ink: "#1A2541",
        accent: "#8B2E1E",
        muted: "#6B6456",
        soft: "#EDE6D3",
        border: "#D4CAB5",
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', "Georgia", "serif"],
        serif: ['"Source Serif 4"', "Georgia", "serif"],
        sans: ['"Geist"', "-apple-system", "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(3rem, 8vw, 7rem)", { lineHeight: "0.95", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2.25rem, 5vw, 4rem)", { lineHeight: "1.05", letterSpacing: "-0.015em" }],
        "display-md": ["clamp(1.75rem, 3vw, 2.5rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
      },
      maxWidth: {
        prose: "38rem",
        content: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
