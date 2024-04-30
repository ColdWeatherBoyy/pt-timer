import React from "react";
import { Timers } from "../utilities/interfaces";
import Timer from "../components/Timer";
import { Units } from "../utilities/componentTypings";

interface TimersSectionProps {
	timers: Timers;
}
const TimersSection: React.FC<TimersSectionProps> = ({ timers }) => (
	<div className="grid grid-cols-3 grid-rows-2 gap-10">
		{[...timers.secondTimers, ...timers.minuteTimers].map((timer, index) => {
			const unit = index < timers.secondTimers.length ? Units.seconds : Units.minutes;
			console.log(unit, `t${unit}-${timer}-${index}`);
			return <Timer key={`t${unit}-${timer}-${index}`} timerLength={timer} unit={unit} />;
		})}
	</div>
);

export default TimersSection;
