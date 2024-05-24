import { removeTimer } from "@/app/utilities/helperFunctions";
import { Unit } from "@/app/utilities/types/theme.types";
import { TimersCollection } from "@/app/utilities/types/timers.types";
import React, { Dispatch, FC, SetStateAction } from "react";
import Timer from "./Timer";

interface TimersSectionProps {
	timers: TimersCollection;
	activeTimer: number | null;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	setTimers: Dispatch<SetStateAction<TimersCollection>>;
}
const TimersSection: FC<TimersSectionProps> = ({
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
