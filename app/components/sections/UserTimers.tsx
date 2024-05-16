import React, { Dispatch, SetStateAction } from "react";
import Card from "../Card";
import DeletableListItem from "../DeletableListItem";
import { removeTimer } from "../../utilities/helperFunctions";
import { Timers } from "../../utilities/interfaces";
import { ThemeColor, ThemeShade, Unit } from "../../utilities/themeTypes";

interface UserTimers {
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
	activeTimer: number | null;
}

const UserTimers: React.FC<UserTimers> = ({ timers, setTimers, activeTimer }) => {
	return (
		<Card
			cardColor={ThemeColor.jade}
			cardShade={ThemeShade.medium}
			column
			className={`h-fit ${activeTimer ? "opacity-65 pointer-events-none" : ""}`}
		>
			<div className={`text-2xl font-bold text-center mx-10 mb-2 px-3`}>User Timers</div>
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
									removeTimer(index, timers, setTimers, Unit.seconds)
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
									removeTimer(index, timers, setTimers, Unit.minutes)
								}
							/>
						);
					})}
				</div>
			)}
		</Card>
	);
};

export default UserTimers;
