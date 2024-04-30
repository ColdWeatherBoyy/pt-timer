import React from "react";
import Card from "../components/Card";
import { CardColor, CardSize, Units } from "../utilities/componentTypings";
import { Timers } from "../utilities/interfaces";
import ActiveTimers from "./ActiveTimers";
import AddTimers from "./AddTimers";

interface MainSectionProps {
	timers: Timers;
	newTimer: string;
	setTimers: (timers: Timers) => void;
	setNewTimer: (newTimer: string) => void;
	toggled: boolean;
	setToggled: (toggled: boolean) => void;
	units: Units;
}

const TopCard: React.FC<MainSectionProps> = ({
	timers,
	newTimer,
	setTimers,
	setNewTimer,
	toggled,
	setToggled,
	units,
}) => {
	return (
		<Card color={CardColor.mediumJade} size={CardSize.large} className="min-h-64">
			<AddTimers
				newTimer={newTimer}
				setNewTimer={setNewTimer}
				timers={timers}
				setTimers={(timers) => setTimers(timers)}
				toggled={toggled}
				setToggled={setToggled}
				units={units}
			/>
			<ActiveTimers
				timers={timers}
				setTimers={(timers) => setTimers(timers)}
				units={units}
			/>
		</Card>
	);
};

export default TopCard;
