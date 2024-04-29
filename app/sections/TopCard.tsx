import React from "react";
import Card from "../components/Card";
import { CardColor, CardSize } from "../components/ComponentTypings";
import ActiveTimers from "./ActiveTimers";
import AddTimers from "./AddTimers";

interface MainSectionProps {
	timers: number[];
	newTimer: string;
	setTimers: (timers: number[]) => void;
	setNewTimer: (newTimer: string) => void;
}

const TopCard: React.FC<MainSectionProps> = ({
	timers,
	newTimer,
	setTimers,
	setNewTimer,
}) => {
	return (
		<Card color={CardColor.mediumJade} size={CardSize.large} className="min-h-64">
			<AddTimers
				newTimer={newTimer}
				setNewTimer={setNewTimer}
				timers={timers}
				setTimers={setTimers}
			/>
			<ActiveTimers timers={timers} setTimers={setTimers} />
		</Card>
	);
};

export default TopCard;
