import { Unit } from "./themeTypes";
import { Timers } from "./interfaces";

export const addNewTimer = (
	newTimer: string,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	setNewTimer: (newTimer: string) => void,
	unit: Unit
) => {
	const timer = parseFloat(newTimer);
	if (typeof timer !== "number" || isNaN(timer)) {
		alert("That is not a valid number. Please try again.");
	} else if (Number.isInteger(timer) === false) {
		alert("Whole numbers only, please.");
	} else if (timer < 0) {
		alert("Positive values only, please.");
	} else if (unit === Unit.minutes ? timer > 120 : timer > 500) {
		alert(
			`Only values ${unit === Unit.minutes ? "2 hours" : "5 minutes"} and below, please.`
		);
	} else if (
		unit === Unit.minutes
			? timers.minuteTimers.includes(timer)
			: timers.secondTimers.includes(timer)
	) {
		alert("That timer already exists.");
	} else if (timers.minuteTimers.length + timers.secondTimers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const newTimers =
			unit === Unit.minutes
				? [...timers.minuteTimers, timer]
				: [...timers.secondTimers, timer];
		newTimers.sort((a: number, b: number) => a - b);
		setTimers(
			unit === Unit.minutes
				? { secondTimers: timers.secondTimers, minuteTimers: newTimers }
				: { secondTimers: newTimers, minuteTimers: timers.minuteTimers }
		);
	}
	setNewTimer("");
};

export const removeTimer = (
	index: number,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	unit: Unit
) => {
	const newTimers =
		unit === Unit.minutes ? [...timers.minuteTimers] : [...timers.secondTimers];
	newTimers.splice(index, 1);
	setTimers(
		unit === Unit.minutes
			? { secondTimers: timers.secondTimers, minuteTimers: newTimers }
			: { secondTimers: newTimers, minuteTimers: timers.minuteTimers }
	);
};
