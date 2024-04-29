export const addNewTimer = (
	newTimer: string,
	timers: number[],
	setTimers: (timers: number[]) => void,
	setNewTimer: (newTimer: string) => void
) => {
	const timer = parseInt(newTimer);
	if (typeof timer !== "number" || isNaN(timer)) {
		alert("That is not a valid number. Please try again.");
	} else if (timer < 0) {
		alert("Positive values only, please.");
	} else if (timer > 120) {
		alert("Only values 2 hours and below, please.");
	} else if (timers.includes(timer)) {
		alert("That timer already exists.");
	} else if (timers.length === 6) {
		alert("You can only save 6 timers at once.");
	} else {
		const newTimers = [...timers, timer];
		newTimers.sort((a: number, b: number) => a - b);
		setTimers(newTimers);
	}
	setNewTimer("");
};

export const removeTimer = (
	index: number,
	timers: number[],
	setTimers: (timers: number[]) => void
) => {
	const newTimers = [...timers];
	newTimers.splice(index, 1);
	setTimers(newTimers);
};
