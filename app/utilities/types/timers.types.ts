import { Unit } from "./theme.types";

export interface TimerConfig {
	duration: number;
	interval: number;
	unit: Unit;
	id: string;
}

export enum TimerStatus {
	running = "running",
	paused = "paused",
	betweenReps = "betweenReps",
	stopping = "stopping",
	null = "null",
}
