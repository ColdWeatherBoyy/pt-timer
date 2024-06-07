import { removeTimer, sortTimers } from "@/app/utilities/helperFunctions";
import { Unit } from "@/app/utilities/types/theme.types";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import { Dispatch, FC, SetStateAction, useCallback, useContext, useEffect } from "react";
import Timer from "./Timer";
import { ActiveTimerContext } from "@/app/providers/ActiveTimerProvider";
import { getDBTimers } from "@/app/utilities/amplify/amplify.db";

interface TimersSectionProps {
	timers: TimerConfig[];
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>;
}
const TimersSection: FC<TimersSectionProps> = ({ timers, setTimers }) => {
	const { activeTimer } = useContext(ActiveTimerContext);

	const initializeTimers = useCallback(async () => {
		const dbTimers = await getDBTimers();
		if (!dbTimers) {
			console.error("Trouble accessing dbtimers");
			return;
		}
		setTimers(sortTimers(dbTimers));
	}, []);

	useEffect(() => {
		initializeTimers();
	}, [initializeTimers]);

	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 grid-rows-auto gap-x-10 gap-y-4 ">
			{timers.map((timer, index) => {
				return (
					<Timer
						key={`${timer.id}`}
						index={index}
						duration={timer.duration}
						interval={timer.interval}
						isMinute={timer.unit === Unit.minutes}
						id={timer.id}
						deleteTimer={(index) => removeTimer(index, timers, setTimers, timer.id)}
						setTimers={setTimers}
						className={`${
							activeTimer.index !== index && activeTimer.index !== null
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
