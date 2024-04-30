import React from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import Toggle from "../components/Toggle";
import { ButtonColor, Units } from "../utilities/componentTypings";
import { addNewTimer } from "../utilities/helperFunctions";
import { Timers } from "../utilities/interfaces";

interface AddTimerProps {
	newTimer: string;
	setNewTimer: (newTimer: string) => void;
	timers: Timers;
	setTimers: (timers: Timers) => void;
	toggled: boolean;
	setToggled: (toggled: boolean) => void;
	unit: Units;
}

const AddTimers: React.FC<AddTimerProps> = ({
	newTimer,
	setNewTimer,
	timers,
	setTimers,
	toggled,
	setToggled,
	unit,
}) => {
	return (
		<div className="flex flex-col items-center justify-around">
			<div className="text-4xl font-bold self-start">PT Timers</div>
			<div className="flex flex-col items-center gap-2">
				<Input
					placeholder="Enter a value in minutes"
					value={newTimer}
					onChange={(event) => setNewTimer(event.target.value)}
				/>
				<Toggle
					toggled={toggled}
					setToggled={setToggled}
					optionOne={Units.minutes}
					optionTwo={Units.seconds}
				/>
				<Button
					buttonColor={ButtonColor.jade}
					onClick={() => addNewTimer(newTimer, timers, setTimers, setNewTimer, unit)}
					animate
				>
					Add Timer
				</Button>
			</div>
		</div>
	);
};

export default AddTimers;
