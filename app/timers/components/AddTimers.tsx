import { UserContext } from "@/app/providers/UserProvider";
import { addNewTimer, getThemeColor } from "@/app/utilities/helperFunctions";
import { ThemeShade, Unit } from "@/app/utilities/types/theme.types";
import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import Button from "../../components/general/Button";
import Card from "../../components/general/Card";
import Input from "../../components/general/Input";
import Toggle from "../../components/general/Toggle";
import { TimerConfig } from "@/app/utilities/types/timers.types";

interface AddTimerProps {
	newTimer: string;
	setNewTimer: Dispatch<SetStateAction<string>>;
	timers: TimerConfig[];
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>;
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
	isMinute: boolean;
	activeTimer: number | null;
}

const AddTimers: FC<AddTimerProps> = ({
	newTimer,
	setNewTimer,
	timers,
	setTimers,
	toggled,
	setToggled,
	isMinute,
	activeTimer,
}) => {
	const { userId } = useContext(UserContext);
	const themeColor = getThemeColor(isMinute);

	const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		addNewTimer(newTimer, timers, setTimers, setNewTimer, isMinute, userId);
	};

	return (
		<Card
			cardColor={themeColor.primary}
			cardShade={ThemeShade.medium}
			className={`p-4 gap-4 w-1/2 ${activeTimer ? "opacity-65 pointer-events-none" : ""}`}
			column
		>
			<div className="flex justify-evenly gap-20">
				<Input
					type="string"
					placeholder={`Enter ${isMinute ? Unit.minutes : Unit.seconds}`}
					value={newTimer}
					inputColor={themeColor.primary}
					centered
					onChange={(event) => setNewTimer(event.target.value)}
					onKeyDown={handleEnterDown}
				/>
				<Toggle
					toggled={toggled}
					setToggled={setToggled}
					toggleColor={themeColor.primary}
					optionOne={Unit.minutes}
					optionTwo={Unit.seconds}
				/>
			</div>
			<Button buttonColor={themeColor.primary} onClick={handleSubmit} animate>
				Add Timer
			</Button>
		</Card>
	);
};

export default AddTimers;
