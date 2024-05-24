export enum Unit {
	seconds = "secs",
	minutes = "mins",
}

export enum ThemeColor {
	jade = "jade",
	horizon = "horizon",
}

export enum ThemeShade {
	light = "light",
	medium = "medium",
	dark = "dark",
}
interface CardShade {
	light: string;
	medium: string;
	dark: string;
}

interface NumberInputPart {
	title: string;
	buttonWrapper: string;
	button: string;
}
interface TogglePart {
	thumb: string;
	track: string;
	text: string;
}

interface ListItemPart {
	item: string;
	itemText: string;
	delete: string;
	deleteText: string;
}

export interface ComponentColorClassList {
	card: CardShade;
	numberInput: NumberInputPart;
	button: string;
	toggle: TogglePart;
	listItem: ListItemPart;
	input: string;
}
