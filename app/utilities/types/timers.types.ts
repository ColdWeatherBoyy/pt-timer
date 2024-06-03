import { Unit } from "./theme.types";

export interface ClockTimeConfig {
	minutes: number;
	seconds: number;
}

export interface TimerConfig {
	duration: number;
	interval: number;
	type: Unit;
	id: string;
}
