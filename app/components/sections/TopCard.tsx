import { getThemeColor } from "@/app/utilities/helperFunctions";
import { ThemeShade, Unit } from "@/app/utilities/types/theme.types";
import { Timers } from "@/app/utilities/types/timers.types";
import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../Card";
import AddTimers from "./AddTimers";

interface TopCardProps {
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
	activeTimer: number | null;
}

const TopCard: React.FC<TopCardProps> = ({ timers, setTimers, activeTimer }) => {
	const [newTimer, setNewTimer] = useState<string>("");
	const [toggled, setToggled] = useState(false);
	const isMinute = (toggled ? Unit.minutes : Unit.seconds) === Unit.minutes;
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
				isMinute={isMinute}
				activeTimer={activeTimer}
			/>
		</Card>
	);
};

export default TopCard;
