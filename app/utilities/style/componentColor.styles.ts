import { ComponentColorClassList, ThemeColor } from "../types/theme.types";

export const ComponentColor: Record<ThemeColor, ComponentColorClassList> = {
	jade: {
		card: {
			light: "bg-gradient-to-br from-jade-325 to-jade-125 border-jade-200 text-jade-950",
			medium: "bg-gradient-to-br from-jade-400 to-jade-200 border-jade-300 text-jade-950",
			dark: "bg-gradient-to-br from-jade-900 to-jade-600 border-jade-700 text-jade-100",
		},
		numberInput: {
			title: "bg-gradient-to-br from-jade-600 to-jade-900 border-jade-800 text-jade-100 ",
			buttonWrapper: "border-jade-800 bg-gradient-to-br from-jade-200 to-jade-100",
			button:
				"bg-gradient-to-br from-jade-600 to-jade-900 border-jade-700 text-jade-100 hover:from-jade-500 hover:to-jade-800 hover:border-jade-500 active:from-jade-950 active:to-jade-700 active:border-jade-700 active:text-jade-200",
		},
		button:
			"bg-gradient-to-r to-jade-500 from-jade-800 text-jade-50 border border-jade-600 hover:border-jade-200 active:from-jade-950 active:to-jade-700 active:text-jade-100",
		toggle: {
			thumb:
				"bg-gradient-to-r from-jade-500 to-jade-800 border border-jade-100 hover:border-jade-600 hover:from-jade-500 hover:to-jade-700 transition-all duration-200 ease-in-out",
			track: "bg-jade-100 border border-jade-300",
			text: "text-jade-500",
		},
		listItem: {
			item: "bg-gradient-to-r from-jade-600 to-jade-900 border border-jade-200",
			itemText: "text-jade-100",
			delete: "bg-jade-50 border border-jade-400 hover:bg-jade-200 active:bg-jade-600 ",
			deleteText: "text-jade-950 active:text-jade-50",
		},
		input: "bg-jade-50 border-jade-300",
	},
	horizon: {
		card: {
			light:
				"bg-gradient-to-br from-horizon-400 to-horizon-200 border-horizon-300 text-horizon-950",
			medium:
				"bg-gradient-to-br from-horizon-500 to-horizon-250 border-horizon-400 text-horizon-950",
			dark: "bg-gradient-to-br from-horizon-900 to-horizon-600 border-horizon-700 text-horizon-100",
		},
		numberInput: {
			title:
				"bg-gradient-to-br from-horizon-600 to-horizon-900 border-horizon-800 text-horizon-100",
			buttonWrapper:
				"border-horizon-800 bg-gradient-to-br from-horizon-300 to-horizon-200",
			button:
				"bg-gradient-to-br from-horizon-600 to-horizon-900 border-horizon-700 text-horizon-100 hover:from-horizon-500 hover:to-horizon-800 hover:border-horizon-500 active:from-horizon-950 active:to-horizon-700 active:border-horizon-700 active:text-horizon-200",
		},
		button:
			"bg-gradient-to-r to-horizon-500 from-horizon-800 text-horizon-100 border border-horizon-600 hover:border-horizon-300 active:from-horizon-950 active:to-horizon-700 active:text-horizon-200",
		toggle: {
			thumb:
				"bg-gradient-to-r from-horizon-400 to-horizon-800 border border-horizon-100 hover:border-horizon-600 hover:from-horizon-500 hover:to-horizon-700 transition-all duration-200 ease-in-out",
			track: "bg-horizon-100 border border-horizon-300",
			text: "text-horizon-500",
		},
		listItem: {
			item: "bg-gradient-to-r from-horizon-600 to-horizon-900 border border-horizon-200",
			itemText: "text-horizon-100",
			delete:
				"bg-horizon-50 border border-horizon-400 hover:bg-horizon-200 active:bg-horizon-600 ",
			deleteText: "text-horizon-950 active:text-horizon-50",
		},
		input: "bg-horizon-50 border-horizon-300",
	},
};

export const themeColorOptions = {
	jadePrimary: {
		primary: ThemeColor.jade,
		secondary: ThemeColor.horizon,
	},
	horizonPrimary: {
		primary: ThemeColor.horizon,
		secondary: ThemeColor.jade,
	},
};
