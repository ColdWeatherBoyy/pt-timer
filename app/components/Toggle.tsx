import React from "react";
import { ComponentColor } from "../utilities/style/componentColor.styles";
import { ThemeColor } from "../utilities/types/theme.types";

interface ToggleProps {
	toggled: boolean;
	setToggled: (toggled: boolean) => void;
	toggleColor: ThemeColor;
	optionOne: string;
	optionTwo: string;
}

const Toggle: React.FC<ToggleProps> = ({
	toggled,
	setToggled,
	toggleColor,
	optionOne,
	optionTwo,
}) => {
	const handleToggle = () => {
		setToggled(!toggled);
	};

	return (
		<div className="flex items-center justify-center gap-2">
			<div
				className={`relative ${ComponentColor[toggleColor].toggle.track} box-content rounded-full w-18 h-8 shadow-inner-outer-md cursor-pointer`}
				onClick={handleToggle}
			>
				<div
					className={`absolute ${
						toggled ? "translate-x-[125%]" : "translate-x-0"
					} rounded-full ${
						ComponentColor[toggleColor].toggle.thumb
					} w-8 h-8 hover:shadow-left transition-all duration-100 ease-in-out`}
				/>
				<div
					className={`absolute w-7 ${
						toggled ? "translate-x-[20%]" : "translate-x-[142%]"
					} top-2 text-xs ${
						ComponentColor[toggleColor].toggle.text
					} select-none transition-all duration-100 ease-in-out`}
				>
					{toggled ? optionOne : optionTwo}
				</div>
			</div>
		</div>
	);
};

export default Toggle;
