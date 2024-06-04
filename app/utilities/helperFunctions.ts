import { Dispatch, SetStateAction } from "react";
import { createDBTimer, deleteDBTimer } from "./amplify/amplify.db";
import { themeColorOptions } from "./style/componentColor.styles";
import { Unit } from "./types/theme.types";
import { TimerConfig } from "./types/timers.types";

const checkIfExists = (duration: number, timers: TimerConfig[], unit: Unit) => {
	for (const timer of timers) {
		if (timer.duration === duration && timer.unit === unit) {
			return true;
		}
	}
	return false;
};

const validateNewTimer = (
	newTimer: string,
	duration: number,
	unit: Unit,
	timers: TimerConfig[]
) => {
	if (newTimer.length === 0) return false;
	if (isNaN(duration)) {
		alert("That is not a valid number. Please try again.");
		console.error("Invalid number.");
		return false;
	}
	if (!Number.isInteger(duration)) {
		alert("Whole numbers only, please.");
		console.error("Non-integer number.");
		return false;
	}
	if (duration <= 0) {
		alert("Numbers above 0 only, please.");
		console.error("Non-positive number");
		return false;
	}
	if (unit === Unit.minutes && duration > 30 * 60) {
		alert("30 minutes and below, please.");
		console.error("Minute duration limit exceeded.");
		return false;
	}
	if (unit === Unit.seconds && duration > 2 * 60) {
		alert("2 minutes and below, please.");
		console.error("Second duration limit exceeded.");
		return false;
	}
	if (checkIfExists(duration, timers, unit)) {
		alert("That timer already exists.");
		console.error("Timer already exists.");
		return false;
	}
	if (timers.length === 6) {
		alert("You can only save 6 timers at once.");
		console.error("Timers length limit exceeded.");
		return false;
	}
	return true;
};

export const sortTimers = (timers: TimerConfig[]) => {
	return timers.sort((a: TimerConfig, b: TimerConfig) =>
		a.unit === b.unit ? a.duration - b.duration : a.unit === Unit.seconds ? -1 : 1
	);
};

export const addNewTimer = async (
	newTimer: string,
	timers: TimerConfig[],
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>,
	setNewTimer: Dispatch<SetStateAction<string>>,
	unit: Unit,
	userId: string | null
) => {
	if (!userId)
		throw new Error(
			"Internal Error: Shouldn't be able to use this function if not logged in."
		);
	const duration = Number(newTimer) * (unit === Unit.minutes ? 60 : 1);
	if (!validateNewTimer(newTimer, duration, unit, timers)) {
		setNewTimer("");
		return;
	}
	const data = await createDBTimer(userId, unit, duration);
	if (!data) {
		console.error("Internal Error: Error creating timer in DB");
		return;
	}
	const newTimers = [...timers, { duration, interval: 1, id: data.id, unit: unit }];
	setTimers(sortTimers(newTimers));
	setNewTimer("");
};

export const removeTimer = async (
	index: number,
	timers: TimerConfig[],
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>,
	id: string
) => {
	await deleteDBTimer(id);
	const newTimers = [...timers];
	newTimers.splice(index, 1);
	setTimers(newTimers);
};

export const delay = (ms: number) => {
	return new Promise((resolve) => setTimeout(resolve, ms));
};

export const getThemeColor = (isMinute: boolean) =>
	isMinute ? themeColorOptions.horizonPrimary : themeColorOptions.jadePrimary;
