import { Units } from "./componentTypings";
import { Timers } from "./interfaces";

export const addNewTimer = (
	newTimer: string,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	setNewTimer: (newTimer: string) => void,
	units: Units
) => {
	const timer = parseInt(newTimer);
	if (typeof timer !== "number" || isNaN(timer)) {
		alert("That is not a valid number. Please try again.");
	} else if (timer < 0) {
		alert("Positive values only, please.");
	} else if (units === Units.minutes ? timer > 120 : timer > 500) {
		alert(
			`Only values ${
				units === Units.minutes ? "2 hours" : "5 minutes"
			} and below, please.`
		);
	} else if (
		units === Units.minutes
			? timers.minuteTimers.includes(timer)
			: timers.secondTimers.includes(timer)
	) {
		alert("That timer already exists.");
	} else if (timers.minuteTimers.length + timers.secondTimers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const newTimers =
			units === Units.minutes
				? [...timers.minuteTimers, timer]
				: [...timers.secondTimers, timer];
		newTimers.sort((a: number, b: number) => a - b);
		setTimers(
			units === Units.minutes
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
	units: Units
) => {
	const newTimers =
		units === Units.minutes ? [...timers.minuteTimers] : [...timers.secondTimers];
	newTimers.splice(index, 1);
	setTimers(
		units === Units.minutes
			? { secondTimers: timers.secondTimers, minuteTimers: newTimers }
			: { secondTimers: newTimers, minuteTimers: timers.minuteTimers }
	);
};
