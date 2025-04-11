import { type Config } from 'tailwindcss';

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif'],
      serif: ['"Playfair Display"', 'serif'],
    },
    extend: {
      colors: {
        beige: '#f8f1e9',
        amaranto: '#8B0000',
        salvia: '#a3b18a',
        grafite: '#2e2e2e',
      },
    },
  },
  plugins: [],
};

export default config;
