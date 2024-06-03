import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../../amplify/data/resource";
import { Unit } from "../types/theme.types";

const client = generateClient<Schema>();

export const createDBTimer = async (
	userId: string,
	type: Unit,
	duration: number,
	interval: number = 1
) => {
	try {
		const { errors, data: newTimer } = await client.models.Timer.create({
			userId,
			type,
			duration,
			interval,
		});
		if (errors) {
			throw new Error(errors.toString());
		}
		return newTimer;
	} catch (error) {
		console.error("Error saving to db", error);
	}
};

export const updateIntervalDBTimers = async (id: string, interval: number) => {
	try {
		const { data: updatedTimer, errors } = await client.models.Timer.update({
			id,
			interval,
		});
		if (errors) {
			throw new Error(errors.toString());
		}
		return updatedTimer;
	} catch (error) {
		console.error("Error updating db", error);
	}
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

export const deleteDBTimer = async (id: string) => {
	try {
		const { data: deletedTimer, errors } = await client.models.Timer.delete({ id });
		if (errors) {
			throw new Error(errors.toString());
		}
		return;
	} catch (error) {
		console.error("Error deleting timer from db", error);
	}
};
