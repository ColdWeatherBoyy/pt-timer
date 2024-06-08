import { getThemeColor } from "@/app/utilities/helperFunctions";
import { ThemeShade } from "@/app/utilities/types/theme.types";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import { Dispatch, FC, SetStateAction, useContext, useState } from "react";
import Card from "../../components/general/Card";
import AddTimers from "./AddTimers";
import { ActiveTimerContext } from "@/app/providers/ActiveTimerProvider";
import { TimerContext } from "@/app/providers/TimersProvider";

const TopCard: FC = () => {
	const { activeTimer } = useContext(ActiveTimerContext);
	const { timers, setTimers } = useContext(TimerContext);
	const [newTimer, setNewTimer] = useState<string>("");
	const [isMinute, setIsMinute] = useState(false);
	const themeColor = getThemeColor(isMinute);

	return (
		<Card
			cardColor={themeColor.secondary}
			cardShade={ThemeShade.medium}
			className={`min-h-64 mb-6 w-3/5 p-6 m-4 ${
				activeTimer.index !== null ? "opacity-65 pointer-events-none" : ""
			}`}
			column
		>
			<div className="text-4xl font-bold">Interval Timers</div>
			<AddTimers
				newTimer={newTimer}
				setNewTimer={setNewTimer}
				toggled={isMinute}
				setToggled={setIsMinute}
				isMinute={isMinute}
			/>
		</Card>
	);
};

export default TopCard;
