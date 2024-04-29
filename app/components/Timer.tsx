import React, { useEffect, useState } from "react";
import { roboto_mono } from "../utilities/fonts";
import Button from "./Button";
import Card from "./Card";
import { ButtonColor, CardColor, CardSize } from "./ComponentTypings";
import Pause from "./SVGs/Pause";
import Play from "./SVGs/Play";
import Resume from "./SVGs/Resume";
import Stop from "./SVGs/Stop";

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
	}, [started, paused, seconds, minutes]);

	const handlePause = () => {
		setPaused((prev) => !prev);
	};

	return (
		<Card color={CardColor.lightHorizon} size={CardSize.medium}>
			<div className="flex flex-col gap-4 m-4">
				<div className={`${roboto_mono.className} text-6xl`}>
					{String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
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
