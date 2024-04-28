import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			animation: {
				tremble: "tremble 0.3s ease-in-out infinite",
			},
			keyframes: {
				tremble: {
					"50%": {
						transform:
							"translateX(-0.33px) translateY(-0.33px) rotate(-0.33deg) scale(1.01)",
					},
					"0%, 100%": {
						transform: "translateX(0.33px) translateY(0.33px) rotate(0.33deg) scale(1)",
					},
				},
			},
			colors: {
				jade: {
					"50": "#f5f8f7",
					"100": "#ddeae8",
					"200": "#bad5d3",
					"300": "#90b8b6",
					"400": "#699897",
					"500": "#4d7a7a",
					"600": "#3e6263",
					"700": "#345051",
					"800": "#2d4142",
					"900": "#283839",
					"950": "#132020",
				},
			},
		},
	},
	plugins: [],
};
export default config;
