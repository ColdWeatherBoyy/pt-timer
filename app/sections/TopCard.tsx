import React, { useState } from "react";
import Card from "../components/Card";
import { CardColor, CardSize, Units } from "../utilities/componentTypings";
import { Timers } from "../utilities/interfaces";
import ActiveTimers from "./ActiveTimers";
import AddTimers from "./AddTimers";

interface TopCardProps {
	timers: Timers;
	newTimer: string;
	setTimers: (timers: Timers) => void;
	setNewTimer: (newTimer: string) => void;
}

const TopCard: React.FC<TopCardProps> = ({
	timers,
	newTimer,
	setTimers,
	setNewTimer,
}) => {
	const [toggled, setToggled] = useState(false);
	// toggled = false means seconds, toggled = true means minutes
	const unit = toggled ? Units.minutes : Units.seconds;

	return (
		<Card color={CardColor.mediumJade} size={CardSize.large} className="min-h-64">
			<AddTimers
				newTimer={newTimer}
				setNewTimer={setNewTimer}
				timers={timers}
				setTimers={(timers) => setTimers(timers)}
				toggled={toggled}
				setToggled={setToggled}
				unit={unit}
			/>
			<ActiveTimers
				timers={timers}
				setTimers={(timers) => setTimers(timers)}
				unit={unit}
			/>
		</Card>
	);
};

export default TopCard;
