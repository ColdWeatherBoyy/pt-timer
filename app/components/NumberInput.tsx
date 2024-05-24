import React from "react";
import { ComponentColor, ThemeColor } from "../utilities/themeTypes";

interface NumberInputProps {
	title: string;
	color: ThemeColor;
	number: number;
	setNumber: (number: number) => void;
	limits: { min: number; max: number };
}

const NumberInput: React.FC<NumberInputProps> = ({
	title,
	color,
	number,
	setNumber,
	limits,
}) => {
	const handleDecrement = () => {
		if (number === limits.min) {
			alert(`Cannot go below ${limits.min}`);
			return;
		}
		setNumber(number - 1);
	};

	const handleIncrement = () => {
		if (number === limits.max) {
			alert(`Cannot go above ${limits.max}`);
			return;
		}
		setNumber(number + 1);
	};

	return (
		<div className="flex flex-col rounded-lg h-full shadow-md">
			<div
				className={`px-4 border border-b-0 rounded-lg rounded-b-none text-sm text-center text-nowrap ${ComponentColor[color].numberInput.title}`}
			>
				{title}
			</div>
			<div
				className={`w-full p-0.5 flex items-center justify-between border ${ComponentColor[color].numberInput.buttonWrapper} rounded-b-lg px-1 shadow-inner`}
			>
				<div
					className={`${ComponentColor[color].numberInput.button} border text-base rounded-full shadow-md cursor-pointer h-5 w-5 flex items-center justify-center hover:shadow-lg hover:text-lg active:text-sm active:shadow-sm`}
					onClick={handleDecrement}
				>
					<span className="-translate-y-px -translate-x-px">{"<"}</span>
				</div>
				<div className="text-2xl px-3 leading-none flex items-center justify-center">
					{number}
				</div>
				<div
					className={`${ComponentColor[color].numberInput.button} border text-base rounded-full shadow-md cursor-pointer h-5 w-5 flex items-center justify-center hover:shadow-lg hover:text-lg active:text-sm active:shadow-sm`}
					onClick={handleIncrement}
				>
					<span className="-translate-y-px translate-x-px">{">"}</span>
				</div>
			</div>
		</div>
	);
};

export default NumberInput;
