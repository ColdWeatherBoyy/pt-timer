import React, { Dispatch, SetStateAction } from "react";
import Button from "../components/Button";
import Card from "../components/Card";
import Input from "../components/Input";
import Toggle from "../components/Toggle";
import { addNewTimer } from "../utilities/helperFunctions";
import { Timers } from "../utilities/interfaces";
import { CardSize, ThemeColor, ThemeShade, Unit } from "../utilities/themeTypes";

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
	return (
		<div className="flex flex-col items-center">
			<div className="text-4xl font-bold mb-6">PT Timers</div>
			<Card
				cardColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
				cardShade={ThemeShade.medium}
				size={CardSize.medium}
				className={`${activeTimer ? "opacity-65 pointer-events-none" : ""}`}
			>
				<div className="flex flex-col items-center gap-4">
					<Input
						placeholder={`Enter length in ${
							unit === Unit.minutes ? "minutes" : "seconds"
						}...`}
						value={newTimer}
						onChange={(event) => setNewTimer(event.target.value)}
					/>
					<div className="flex w-full justify-between">
						<Toggle
							toggled={toggled}
							setToggled={setToggled}
							toggleColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
							optionOne={Unit.minutes}
							optionTwo={Unit.seconds}
						/>
						<Button
							buttonColor={unit === Unit.minutes ? ThemeColor.horizon : ThemeColor.jade}
							onClick={() => addNewTimer(newTimer, timers, setTimers, setNewTimer, unit)}
							animate
						>
							Add Timer
						</Button>
					</div>
				</div>
			</Card>
		</div>
	);
};

export default AddTimers;
