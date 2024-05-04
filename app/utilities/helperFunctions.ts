import { TimerSettings, Timers } from "./interfaces";
import { Unit } from "./themeTypes";

const checkIfExists = (timer: number, timers: Timers, unit: Unit) => {
	const timerArr = unit === Unit.minutes ? "minuteTimers" : "secondTimers";

	for (const timerSetting of timerArr) {
		if (timerSetting.length === timer) {
			return true;
		}
		return false;
	}
};

export const addNewTimer = (
	newTimer: string,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	setNewTimer: (newTimer: string) => void,
	unit: Unit
) => {
	const length = parseFloat(newTimer);
	if (typeof length !== "number" || isNaN(length)) {
		alert("That is not a valid number. Please try again.");
	} else if (Number.isInteger(length) === false) {
		alert("Whole numbers only, please.");
	} else if (length < 0) {
		alert("Positive values only, please.");
	} else if (unit === Unit.minutes ? length > 30 : length > 500) {
		alert(
			`Only values ${
				unit === Unit.minutes ? "30 minutes" : "5 minutes"
			} and below, please.`
		);
	} else if (checkIfExists(length, timers, unit)) {
		alert("That timer already exists.");
	} else if (timers.minuteTimers.length + timers.secondTimers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const newTimers =
			unit === Unit.minutes
				? [...timers.minuteTimers, { length, interval: 1 }]
				: [...timers.secondTimers, { length, interval: 1 }];
		newTimers.sort((a: TimerSettings, b: TimerSettings) => a.length - b.length);
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
