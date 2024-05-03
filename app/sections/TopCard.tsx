import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../components/Card";
import { Timers } from "../utilities/interfaces";
import { ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";
import AddTimers from "./AddTimers";
import UserTimers from "./UserTimers";

interface TopCardProps {
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
	activeTimer: number | null;
}

const TopCard: React.FC<TopCardProps> = ({ timers, setTimers, activeTimer }) => {
	const [newTimer, setNewTimer] = useState<string>("");
	const [toggled, setToggled] = useState(false);
	// toggled = false means seconds, toggled = true means minutes
	const unit = toggled ? Unit.minutes : Unit.seconds;

	return (
		<Card
			cardColor={ThemeColor.jade}
			cardShade={ThemeShade.medium}
			className="min-h-64 mb-6 w-2/3"
			column
		>
			<div className="text-4xl font-bold mb-6">Interval Timers</div>
			{/* <div className="flex flex-row justify-between gap-4"> */}
			<AddTimers
				newTimer={newTimer}
				setNewTimer={setNewTimer}
				timers={timers}
				setTimers={setTimers}
				toggled={toggled}
				setToggled={setToggled}
				unit={unit}
				activeTimer={activeTimer}
			/>
			{/* <UserTimers timers={timers} setTimers={setTimers} activeTimer={activeTimer} /> */}
			{/* </div> */}
		</Card>
	);
};

export default TopCard;
