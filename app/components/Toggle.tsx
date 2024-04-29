import React from "react";

interface ToggleProps {
	toggled: boolean;
	setToggled: (toggled: boolean) => void;
	optionOne: string;
	optionTwo: string;
}

const Toggle: React.FC<ToggleProps> = ({ toggled, setToggled, optionOne, optionTwo }) => {
	const handleToggle = () => {
		setToggled(!toggled);
	};

	return (
		<div className="flex items-center justify-center gap-2">
			<div className="relative bg-jade-100 rounded-full w-18 h-8" onClick={handleToggle}>
				<div
					className={`absolute ${
						toggled ? "left" : "right"
					}-0 rounded-full border border-jade-100 w-8 h-8 bg-jade-800`}
				/>
				<div
					className={`absolute ${
						toggled ? "right" : "left"
					}-2 top-2 text-xs text-jade-500`}
				>
					{toggled ? optionOne : optionTwo}
				</div>
			</div>
		</div>
	);
};

export default Toggle;
