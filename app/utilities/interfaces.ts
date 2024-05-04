export interface Timers {
	secondTimers: TimerSettings[];
	minuteTimers: TimerSettings[];
}

export interface TimerSettings {
	length: number;
	interval: number;
}
