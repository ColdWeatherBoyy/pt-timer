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

export const addNewTimer = async (
	newTimer: string,
	timers: TimerConfig[],
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>,
	setNewTimer: Dispatch<SetStateAction<string>>,
	isMinute: boolean,
	userId: string | null
) => {
	if (!userId)
		throw new Error(
			"Internal Error: Shouldn't be able to use this function if not logged in."
		);
	// TO-DO Fix this
	const unit = isMinute ? Unit.minutes : Unit.seconds;
	const duration = Number(newTimer);
	if (newTimer.length === 0) {
		return;
	} else if (isNaN(duration)) {
		alert("That is not a valid number. Please try again.");
	} else if (!Number.isInteger(duration)) {
		alert("Whole numbers only, please.");
	} else if (duration <= 0) {
		alert("Numbers above 0 only, please.");
	} else if (isMinute ? duration > 30 : duration > 2 * 60) {
		alert(`Only values ${isMinute ? "30 minutes" : "2 minutes"} and below, please.`);
	} else if (checkIfExists(duration, timers, unit)) {
		alert("That timer already exists.");
	} else if (timers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const data = await createDBTimer(
			userId,
			isMinute ? Unit.minutes : Unit.seconds,
			duration
		);
		if (!data) {
			console.error("uh oh");
			return;
		}

		const newTimers = [...timers];
		newTimers.push({ duration, interval: 1, id: data.id, unit: unit });
		// To-Do: Sort correctly
		newTimers.sort((a: TimerConfig, b: TimerConfig) =>
			a.unit === b.unit ? a.duration - b.duration : a.unit === Unit.seconds ? -1 : 1
		);
		setTimers(newTimers);
	}
	setNewTimer("");
};

export const removeTimer = async (
	index: number,
	timers: TimerConfig[],
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>,
	unit: Unit,
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
