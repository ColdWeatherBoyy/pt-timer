import React from "react";
import Timer from "../components/Timer";
import { Timers } from "../utilities/interfaces";

interface TimersSectionProps {
	timers: Timers;
}
const TimersSection: React.FC<TimersSectionProps> = ({ timers }) => (
	<div className="grid grid-cols-3 grid-rows-2 gap-10">
		{timers.minuteTimers.map((timer, index) => {
			return <Timer key={`t-${timer}-${index}`} timerLength={timer} />;
		})}
	</div>
);

export default TimersSection;
