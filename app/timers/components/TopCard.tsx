import { getThemeColor } from "@/app/utilities/helperFunctions";
import { ThemeShade, Unit } from "@/app/utilities/types/theme.types";
import { TimersCollection } from "@/app/utilities/types/timers.types";
import { Dispatch, FC, SetStateAction, useState } from "react";
import Card from "../../components/general/Card";
import AddTimers from "./AddTimers";

interface TopCardProps {
	timers: TimersCollection;
	setTimers: Dispatch<SetStateAction<TimersCollection>>;
	activeTimer: number | null;
}

const TopCard: FC<TopCardProps> = ({ timers, setTimers, activeTimer }) => {
	const [newTimer, setNewTimer] = useState<string>("");
	const [isMinute, setIsMinute] = useState(false);
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
				toggled={isMinute}
				setToggled={setIsMinute}
				isMinute={isMinute}
				activeTimer={activeTimer}
			/>
		</Card>
	);
};

export default TopCard;
