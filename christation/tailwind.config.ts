/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
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
  			titre: [
  				'var(--font-titre)'
  			],
  			contenu: [
  				'Calibri',
  				'sans-serif'
  			]
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
  			'rgba-mainColor': 'rgba(8, 55, 233, 1)',
  			'rgba-mainColorLight': 'rgba(8, 55, 233, 0.7)',
  			'rgba-mainColorLighter': 'rgba(8, 55, 233, 0.25)',
  			sidebarColor: 'rgba(8, 55, 233, 0.8)',
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
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
