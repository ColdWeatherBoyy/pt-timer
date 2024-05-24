import { Timers } from "@/app/utilities/types/timers.types";
import React, { Dispatch, SetStateAction } from "react";
import { Unit } from "../../utilities/enums";
import { removeTimer } from "../../utilities/helperFunctions";
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
						key={`${timer.id}`}
						index={index}
						length={timer.length}
						interval={timer.interval}
						isMinute={false}
						id={timer.id}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) =>
							removeTimer(index, timers, setTimers, Unit.seconds, timer.id)
						}
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
						key={`${timer.id}`}
						index={index}
						length={timer.length}
						interval={timer.interval}
						isMinute={true}
						id={timer.id}
						setActiveTimer={setActiveTimer}
						deleteTimer={(index) =>
							removeTimer(index, timers, setTimers, Unit.minutes, timer.id)
						}
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
