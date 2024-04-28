import React, { useState, useEffect, useRef, use } from "react";
import { CardColor, CardSize } from "./ComponentTypings";
import Card from "./Card";

interface TimerProps {
	timerLength: number;
}

const Timer: React.FC<TimerProps> = ({ timerLength }) => {
	const [minutes, setMinutes] = useState(timerLength);
	const [seconds, setSeconds] = useState(0);
	const [started, setStarted] = useState<boolean>(false);
	const [paused, setPaused] = useState<boolean>(false);
	// const countRef = useRef<number | null>(null);

	const handleStart = () => {
		setStarted(true);
		setMinutes(timerLength - 1);
		setSeconds(59);
	};

	const handleStop = () => {
		setStarted(false);
		setPaused(false);
		setSeconds(0);
		setMinutes(timerLength);
	};

	useEffect(() => {
		if (started && !paused) {
			const interval = setInterval(() => {
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
			}, 1000);
			return () => clearInterval(interval);
		}
	}, [started, paused]);

	const handlePause = () => {
		setPaused((prev) => !prev);
	};

	return (
		<Card color={CardColor.lightHorizon} size={CardSize.medium}>
			<div>
				{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
			</div>
			{!started ? (
				<button onClick={handleStart}>Start</button>
			) : (
				<button onClick={handlePause}>{paused ? "Resume" : "Pause"}</button>
			)}
			<button onClick={handleStop}>Stop</button>
		</Card>
	);
};

export default Timer;
