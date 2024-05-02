import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Pause from "../components/SVGs/Pause";
import Play from "../components/SVGs/Play";
import Resume from "../components/SVGs/Resume";
import Stop from "../components/SVGs/Stop";
import { roboto_mono } from "../utilities/fonts";
import { CardSize, ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";
import NumberInput from "../components/NumberInput";

interface TimerProps {
	index: number;
	timerLength: number;
	unit: Unit;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	className?: string;
}

const Timer: React.FC<TimerProps> = ({
	index,
	timerLength,
	unit,
	setActiveTimer,
	className,
}) => {
	const [minutes, setMinutes] = useState(unit === Unit.minutes ? timerLength : 0);
	const [seconds, setSeconds] = useState(unit === Unit.seconds ? timerLength : 0);
	const [started, setStarted] = useState<boolean>(false);
	const [paused, setPaused] = useState<boolean>(false);
	const [totalReps, setTotalReps] = useState<number>(1);
	const [activeReps, setActiveReps] = useState<number>(totalReps);

	const handleStart = () => {
		setStarted(true);
		if (unit === Unit.minutes) {
			setMinutes(timerLength - 1);
			setSeconds(59);
		} else {
			setSeconds(timerLength - 1);
		}
	};

	const handlePause = () => {
		setPaused((prev) => !prev);
	};

	const handleNextRep = () => {
		setPaused(true);
		setActiveReps((prev) => prev - 1);
		if (unit === Unit.minutes) {
			setMinutes(timerLength);
			setSeconds(0);
		} else {
			setSeconds(timerLength);
		}
		setTimeout(() => {
			setPaused(false);
			handleStart();
		}, 2000);
	};

	const handleStop = () => {
		setStarted(false);
		setPaused(false);
		if (unit === Unit.minutes) {
			setSeconds(0);
			setMinutes(timerLength);
		} else {
			setSeconds(timerLength);
		}
	};

	useEffect(() => {
		setActiveReps(totalReps);
	}, [totalReps, started]);

	useEffect(() => {
		if (started && !paused) {
			const interval = setInterval(() => {
				if (unit === Unit.minutes) {
					if (seconds === 0) {
						if (minutes === 0) {
							clearInterval(interval);
							if (activeReps > 1) {
								handleNextRep();
							} else {
								handleStop();
							}
						} else {
							setMinutes((prev) => prev - 1);
							setSeconds(59);
						}
					} else {
						setSeconds((prev) => prev - 1);
					}
				} else {
					if (seconds === 0) {
						clearInterval(interval);
						if (activeReps > 1) {
							handleNextRep();
						} else {
							handleStop();
						}
					} else setSeconds((prev) => prev - 1);
				}
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [started, paused, seconds, minutes, unit]);

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
			size={CardSize.large}
			column
			className={`${className} gap-2`}
		>
			<div className={`${roboto_mono.className} flex text-3xl justify-between`}>
				<span className="font-bold">Timer</span>
				<div className="flex flex-row">
					<div className="tracking-tighter text-2xl">Reps:</div>
					<Card
						cardColor={ThemeColor.jade}
						cardShade={ThemeShade.dark}
						size={CardSize.small}
						className="w-fit py-2 px-3 text-2xl ml-1 leading-none -translate-y-0.5"
					>
						{activeReps}
					</Card>
				</div>
			</div>

			<div className="flex flex-col gap-4 items-center">
				<div
					className={`${roboto_mono.className} text-6xl ${
						paused ? "animate-slowFlicker" : "opacity-100"
					}`}
				>
					{unit === Unit.minutes
						? `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
						: String(seconds)}
					<div className="text-sm text-center">{unit}</div>
				</div>
				<div className="flex justify-center text-2xl gap-10 items-center">
					<Button
						buttonColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						onClick={started ? handlePause : handleStart}
						className="p-10"
					>
						{started ? (
							paused ? (
								<Resume size="40" />
							) : (
								<Pause size="40" />
							)
						) : (
							<Play size="40" />
						)}
					</Button>
					<Button
						buttonColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						onClick={handleStop}
					>
						<Stop size="40" />
					</Button>
					<div className={`${started ? "pointer-events-none opacity-65" : ""}`}>
						<NumberInput
							color={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
							title="Set Reps"
							number={totalReps}
							setNumber={setTotalReps}
							limits={{ min: 1, max: 5 }}
						/>
					</div>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
