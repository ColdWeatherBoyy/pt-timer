import { Dispatch, SetStateAction } from "react";
import { type Schema } from "../../amplify/data/resource";
import { createDBTimer, deleteDBTimer } from "./amplify/amplify.db";
import { themeColorOptions } from "./style/componentColor.styles";
import { Unit } from "./types/theme.types";
import { TimerConfig } from "./types/timers.types";

const checkIfExists = (length: number, timers: TimerConfig[], unit: Unit) => {
	for (const timer of timers) {
		if (timer.length === length && timer.type === unit) {
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
	const length = Number(newTimer);
	if (isNaN(length)) {
		alert("That is not a valid number. Please try again.");
	} else if (!Number.isInteger(length)) {
		alert("Whole numbers only, please.");
	} else if (length < 0) {
		alert("Positive values only, please.");
	} else if (isMinute ? length > 30 : length > 5 * 60) {
		alert(`Only values ${isMinute ? "30 minutes" : "5 minutes"} and below, please.`);
	} else if (checkIfExists(length, timers, unit)) {
		alert("That timer already exists.");
	} else if (timers.length === 6) {
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

		const newTimers = [...timers];
		newTimers.push({ length, interval: 1, id: data.id, type: unit });
		// To-Do: Sort correctly
		newTimers.sort((a: TimerConfig, b: TimerConfig) =>
			a.type === b.type ? a.length - b.length : a.type === Unit.seconds ? -1 : 1
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
