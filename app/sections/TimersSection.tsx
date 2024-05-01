import React from "react";
import { Timers } from "../utilities/interfaces";
import Timer from "./Timer";
import { Unit } from "../utilities/themeTypes";

interface TimersSectionProps {
	timers: Timers;
}
const TimersSection: React.FC<TimersSectionProps> = ({ timers }) => (
	<div className="grid grid-cols-3 grid-rows-2 gap-10">
		{[...timers.secondTimers, ...timers.minuteTimers].map((timer, index) => {
			const unit = index < timers.secondTimers.length ? Unit.seconds : Unit.minutes;
			return <Timer key={`t${unit}-${timer}-${index}`} timerLength={timer} unit={unit} />;
		})}
	</div>
);

export default TimersSection;
