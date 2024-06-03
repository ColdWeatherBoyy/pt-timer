import { Unit } from "./theme.types";

export interface TimerConfig {
	duration: number;
	interval: number;
	unit: Unit;
	id: string;
}

export enum TimerStatus {
	started = "Started",
	paused = "Paused",
	betweenReps = "betweenReps",
	stopped = "stopped",
}
