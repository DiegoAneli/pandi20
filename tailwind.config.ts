import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', "serif"],
        sans: ["Inter", "sans-serif"],
      },
      colors: {
        beige: "#f8f1e9",
        amaranto: "#8B0000",
        salvia: "#a3b18a",
        grafite: "#2e2e2e",
      },
    },
  },
  plugins: [typography],
};

export default config;
