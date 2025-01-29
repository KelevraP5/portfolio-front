/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  corePlugins: {
    preflight: false,
  },
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx,}",
    "./src/app/styles/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'titre': ['var(--font-titre)'],
        'contenu': ['Calibri', 'sans-serif'],
      },
      fontSize: {
        'font-16px': '1rem',
        'font-24px': 'calc((24 / 16) * 1rem)',
        'font-40px': 'calc((40 / 16) * 1rem)',
        'font-64px': 'calc((64 / 16) * 1rem)'
      },
    },
  },
  plugins: [],
};

export default config;
