import { Unit } from "./theme.types";

export interface TimerConfig {
	duration: number;
	interval: number;
	unit: Unit;
	id: string;
}

export enum TimerStatus {
	running = "started",
	paused = "paused",
	betweenReps = "betweenReps",
	stopping = "stopping",
	null = "null",
}
