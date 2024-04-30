import React from "react";
import Card from "../components/Card";
import DeletableListItem from "../components/DeletableListItem";
import { CardSize, ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";
import { removeTimer } from "../utilities/helperFunctions";
import { Timers } from "../utilities/interfaces";

interface ActiveTimers {
	timers: Timers;
	setTimers: (timers: Timers) => void;
	unit: Unit;
}

const ActiveTimers: React.FC<ActiveTimers> = ({ timers, setTimers, unit }) => {
	return (
		<Card
			cardColor={ThemeColor.jade}
			cardShade={ThemeShade.medium}
			size={CardSize.medium}
			column
			className="h-fit"
		>
			<div className={`text-2xl font-bold text-center mx-10 mb-2`}>Active Timers</div>
			{timers.minuteTimers.length === 0 && timers.secondTimers.length === 0 ? (
				<div className="flex justify-center text-jade-950 text-md">Set some timers!</div>
			) : (
				<div
					className={`grid ${
						timers.minuteTimers.length + timers.secondTimers.length > 3
							? "grid-rows-2"
							: "grid-rows-1"
					} grid-cols-3 gap-2`}
				>
					{timers.secondTimers.map((timer, index) => {
						return (
							<DeletableListItem
								key={`dltsec-${timer}-${index}`}
								index={index}
								length={timer.toString()}
								unit={Unit.seconds}
								listItemColor={ThemeColor.jade}
								deleteItem={(index) =>
									removeTimer(index, timers, (timers) => setTimers(timers), Unit.seconds)
								}
							/>
						);
					})}
					{timers.minuteTimers.map((timer, index) => {
						return (
							<DeletableListItem
								key={`dltmin-${timer}-${index}`}
								index={index}
								length={timer.toString()}
								unit={Unit.minutes}
								listItemColor={ThemeColor.horizon}
								deleteItem={(index) =>
									removeTimer(index, timers, (timers) => setTimers(timers), Unit.minutes)
								}
							/>
						);
					})}
				</div>
			)}
		</Card>
	);
};

export default ActiveTimers;
