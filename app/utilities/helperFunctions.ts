import { type Schema } from "../../amplify/data/resource";
import { createDBTimer, deleteDBTimer } from "./databaseFunctions";
import { Unit } from "./enums";
import { themeColorOptions } from "./themeTypes";
import { TimerSettings, Timers } from "./types/timers.types";

const checkIfExists = (timer: number, timers: Timers, isMinute: boolean) => {
	const timerArr = timers[isMinute ? "minuteTimers" : "secondTimers"];

	for (const timerSetting of timerArr) {
		if (timerSetting.length === timer) {
			return true;
		}
	}
	return false;
};

export const addNewTimer = async (
	newTimer: string,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	setNewTimer: (newTimer: string) => void,
	// unit: Unit,
	isMinute: boolean,
	userId: string
) => {
	const length = parseFloat(newTimer);
	if (typeof length !== "number" || isNaN(length)) {
		alert("That is not a valid number. Please try again.");
	} else if (Number.isInteger(length) === false) {
		alert("Whole numbers only, please.");
	} else if (length < 0) {
		alert("Positive values only, please.");
	} else if (isMinute ? length > 30 : length > 5 * 60) {
		alert(`Only values ${isMinute ? "30 minutes" : "5 minutes"} and below, please.`);
	} else if (checkIfExists(length, timers, isMinute)) {
		alert("That timer already exists.");
	} else if (timers.minuteTimers.length + timers.secondTimers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const data = await createDBTimer(
			userId,
			isMinute ? Unit.minutes : Unit.seconds,
			length
		);
		if (!data) {
			console.error("uh oh");
			return;
		}
		const newTimers = isMinute
			? [...timers.minuteTimers, { length, interval: 1, id: data.id }]
			: [...timers.secondTimers, { length, interval: 1, id: data.id }];
		newTimers.sort((a: TimerSettings, b: TimerSettings) => a.length - b.length);
		setTimers(
			isMinute
				? { secondTimers: timers.secondTimers, minuteTimers: newTimers }
				: { secondTimers: newTimers, minuteTimers: timers.minuteTimers }
		);
	}
	setNewTimer("");
};

export const removeTimer = async (
	index: number,
	timers: Timers,
	setTimers: (timers: Timers) => void,
	unit: Unit,
	id: string
) => {
	await deleteDBTimer(id);
	const newTimers =
		unit === Unit.minutes ? [...timers.minuteTimers] : [...timers.secondTimers];
	newTimers.splice(index, 1);
	setTimers({
		...timers,
		[unit === Unit.minutes ? "minuteTimers" : "secondTimers"]: newTimers,
	});
};

export const delay = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const formatDBTimers = async (storedTimers: Schema["Timer"]["type"][]) => {
	const formatTimers: Timers = { secondTimers: [], minuteTimers: [] };
	storedTimers.map((storedTimer) => {
		const newTimer: TimerSettings = {
			length: storedTimer.length,
			interval: storedTimer.interval,
			id: storedTimer.id,
		};
		if (storedTimer.type === Unit.minutes) {
			formatTimers.minuteTimers.push(newTimer);
			formatTimers.minuteTimers = formatTimers.minuteTimers.sort(
				(a: TimerSettings, b: TimerSettings) => a.length - b.length
			);
		} else {
			formatTimers.secondTimers.push(newTimer);
			formatTimers.secondTimers = formatTimers.secondTimers.sort(
				(a: TimerSettings, b: TimerSettings) => a.length - b.length
			);
		}
	});
	return formatTimers;
};

export const getThemeColor = (isMinute: boolean) =>
	isMinute ? themeColorOptions.horizonPrimary : themeColorOptions.jadePrimary;
