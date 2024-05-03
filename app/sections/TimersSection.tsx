import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Timers } from "../utilities/interfaces";
import { Unit } from "../utilities/themeTypes";
import Timer from "./Timer";
import { removeTimer } from "../utilities/helperFunctions";

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
						key={`t${Unit.seconds}-${timer}-${index}`}
						index={index}
						timerLength={timer}
						unit={Unit.seconds}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) => removeTimer(index, timers, setTimers, Unit.seconds)}
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
						key={`t${Unit.minutes}-${timer}-${index}`}
						index={index}
						timerLength={timer}
						unit={Unit.minutes}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) => removeTimer(index, timers, setTimers, Unit.minutes)}
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
