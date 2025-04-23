// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        beige: 'var(--color-beige)',
        amaranto: 'var(--color-amaranto)',
        salvia: 'var(--color-salvia)',
        grafite: 'var(--color-grafite)',
      },
    },
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['"Playfair Display"', 'serif'],
    },
  },
  plugins: [],
};

export default config;
