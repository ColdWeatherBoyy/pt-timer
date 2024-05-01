import React, { Dispatch, SetStateAction, useState } from "react";
import Card from "../components/Card";
import { ThemeShade, CardSize, ThemeColor, Unit } from "../utilities/themeTypes";
import { Timers } from "../utilities/interfaces";
import ActiveTimers from "./ActiveTimers";
import AddTimers from "./AddTimers";

interface TopCardProps {
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
}

const TopCard: React.FC<TopCardProps> = ({ timers, setTimers }) => {
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
			/>
			<ActiveTimers timers={timers} setTimers={setTimers} unit={unit} />
		</Card>
	);
};

export default TopCard;
