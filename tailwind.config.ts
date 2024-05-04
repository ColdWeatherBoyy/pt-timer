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
				trembleHover: "trembleHover 0.3s ease-in-out infinite",
				trembleActive: "trembleActive 0.3s ease-in-out infinite",
				slowFlicker: "slowFlicker 1.5s ease-in-out infinite",
				fadeUpOne: "fadeUpOne 1s ease-in-out",
				fadeUpTwo: "fadeUpTwo 1s ease-in-out",
				fadeUpThree: "fadeUpThree 1s ease-in-out",
			},
			keyframes: {
				trembleHover: {
					"50%": {
						transform: "translateX(-1px) translateY(-1px) rotate(-1deg) scale(1.01)",
					},
					"0%, 100%": {
						transform: "translateX(1px) translateY(1px) rotate(1deg) scale(1)",
					},
				},
				trembleActive: {
					"50%": {
						transform:
							"translateX(-0.25px) translateY(-0.25px) rotate(-0.25deg) scale(0.95)",
					},
					"0%, 100%": {
						transform: "translateX(0.25px) translateY(0.25px) rotate(0.25deg) scale(.95)",
					},
				},
				slowFlicker: {
					"0%, 100%": {
						opacity: ".65",
					},
					"50%": {
						opacity: "0.25",
					},
				},
				fadeUpOne: {
					"0%": {
						opacity: ".1",
					},
					"100%": {
						opacity: ".5",
					},
				},
				fadeUpTwo: {
					"0%": {
						opacity: ".3",
					},
					"100%": {
						opacity: ".7",
					},
				},
				fadeUpThree: {
					"0%": {
						opacity: ".5",
					},
					"100%": {
						opacity: "1",
					},
				},
			},
			colors: {
				jade: {
					"50": "#f5f8f7",
					"100": "#ddeae8",
					"125": "#D4E5E3",
					"200": "#bad5d3",
					"300": "#90b8b6",
					"325": "#80ABA9",
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
					"250": "#bdd2e1",
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
			width: {
				"18": "4.5rem",
			},
			boxShadow: {
				"inner-outer-md":
					"inset 0 2px 4px 0 rgb(0 0 0 / 0.05), 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
				left: "-4px 0 4px 0 rgba(0, 0, 0, 0.05)",
			},
		},
	},
	plugins: [],
};
export default config;
