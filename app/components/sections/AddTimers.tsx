import React, { Dispatch, SetStateAction, useContext } from "react";
import { addNewTimer, getThemeColor } from "../../utilities/helperFunctions";
import { Timers } from "../../utilities/interfaces";
import { ThemeColor, ThemeShade } from "../../utilities/themeTypes";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Toggle from "../Toggle";
import { Unit } from "../../utilities/enums";
import { UserContext } from "@/app/providers/UserProvider";

interface AddTimerProps {
	newTimer: string;
	setNewTimer: Dispatch<SetStateAction<string>>;
	timers: Timers;
	setTimers: Dispatch<SetStateAction<Timers>>;
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
	unit: Unit;
	activeTimer: number | null;
}

const AddTimers: React.FC<AddTimerProps> = ({
	newTimer,
	setNewTimer,
	timers,
	setTimers,
	toggled,
	setToggled,
	unit,
	activeTimer,
}) => {
	const { userId } = useContext(UserContext);
	const isMinute = unit === Unit.minutes;
	const themeColor = getThemeColor(isMinute);

	const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		addNewTimer(newTimer, timers, setTimers, setNewTimer, unit, userId);
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
					placeholder={`Enter ${unit}`}
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
