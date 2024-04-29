import React from "react";
import Timer from "../components/Timer";

interface TimersSectionProps {
	timers: number[];
}
const TimersSection: React.FC<TimersSectionProps> = ({ timers }) => (
	<div className="grid grid-cols-3 grid-rows-2 gap-10">
		{timers.map((timer, index) => {
			return <Timer key={`t-${timer}-${index}`} timerLength={timer} />;
		})}
	</div>
);

export default TimersSection;
