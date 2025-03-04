import { plugin, prose } from "@marginalia/tailwindcss";
import typography from "@tailwindcss/typography";
import type { Config } from "tailwindcss/plugin";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      fontFamily: {
        primary: ["var(--font-plex-mono)", "sans-serif"],
        sans: ["var(--font-plex-mono)", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
      typography: (utils) => {
        return prose(utils, { themeName: "stone" });
      },
    },
  },
  plugins: [typography, plugin],
} satisfies Config;
