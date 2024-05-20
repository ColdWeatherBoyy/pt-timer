import React, { Dispatch, SetStateAction } from "react";
import { addNewTimer } from "../../utilities/helperFunctions";
import { Timers } from "../../utilities/interfaces";
import { ThemeColor, ThemeShade, Unit } from "../../utilities/themeTypes";
import Button from "../Button";
import Card from "../Card";
import Input from "../Input";
import Toggle from "../Toggle";

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
	const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		addNewTimer(newTimer, timers, setTimers, setNewTimer, unit);
	};
	return (
		<Card
			cardColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
			cardShade={ThemeShade.medium}
			className={`p-4 gap-4 w-1/2 ${activeTimer ? "opacity-65 pointer-events-none" : ""}`}
			column
		>
			<div className="flex justify-evenly gap-20">
				<Input
					type="string"
					placeholder={`Enter ${unit}`}
					value={newTimer}
					inputColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
					centered
					onChange={(event) => setNewTimer(event.target.value)}
					onKeyDown={handleEnterDown}
				/>
				<Toggle
					toggled={toggled}
					setToggled={setToggled}
					toggleColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
					optionOne={Unit.minutes}
					optionTwo={Unit.seconds}
				/>
			</div>
			<Button
				buttonColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
				onClick={handleSubmit}
				animate
			>
				Add Timer
			</Button>
		</Card>
	);
};

export default AddTimers;
