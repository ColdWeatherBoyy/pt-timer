import { ColorsInterface } from "./tailwind.types";

export const getAnimateGradient = (color: ColorsInterface) => {
	return {
		"0%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 30%, ${color.medium} 100%)`,
		},
		"3.125%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 31.25%, ${color.medium} 100%)`,
		},
		"6.25%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 32.5%, ${color.medium} 100%)`,
		},
		"9.375%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 33.75%, ${color.medium} 100%)`,
		},
		"12.5%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 35%, ${color.medium} 100%)`,
		},
		"15.625%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 36.25%, ${color.medium} 100%)`,
		},
		"18.75%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 37.5%, ${color.medium} 100%)`,
		},
		"21.875%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 38.75%, ${color.medium} 100%)`,
		},
		"25%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 40%, ${color.medium} 100%)`,
		},
		"28.125%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 41.25%, ${color.medium} 100%)`,
		},
		"31.25%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 42.5%, ${color.medium} 100%)`,
		},
		"34.375%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 43.75%, ${color.medium} 100%)`,
		},
		"37.5%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 45%, ${color.medium} 100%)`,
		},
		"40.625%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 46.25%, ${color.medium} 100%)`,
		},
		"43.75%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 47.5%, ${color.medium} 100%)`,
		},
		"46.875%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 48.75%, ${color.medium} 100%)`,
		},
		"50%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 50%, ${color.medium} 100%)`,
		},
		"53.125%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 51.25%, ${color.medium} 100%)`,
		},
		"56.25%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 52.5%, ${color.medium} 100%)`,
		},
		"59.375%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 53.75%, ${color.medium} 100%)`,
		},
		"62.5%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 55%, ${color.medium} 100%)`,
		},
		"65.625%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 56.25%, ${color.medium} 100%)`,
		},
		"68.75%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 57.5%, ${color.medium} 100%)`,
		},
		"71.875%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 58.75%, ${color.medium} 100%)`,
		},
		"75%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 60%, ${color.medium} 100%)`,
		},
		"78.125%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 61.25%, ${color.medium} 100%)`,
		},
		"81.25%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 62.5%, ${color.medium} 100%)`,
		},
		"84.375%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 63.75%, ${color.medium} 100%)`,
		},
		"87.5%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 65%, ${color.medium} 100%)`,
		},
		"90.625%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 66.25%, ${color.medium} 100%)`,
		},
		"93.75%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 67.5%, ${color.medium} 100%)`,
		},
		"96.875%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 68.75%, ${color.medium} 100%)`,
		},
		"100%": {
			backgroundImage: `linear-gradient(to bottom right, ${color.dark} 0%, ${color.light} 70%, ${color.medium} 100%)`,
		},
	};
};

export const trembleHover = {
	trembleHover: {
		"50%": {
			transform: "translateX(-1px) translateY(-1px) rotate(-1deg) scale(1.01)",
		},
		"0%, 100%": {
			transform: "translateX(1px) translateY(1px) rotate(1deg) scale(1)",
		},
	},
};

export const trembleActive = {
	trembleActive: {
		"50%": {
			transform: "translateX(-0.25px) translateY(-0.25px) rotate(-0.25deg) scale(0.95)",
		},
		"0%, 100%": {
			transform: "translateX(0.25px) translateY(0.25px) rotate(0.25deg) scale(.95)",
		},
	},
};

export const slowFlicker = {
	slowFlicker: {
		"0%, 100%": {
			opacity: ".65",
		},
		"50%": {
			opacity: "0.25",
		},
	},
};
export const fadeUpOptions = {
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
};
