import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../components/Card";
import { Timers } from "../utilities/interfaces";
import { CardSize, ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";
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
			size={CardSize.large}
			className="min-h-64"
		>
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
			<UserTimers timers={timers} setTimers={setTimers} activeTimer={activeTimer} />
		</Card>
	);
};

export default TopCard;
