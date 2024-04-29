import React from "react";
import Button from "../components/Button";
import { ButtonColor } from "../components/ComponentTypings";
import Input from "../components/Input";
import { addNewTimer } from "../utilities/helperFunctions";
import Toggle from "../components/Toggle";

interface AddTimerProps {
	newTimer: string;
	setNewTimer: (newTimer: string) => void;
	timers: number[];
	setTimers: (timers: number[]) => void;
}

const AddTimers: React.FC<AddTimerProps> = ({
	newTimer,
	setNewTimer,
	timers,
	setTimers,
}) => {
	const [toggled, setToggled] = React.useState(false);

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
					optionOne="mins"
					optionTwo="secs"
				/>
				<Button
					buttonColor={ButtonColor.jade}
					onClick={() => addNewTimer(newTimer, timers, setTimers, setNewTimer)}
					animate
				>
					Add Timer
				</Button>
			</div>
		</div>
	);
};

export default AddTimers;
