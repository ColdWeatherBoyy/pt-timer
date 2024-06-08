import { UserContext } from "@/app/providers/UserProvider";
import { addNewTimer, getThemeColor } from "@/app/utilities/helperFunctions";
import { ThemeShade, Unit } from "@/app/utilities/types/theme.types";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import React, { Dispatch, FC, SetStateAction, useContext } from "react";
import Button from "../../components/general/Button";
import Card from "../../components/general/Card";
import Input from "../../components/general/Input";
import Toggle from "../../components/general/Toggle";
import { TimerContext } from "@/app/providers/TimersProvider";

interface AddTimerProps {
	newTimer: string;
	setNewTimer: Dispatch<SetStateAction<string>>;
	toggled: boolean;
	setToggled: Dispatch<SetStateAction<boolean>>;
	isMinute: boolean;
}

const AddTimers: FC<AddTimerProps> = ({
	newTimer,
	setNewTimer,
	toggled,
	setToggled,
	isMinute,
}) => {
	const { userId } = useContext(UserContext);
	const { timers, setTimers } = useContext(TimerContext);
	const themeColor = getThemeColor(isMinute);

	const handleEnterDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	const handleSubmit = () => {
		addNewTimer(
			newTimer,
			timers,
			setTimers,
			setNewTimer,
			isMinute ? Unit.minutes : Unit.seconds,
			userId
		);
	};

	return (
		<Card
			cardColor={themeColor.primary}
			cardShade={ThemeShade.medium}
			className={`p-4 gap-4 w-1/2`}
			column
		>
			<div className="flex justify-evenly gap-20">
				<Input
					inputType="string"
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
