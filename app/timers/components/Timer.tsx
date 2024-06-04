import { ActiveTimerContext } from "@/app/providers/ActiveTimerProvider";
import { updateIntervalDBTimers } from "@/app/utilities/amplify/amplify.db";
import { getThemeColor } from "@/app/utilities/helperFunctions";
import { ComponentColor } from "@/app/utilities/style/componentColor.styles";
import { roboto_mono } from "@/app/utilities/style/fonts";
import { ThemeShade, Unit } from "@/app/utilities/types/theme.types";
import { TimerConfig, TimerStatus } from "@/app/utilities/types/timers.types";
import { Dispatch, FC, SetStateAction, useContext, useEffect, useState } from "react";
import Button from "../../components/general/Button";
import Card from "../../components/general/Card";
import NumberInput from "../../components/general/NumberInput";
import Pause from "./SVGs/Pause";
import Play from "./SVGs/Play";
import Resume from "./SVGs/Resume";
import Stop from "./SVGs/Stop";

interface TimerProps {
	index: number;
	duration: number;
	interval: number;
	isMinute: boolean;
	id: string;
	deleteTimer: (index: number) => void;
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>;
	className?: string;
}

const Timer: FC<TimerProps> = ({
	index,
	duration,
	interval,
	isMinute,
	id,
	deleteTimer,
	setTimers,
	className,
}) => {
	const themeColor = getThemeColor(isMinute);
	const { activeTimer, activateTimer, deactivateTimer } = useContext(ActiveTimerContext);

	const [clockTime, setClockTime] = useState<number>(duration);
	const [timerStatus, setTimerStatus] = useState<TimerStatus>(TimerStatus.stopped);
	const [reps, setReps] = useState<{ total: number; active: number }>({
		total: interval,
		active: interval,
	});
	const [betweenRepsCountdown, setBetweenRepsCountdown] = useState<number>(3);

	// *********** Rep Utilities **************
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
			const timers = [...prev];
			timers[index].interval = total;
			return timers;
		});
	};

	// *********** EFFECTS **************
	// Keep active reps updated when total reps change
	useEffect(() => {
		setActiveReps(reps.total);
	}, [reps.total]);

	// Timer logic
	useEffect(() => {
		if (timerStatus === TimerStatus.started) {
			// set active timer
			activateTimer(index);
			// Timer count down
			const interval = setInterval(() => {
				if (clockTime === 0) {
					clearInterval(interval);
					if (reps.active > 1) {
						setActiveReps((prev) => prev - 1);
						setTimerStatus(TimerStatus.betweenReps);
					} else {
						setTimerStatus(TimerStatus.stopped);
					}
				} else {
					setClockTime((prev) => prev - 1);
				}
			}, 1000);
			return () => clearInterval(interval);
		} else if (timerStatus === TimerStatus.betweenReps) {
			const interval = setInterval(() => {
				setBetweenRepsCountdown((prev) => {
					if (prev === 1) {
						clearInterval(interval);
						setClockTime(duration);
						setTimerStatus(TimerStatus.started);
						return 3;
					} else {
						return prev - 1;
					}
				});
			}, 1000);
			return () => clearInterval(interval);
		} else if (timerStatus === TimerStatus.stopped) {
			setReps((prev) => ({ ...prev, active: prev.total }));
			setClockTime(duration);
			deactivateTimer();
		}
	}, [
		timerStatus,
		clockTime,
		index,
		duration,
		activateTimer,
		deactivateTimer,
		betweenRepsCountdown,
		reps.active,
	]);

	return (
		<Card
			cardColor={themeColor.primary}
			cardShade={ThemeShade.light}
			column
			className={`${className} px-6 relative`}
		>
			<div
				className={`${
					timerStatus !== TimerStatus.stopped ? "pointer-events-none opacity-65" : ""
				} ${ComponentColor[themeColor.secondary].listItem.deleteText} ${
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
							timerStatus !== TimerStatus.betweenReps
								? "opacity-100"
								: betweenRepsCountdown === 3
								? "animate-fadeUpOne"
								: betweenRepsCountdown === 2
								? "animate-fadeUpTwo"
								: "animate-fadeUpThree"
						}`}
					>
						{clockTime === 0 && timerStatus === TimerStatus.started && reps.active === 1
							? "Done!"
							: clockTime === 0 && timerStatus === TimerStatus.started
							? "Pause!"
							: timerStatus === TimerStatus.betweenReps && betweenRepsCountdown === 3
							? "Ready"
							: betweenRepsCountdown === 2
							? "Set"
							: betweenRepsCountdown === 1
							? "Go!"
							: isMinute
							? `${String(Math.floor(clockTime / 60)).padStart(2, "0")}:${String(
									clockTime % 60
							  ).padStart(2, "0")}`
							: String(clockTime)}
					</div>
					<div className="text-sm text-center">
						{timerStatus === TimerStatus.betweenReps
							? "Nice!"
							: isMinute
							? Unit.minutes
							: Unit.seconds}
					</div>
				</div>
				<div className="flex justify-center text-2xl gap-10 items-center">
					<Button
						buttonColor={themeColor.secondary}
						className="p-10"
						onClick={() =>
							setTimerStatus((prevState) =>
								prevState === TimerStatus.stopped || prevState === TimerStatus.paused
									? TimerStatus.started
									: TimerStatus.paused
							)
						}
					>
						{timerStatus === TimerStatus.paused ? (
							<Resume size="30" />
						) : timerStatus === TimerStatus.stopped ? (
							<Play size="30" />
						) : (
							<Pause size="30" />
						)}
					</Button>
					<div
						className={`${
							timerStatus !== TimerStatus.stopped ? "pointer-events-none opacity-65" : ""
						}`}
					>
						<NumberInput
							color={themeColor.secondary}
							title="Set Reps"
							number={reps.total}
							setNumber={setTotalReps}
							limits={{ min: 1, max: 5 }}
						/>
					</div>
					<Button
						buttonColor={themeColor.secondary}
						onClick={() => setTimerStatus(TimerStatus.stopped)}
					>
						<Stop size="30" />
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
