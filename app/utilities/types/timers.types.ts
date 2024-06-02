import { Unit } from "./theme.types";

export interface ClockTimeConfig {
	minutes: number;
	seconds: number;
}
// export interface TimersCollection {
// 	secondTimers: TimerConfig[];
// 	minuteTimers: TimerConfig[];
// }

export interface TimerConfig {
	length: number;
	interval: number;
	type: Unit;
	id: string;
}
