import { Unit } from "./theme.types";

export interface ClockTimeConfig {
	minutes: number;
	seconds: number;
}

export interface TimerConfig {
	length: number;
	interval: number;
	type: Unit;
	id: string;
}
