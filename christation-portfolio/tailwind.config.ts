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
        'font-20px': 'calc((20 / 16) * 1rem)',
        'font-24px': 'calc((24 / 16) * 1rem)',
        'font-40px': 'calc((40 / 16) * 1rem)',
        'font-64px': 'calc((64 / 16) * 1rem)'
      },
      colors: {
        'hex-mainColor': '#0837e9',
        'rgb-mainColor': 'rgb(8, 55, 233)',

        'rgba-mainColor': 'rgba(8, 55, 233, 1)',
        'rgba-mainColorLight': 'rgba(8, 55, 233, 0.7)',
        'rgba-mainColorLighter': 'rgba(8, 55, 233, 0.25)',

        'aboutIDFond': 'rgba(8, 55, 233, 0.25)',
        'sidebarColor': 'rgba(8, 55, 233, 0.8)',
        'aboutMenuFond': 'rgba(8, 55, 233, 0.9)',
      
        'hex-secondaryColor': '#eed00b',
        'rgb-secondaryColor': '238, 208, 11',
      
        'hex-black': '#262b2f',
        'rgb-black': '38, 43, 47',
      
        'hex-white': '#f5f5f5',
        'rgb-white': '245, 245, 245',
      
        'hex-grey': '#4a4a4a',
        'rgb-grey': '74, 74, 74',
      
        'hex-red': '#fe2329',
        'rgb-red': '254, 35, 41',
      },
    },
  },
  plugins: [],
};

export default config;
