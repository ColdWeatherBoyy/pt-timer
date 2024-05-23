import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import { Timers } from "../../utilities/interfaces";
import { ThemeColor, ThemeShade } from "../../utilities/themeTypes";
import AddTimers from "./AddTimers";
import { Unit } from "../../utilities/enums";
import { getThemeColor } from "@/app/utilities/helperFunctions";

interface TopCardProps {
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
	activeTimer: number | null;
}

const TopCard: React.FC<TopCardProps> = ({ timers, setTimers, activeTimer }) => {
	const [newTimer, setNewTimer] = useState<string>("");
	const [toggled, setToggled] = useState(false);
	const unit = toggled ? Unit.minutes : Unit.seconds;
	const isMinute = unit === Unit.minutes;
	const themeColor = getThemeColor(isMinute);

	return (
		<Card
			cardColor={themeColor.secondary}
			cardShade={ThemeShade.medium}
			className="min-h-64 mb-6 w-3/5 p-6 m-4"
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
