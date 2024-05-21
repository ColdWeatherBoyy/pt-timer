import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";
import { Unit } from "./enums";
import { TimerSettings, Timers } from "./interfaces";

const client = generateClient<Schema>();

export const saveDBTimer = async (
	userId: string,
	type: Unit,
	length: number,
	interval: number = 1
) => {
	try {
		const { errors, data: newTimer } = await client.models.Timer.create({
			userId,
			type,
			length,
			interval,
		});
		console.log(newTimer);
		if (errors) {
			throw new Error(errors.toString());
		}
	} catch (error) {
		console.error("Error saving to db", error);
	}
};

export const formatDBTimers = async (storedTimers: Schema["Timer"]["type"][]) => {
	const formatTimers: Timers = { secondTimers: [], minuteTimers: [] };
	storedTimers.map((storedTimer) => {
		const newTimer: TimerSettings = {
			length: storedTimer.length,
			interval: storedTimer.interval,
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

export const getDBTimers = async () => {
	try {
		const { data: Timers, errors } = await client.models.Timer.list();
		if (errors) {
			throw new Error(errors.toString());
		}
		return Timers;
	} catch (error) {
		console.error("Error getting from db", error);
	}
};
