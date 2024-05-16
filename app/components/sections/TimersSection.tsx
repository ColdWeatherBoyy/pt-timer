import React, { Dispatch, SetStateAction } from "react";
import { removeTimer } from "../../utilities/helperFunctions";
import { Timers } from "../../utilities/interfaces";
import { Unit } from "../../utilities/themeTypes";
import Timer from "./Timer";

interface TimersSectionProps {
	timers: Timers;
	activeTimer: number | null;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	setTimers: Dispatch<SetStateAction<Timers>>;
}
const TimersSection: React.FC<TimersSectionProps> = ({
	timers,
	activeTimer,
	setActiveTimer,
	setTimers,
}) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-x-10 gap-y-4 ">
			{timers.secondTimers.map((timer, index) => {
				return (
					<Timer
						key={`t${Unit.seconds}-${timer.length}`}
						index={index}
						length={timer.length}
						interval={timer.interval}
						unit={Unit.seconds}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) => removeTimer(index, timers, setTimers, Unit.seconds)}
						setTimers={setTimers}
						className={`${
							activeTimer !== index && activeTimer !== null
								? "opacity-65 pointer-events-none"
								: ""
						}`}
					/>
				);
			})}
			{timers.minuteTimers.map((timer, index) => {
				return (
					<Timer
						key={`t${Unit.minutes}-${timer.length}`}
						index={index}
						length={timer.length}
						interval={timer.interval}
						unit={Unit.minutes}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) => removeTimer(index, timers, setTimers, Unit.minutes)}
						setTimers={setTimers}
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
