import { removeTimer } from "@/app/utilities/helperFunctions";
import { Unit } from "@/app/utilities/types/theme.types";
import React, { Dispatch, FC, SetStateAction } from "react";
import Timer from "./Timer";
import { TimerConfig } from "@/app/utilities/types/timers.types";

interface TimersSectionProps {
	timers: TimerConfig[];
	activeTimer: number | null;
	setActiveTimer: Dispatch<SetStateAction<number | null>>;
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>;
}
const TimersSection: FC<TimersSectionProps> = ({
	timers,
	activeTimer,
	setActiveTimer,
	setTimers,
}) => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-x-10 gap-y-4 ">
			{timers.map((timer, index) => {
				return (
					<Timer
						key={`${timer.id}`}
						index={index}
						length={timer.length}
						interval={timer.interval}
						isMinute={timer.type === Unit.minutes}
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
		</div>
	);
};

export default TimersSection;
