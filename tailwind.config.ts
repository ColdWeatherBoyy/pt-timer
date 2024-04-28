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
				horizon: {
					"50": "#f5f8fa",
					"100": "#e9eff5",
					"200": "#cedee9",
					"300": "#a3c1d6",
					"400": "#72a1be",
					"500": "#568cae",
					"600": "#3d6b8c",
					"700": "#335671",
					"800": "#2d4a5f",
					"900": "#2a3f50",
					"950": "#1c2935",
				},
			},
		},
	},
	plugins: [],
};
export default config;
