import type { Config } from "tailwindcss";
import {
	fadeUpOptions,
	getAnimateGradient,
	trembleActive,
	trembleHover,
} from "./tailwindThemeExtensions/tailwind.animations";
import {
	horizon,
	jade,
	timerStatusColors,
} from "./tailwindThemeExtensions/tailwind.colors";

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
				animateGradientRunning:
					"runningGradientKeyframes 1s infinite ease-in-out alternate",
				animateGradientPaused:
					"pausedGradientKeyframes 1s infinite ease-in-out alternate",
				animateGradientBetweenReps:
					"betweenRepsGradientKeyframes 1s infinite ease-in-out alternate",
				animateGradientStopping:
					"stoppingGradientKeyframes 1s infinite ease-in-out alternate",
			},
			keyframes: {
				...trembleHover,
				...trembleActive,
				...fadeUpOptions,
				runningGradientKeyframes: getAnimateGradient(
					timerStatusColors.timerStatus.running
				),
				pausedGradientKeyframes: getAnimateGradient(timerStatusColors.timerStatus.paused),
				betweenRepsGradientKeyframes: getAnimateGradient(
					timerStatusColors.timerStatus.betweenReps
				),
				stoppingGradientKeyframes: getAnimateGradient(
					timerStatusColors.timerStatus.stopping
				),
			},
			colors: {
				...jade,
				...horizon,
				...timerStatusColors,
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
