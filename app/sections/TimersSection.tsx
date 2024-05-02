import React, { useEffect, useState } from "react";
import { Timers } from "../utilities/interfaces";
import { Unit } from "../utilities/themeTypes";
import Timer from "./Timer";

interface TimersSectionProps {
	timers: Timers;
}
const TimersSection: React.FC<TimersSectionProps> = ({ timers }) => {
	const [activeTimer, setActiveTimer] = useState<number | null>(null);

	useEffect(() => {
		console.log(activeTimer);
	}, [activeTimer]);
	return (
		<div className="grid grid-cols-3 grid-rows-2 gap-10">
			{[...timers.secondTimers, ...timers.minuteTimers].map((timer, index) => {
				const unit = index < timers.secondTimers.length ? Unit.seconds : Unit.minutes;
				return (
					<Timer
						key={`t${unit}-${timer}-${index}`}
						index={index}
						timerLength={timer}
						unit={unit}
						setActiveTimer={setActiveTimer}
						className={`${
							activeTimer !== index && activeTimer !== null
								? "opacity-65 pointer-events-none"
								: ""
						}`}
					/>
				);
			})}
		</div>
	);
};

export default TimersSection;
