import React from "react";
import Card from "../components/Card";
import { CardColor, CardSize } from "../components/ComponentTypings";
import DeletableListItem from "../components/DeletableListItem";
import { removeTimer } from "../utilities/helperFunctions";

interface ActiveTimers {
	timers: number[];
	setTimers: (timers: number[]) => void;
}

const ActiveTimers: React.FC<ActiveTimers> = ({ timers, setTimers }) => {
	return (
		<Card color={CardColor.lightJade} size={CardSize.medium} column className="h-fit">
			<div className={`text-2xl font-bold text-center mx-10 mb-2`}>Active Timers</div>
			{timers.length === 0 ? (
				<div className="flex justify-center text-jade-950 text-md">Set some timers!</div>
			) : (
				<div
					className={`grid ${
						timers.length > 3 ? "grid-rows-2" : "grid-rows-1"
					} grid-cols-3 gap-2`}
				>
					{timers.map((timer, index) => {
						return (
							<DeletableListItem
								key={`dlt-${timer}-${index}`}
								index={index}
								length={timer.toString()}
								unit="min"
								deleteItem={() => removeTimer(index, timers, setTimers)}
							/>
						);
					})}
				</div>
			)}
		</Card>
	);
};

export default ActiveTimers;
