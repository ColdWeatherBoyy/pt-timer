import React, { useEffect, useState } from "react";
import { roboto_mono } from "../utilities/fonts";
import Button from "../components/Button";
import Card from "../components/Card";
import { ButtonColor, CardColor, CardSize, Units } from "../utilities/componentTypings";
import Pause from "../components/SVGs/Pause";
import Play from "../components/SVGs/Play";
import Resume from "../components/SVGs/Resume";
import Stop from "../components/SVGs/Stop";

interface TimerProps {
	timerLength: number;
	unit: Units;
}

const Timer: React.FC<TimerProps> = ({ timerLength, unit }) => {
	const [minutes, setMinutes] = useState(unit === Units.minutes ? timerLength : 0);
	const [seconds, setSeconds] = useState(unit === Units.seconds ? timerLength : 0);
	const [started, setStarted] = useState<boolean>(false);
	const [paused, setPaused] = useState<boolean>(false);

	const handleStart = () => {
		setStarted(true);
		if (unit === Units.minutes) {
			setMinutes(timerLength - 1);
			setSeconds(59);
		} else {
			setSeconds(timerLength - 1);
		}
	};

	const handleStop = () => {
		setStarted(false);
		setPaused(false);
		if (unit === Units.minutes) {
			setSeconds(0);
			setMinutes(timerLength);
		} else {
			setSeconds(timerLength);
		}
	};

	useEffect(() => {
		if (started && !paused) {
			const interval = setInterval(() => {
				if (unit === Units.minutes) {
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

	useEffect(() => {
		console.log(unit, minutes, seconds);
	}, []);

	return (
		<Card color={CardColor.lightHorizon} size={CardSize.medium}>
			<div className="flex flex-col gap-4 m-4 items-center">
				<div className={`${roboto_mono.className} text-6xl`}>
					{unit === Units.minutes
						? `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
						: String(seconds)}
				</div>
				<div className="flex justify-center text-2xl gap-10">
					<Button
						buttonColor={ButtonColor.horizon}
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
					<Button buttonColor={ButtonColor.horizon} onClick={handleStop}>
						<Stop size="40" />
					</Button>
				</div>
			</div>
		</Card>
	);
};

export default Timer;
