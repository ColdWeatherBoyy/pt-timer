export interface ClockTime {
	minutes: number;
	seconds: number;
}
export interface Timers {
	secondTimers: TimerSettings[];
	minuteTimers: TimerSettings[];
}

export interface TimerSettings {
	length: number;
	interval: number;
	id: string;
}
