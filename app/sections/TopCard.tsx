import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../components/Card";
import { Timers } from "../utilities/interfaces";
import { ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";
import AddTimers from "./AddTimers";

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
			cardColor={unit === Unit.minutes ? ThemeColor.jade : ThemeColor.horizon}
			cardShade={ThemeShade.medium}
			className="min-h-64 mb-6 w-3/5 p-6"
			column
		>
			<div className="text-4xl font-bold ">Interval Timers</div>
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
		</Card>
	);
};

export default TopCard;
