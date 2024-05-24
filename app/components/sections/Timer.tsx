import { updateIntervalDBTimers } from "@/app/utilities/databaseFunctions";
import { Unit } from "@/app/utilities/enums";
import { roboto_mono } from "@/app/utilities/fonts";
import { delay, getThemeColor } from "@/app/utilities/helperFunctions";
import { ComponentColor, ThemeShade } from "@/app/utilities/themeTypes";
import { Timers, ClockTime } from "@/app/utilities/types/timers.types";
import React, { Dispatch, SetStateAction, useCallback, useEffect, useState } from "react";
import Button from "../Button";
import Card from "../Card";
import NumberInput from "../NumberInput";
import Pause from "../SVGs/Pause";
import Play from "../SVGs/Play";
import Resume from "../SVGs/Resume";
import Stop from "../SVGs/Stop";

interface TimerProps {
	index: number;
	length: number;
	interval: number;
	isMinute: boolean;
	id: string;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	deleteTimer: (index: number) => void;
	setTimers: Dispatch<SetStateAction<Timers>>;
	className?: string;
}

const Timer: React.FC<TimerProps> = ({
	index,
	length,
	interval,
	isMinute,
	id,
	setActiveTimer,
	deleteTimer,
	setTimers,
	className,
}) => {
	const themeColor = getThemeColor(isMinute);

	// TO-DO: Can I use a single state for time even though sometimes I don't even use minutes?
	const [clockTime, setClockTime] = useState<ClockTime>(
		isMinute ? { minutes: length, seconds: 0 } : { minutes: 0, seconds: length }
	);

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
	// Resets clocktime
	const resetClockTime = useCallback(() => {
		setClockTime(
			isMinute ? { minutes: length, seconds: 0 } : { minutes: 0, seconds: length }
		);
	}, [isMinute, length]);
	// Decrements either seconds or minutes
	const decrementTime = () => {
		setClockTime((prev) =>
			prev.seconds !== 0
				? {
						minutes: prev.minutes,
						seconds: prev.seconds - 1,
				  }
				: {
						minutes: prev.minutes - 1,
						seconds: 59,
				  }
		);
	};

	// TO-DO: Move these into separate file?
	// Set active reps (making my own Dispatch of SetStateAction)
	const setActiveReps: Dispatch<SetStateAction<number>> = (set) => {
		setReps((prev) => ({
			...prev,
			active: typeof set === "function" ? set(prev.active) : set,
		}));
	};

	// Set total reps
	const setTotalReps = async (total: number) => {
		setReps((prev) => ({ ...prev, total }));
		await updateIntervalDBTimers(id, total);
		setTimers((prev) => {
			const unitTimers = isMinute ? prev.minuteTimers : prev.secondTimers;
			unitTimers[index].interval = total;
			return isMinute
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
	// Move to next rep (if multiple are set)
	const handleNextRep = useCallback(async () => {
		setBetweenReps(true); // decrement active reps
		setActiveReps((prev) => prev - 1); // Reset timer to initial value
		resetClockTime(); // Pause for 3 seconds between reps
		// Countdown
		for (let count = 3; count > 0; count--) {
			if (count !== 3) setBetweenRepsCountdown(count);
			await delay(1000);
		}
		// Start next rep
		setBetweenRepsCountdown(3);
		setBetweenReps(false);
		handleStart();
	}, [resetClockTime]);

	// Stop timer
	const handleStop = useCallback(() => {
		setStarted(false);
		setPaused(false);
		setBetweenReps(false);
		// Reset active reps to total reps
		setReps((prev) => ({ ...prev, active: prev.total }));
		// Reset timer to initial value
		resetClockTime();
	}, [resetClockTime]);

	// *********** EFFECTS **************
	// Keep active reps updated when total reps change
	useEffect(() => {
		setActiveReps(reps.total);
	}, [reps.total]);

	// Timer logic
	useEffect(() => {
		if (started && !paused && !betweenReps) {
			const interval = setInterval(() => {
				if (clockTime.seconds === 0 && clockTime.minutes === 0) {
					clearInterval(interval);
					reps.active > 1 ? handleNextRep() : handleStop();
				} else {
					decrementTime();
				}
			}, 1000);
			// Clean up
			return () => clearInterval(interval);
		}
	}, [started, paused, betweenReps, clockTime, handleStop, handleNextRep, reps.active]);

	useEffect(() => {
		if (!started) {
			setActiveTimer(null);
		} else {
			setActiveTimer(index);
		}
	}, [started, index, setActiveTimer]);

	return (
		<Card
			cardColor={themeColor.primary}
			cardShade={ThemeShade.light}
			column
			className={`${className} px-6 relative`}
		>
			<div
				className={`${ComponentColor[themeColor.secondary].listItem.deleteText} ${
					ComponentColor[themeColor.secondary].listItem.delete
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
						cardColor={themeColor.secondary}
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
						{clockTime.seconds === 0 && clockTime.minutes === 0 && reps.active === 1
							? "Done!"
							: clockTime.seconds === 0 && clockTime.minutes === 0
							? "Pause!"
							: betweenReps && betweenRepsCountdown === 3
							? "Ready"
							: betweenReps && betweenRepsCountdown === 2
							? "Set"
							: betweenReps && betweenRepsCountdown === 1
							? "Go!"
							: isMinute
							? `${String(clockTime.minutes).padStart(2, "0")}:${String(
									clockTime.seconds
							  ).padStart(2, "0")}`
							: String(clockTime.seconds)}
					</div>
					<div className="text-sm text-center">
						{betweenReps ? "Nice!" : isMinute ? Unit.minutes : Unit.seconds}
					</div>
				</div>
				<div className="flex justify-center text-2xl gap-10 items-center">
					<Button
						buttonColor={themeColor.secondary}
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
							color={themeColor.secondary}
							title="Set Reps"
							number={reps.total}
							setNumber={setTotalReps}
							limits={{ min: 1, max: 5 }}
						/>
					</div>
					<Button buttonColor={themeColor.secondary} onClick={handleStop}>
						<Stop size="30" />
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
