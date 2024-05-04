import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import NumberInput from "../components/NumberInput";
import Pause from "../components/SVGs/Pause";
import Play from "../components/SVGs/Play";
import Resume from "../components/SVGs/Resume";
import Stop from "../components/SVGs/Stop";
import { roboto_mono } from "../utilities/fonts";
import { Timers } from "../utilities/interfaces";
import { ComponentColor, ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";

interface TimerProps {
	index: number;
	length: number;
	interval: number;
	unit: Unit;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	deleteTimer: (index: number) => void;
	setTimers: Dispatch<SetStateAction<Timers>>;
	className?: string;
}

const Timer: React.FC<TimerProps> = ({
	index,
	length,
	interval,
	unit,
	setActiveTimer,
	deleteTimer,
	setTimers,
	className,
}) => {
	// TO-DO: Can I use a single state for time even though sometimes I don't even use minutes?
	const [minutes, setMinutes] = useState(unit === Unit.minutes ? length : 0);
	const [seconds, setSeconds] = useState(unit === Unit.seconds ? length : 0);
	// TO-DO: Set an enum for the various stages the timer can be in (started, paused, betweenReps, stopped). Make one state that uses that type.
	const [started, setStarted] = useState<boolean>(false);
	const [paused, setPaused] = useState<boolean>(false);
	const [betweenReps, setBetweenReps] = useState<boolean>(false);
	const [reps, setReps] = useState<{ total: number; active: number }>({
		total: interval,
		active: interval,
	});
	const [betweenRepsCountdown, setBetweenRepsCountdown] = useState<number>(3);

	// *********** UTILITY **************
	// TO-DO: Move these into separate file?
	// TO-DO: Move conditional into singular utility function?
	// Use when unit is set to minutes
	const updateMinutes = (minutes: number, seconds: number) => {
		setMinutes(minutes);
		setSeconds(seconds);
	};
	// Use when unit is set to seconds
	const updateSeconds = (seconds: number) => {
		setSeconds(seconds);
	};
	// TO-DO: Move these into separate file?
	// Set active reps
	const setActiveReps = (active: number) => {
		setReps((prev) => ({ ...prev, active }));
	};
	// Set total reps
	const setTotalReps = (total: number) => {
		setReps((prev) => ({ ...prev, total }));
		setTimers((prev) => {
			const unitTimers = unit === Unit.minutes ? prev.minuteTimers : prev.secondTimers;
			unitTimers[index].interval = total;
			return unit === Unit.minutes
				? { secondTimers: prev.secondTimers, minuteTimers: unitTimers }
				: { secondTimers: unitTimers, minuteTimers: prev.minuteTimers };
		});
	};

	// *********** EVENT HANDLERS **************

	// Start timer
	const handleStart = () => {
		setStarted(true);
	};
	// (Un)pause timer
	const handlePause = () => {
		setPaused((prev) => !prev);
		if (betweenReps) {
			setBetweenReps(false);
		}
	};

	const delay = (ms: number) => {
		return new Promise((resolve) => setTimeout(resolve, ms));
	};

	// Move to next rep (if multiple are set)
	const handleNextRep = async () => {
		setBetweenReps(true);
		// decrement active reps
		setActiveReps(reps.active - 1);
		// Reset timer to initial value
		unit === Unit.minutes ? updateMinutes(length, 0) : updateSeconds(length);
		// Pause for 3 seconds between reps
		for (let count = 3; count > 0; count--) {
			if (count !== 3) setBetweenRepsCountdown(count);
			await delay(1000);
		}
		setBetweenRepsCountdown(3);
		setBetweenReps(false);
		handleStart();
	};
	// Stop timer
	const handleStop = () => {
		setStarted(false);
		setPaused(false);
		setBetweenReps(false);
		// Reset active reps to total reps
		setActiveReps(reps.total);
		// Reset timer to initial value
		unit === Unit.minutes ? updateMinutes(length, 0) : updateSeconds(length);
	};

	// *********** EFFECTS **************
	// Keep active reps updated when total reps change
	useEffect(() => {
		setActiveReps(reps.total);
	}, [reps.total]);

	// Timer logic
	useEffect(() => {
		if (started && !paused && !betweenReps) {
			const interval = setInterval(() => {
				// Logic for minutes
				if (unit === Unit.minutes) {
					if (seconds === 0) {
						if (minutes === 0) {
							// End of current timer
							clearInterval(interval);
							reps.active > 1 ? handleNextRep() : handleStop();
						} else {
							// Decrement minutes and reset seconds
							updateMinutes(minutes - 1, 59);
						}
					} else {
						// Decrement seconds
						updateSeconds(seconds - 1);
					}
					// Logic for seconds
				} else {
					if (seconds === 0) {
						// End of current timer
						clearInterval(interval);
						reps.active > 1 ? handleNextRep() : handleStop();
						// Decrement second
					} else updateSeconds(seconds - 1);
				}
			}, 1000);
			// Clean up
			return () => clearInterval(interval);
		}
	}, [started, paused, betweenReps, seconds, minutes]);

	useEffect(() => {
		if (!started) {
			setActiveTimer(null);
		} else {
			setActiveTimer(index);
		}
	}, [started]);

	return (
		<Card
			cardColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
			cardShade={ThemeShade.light}
			column
			className={`${className} px-6 relative`}
		>
			<div
				className={`${
					ComponentColor[unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon]
						.listItem.deleteText
				} ${
					ComponentColor[unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon]
						.listItem.delete
				} rounded-full text-[11px] px-1 py-0.5 absolute top-0.5 right-0.5 leading-none select-none cursor-pointer hover:shadow-2xl active:shadow-inner transition-all duration-100 ease-in-out`}
				onClick={() => deleteTimer(index)}
			>
				x
			</div>
			<div className={`${roboto_mono.className} w-full flex text-3xl justify-between`}>
				<span className="font-bold">Timer</span>
				<div className="flex flex-row">
					<div className="tracking-tighter text-2xl">Reps:</div>
					<Card
						cardColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						cardShade={ThemeShade.dark}
						className="w-fit py-2 px-3 text-2xl ml-1 leading-none -translate-y-0.5"
					>
						{reps.active}
					</Card>
				</div>
			</div>

			<div className="flex flex-col gap-2 items-center">
				<div>
					<div
						className={`${roboto_mono.className} text-5xl ${
							!betweenReps
								? "opacity-100"
								: betweenRepsCountdown === 3
								? "animate-fadeUpOne"
								: betweenRepsCountdown === 2
								? "animate-fadeUpTwo"
								: "animate-fadeUpThree"
						}`}
					>
						{seconds === 0 && minutes === 0 && reps.active === 1
							? "Done!"
							: seconds === 0 && minutes === 0
							? "Pause!"
							: betweenReps && betweenRepsCountdown === 3
							? "Ready"
							: betweenReps && betweenRepsCountdown === 2
							? "Set"
							: betweenReps && betweenRepsCountdown === 1
							? "Go!"
							: unit === Unit.minutes
							? `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
							: String(seconds)}
					</div>
					<div className="text-sm text-center">{betweenReps ? "Nice!" : unit}</div>
				</div>
				<div className="flex justify-center text-2xl gap-10 items-center">
					<Button
						buttonColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						onClick={started ? handlePause : handleStart}
						className="p-10"
					>
						{started ? (
							paused ? (
								<Resume size="30" />
							) : (
								<Pause size="30" />
							)
						) : (
							<Play size="30" />
						)}
					</Button>
					<div className={`${started ? "pointer-events-none opacity-65" : ""}`}>
						<NumberInput
							color={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
							title="Set Reps"
							number={reps.total}
							setNumber={setTotalReps}
							limits={{ min: 1, max: 5 }}
						/>
					</div>
					<Button
						buttonColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						onClick={handleStop}
					>
						<Stop size="30" />
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
