import React, { useEffect, useState } from "react";
import { roboto_mono } from "../utilities/fonts";
import Button from "../components/Button";
import Card from "../components/Card";
import { ThemeShade, CardSize, ThemeColor, Unit } from "../utilities/themeTypes";
import Pause from "../components/SVGs/Pause";
import Play from "../components/SVGs/Play";
import Resume from "../components/SVGs/Resume";
import Stop from "../components/SVGs/Stop";
import NumberInput from "./NumberInput";

interface TimerProps {
	timerLength: number;
	unit: Unit;
}

const Timer: React.FC<TimerProps> = ({ timerLength, unit }) => {
	const [minutes, setMinutes] = useState(unit === Unit.minutes ? timerLength : 0);
	const [seconds, setSeconds] = useState(unit === Unit.seconds ? timerLength : 0);
	const [started, setStarted] = useState<boolean>(false);
	const [paused, setPaused] = useState<boolean>(false);
	const [reps, setReps] = useState<number>(1);

	const handleStart = () => {
		setStarted(true);
		if (unit === Unit.minutes) {
			setMinutes(timerLength - 1);
			setSeconds(59);
		} else {
			setSeconds(timerLength - 1);
		}
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
		if (started && !paused) {
			const interval = setInterval(() => {
				if (unit === Unit.minutes) {
					if (seconds === 0) {
						if (minutes === 0) {
							clearInterval(interval);
							handleStop();
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
						handleStop();
					} else setSeconds((prev) => prev - 1);
				}
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [started, paused, seconds, minutes, unit]);

	const handlePause = () => {
		setPaused((prev) => !prev);
	};

	return (
		<Card
			cardColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
			cardShade={ThemeShade.light}
			size={CardSize.large}
			column
		>
			<div className={`${roboto_mono.className} text-3xl text-center`}>
				Timer<span className="text-base"> (in {unit})</span>
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
					<NumberInput
						color={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
						title="Reps"
						// onChange={(event) => setReps(Number(event.target.value))}
					/>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
