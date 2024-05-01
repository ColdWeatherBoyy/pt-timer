import React, { Component, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ComponentColor, ThemeColor } from "../utilities/themeTypes";

interface InputProps {
	title: string;
	color: ThemeColor;
	number: number;
	setNumber: Dispatch<SetStateAction<number>>;
	limits: { min: number; max: number };
}

const NumberInput: React.FC<InputProps> = ({
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
		setNumber((prev) => prev - 1);
	};

	const handleIncrement = () => {
		if (number === limits.max) {
			alert(`Cannot go above ${limits.max}`);
			return;
		}
		setNumber((prev) => prev + 1);
	};

	return (
		<div className="flex flex-col rounded-lg h-full shadow-md">
			<div
				className={`px-4 border border-jade-800 border-b-0 rounded-lg rounded-b-none text-sm text-center ${ComponentColor[color].card.dark}`}
			>
				{title}
			</div>
			<div className="w-full h-full flex items-center justify-between border border-jade-800 rounded-b-lg px-1">
				<div
					className={`${ComponentColor[color].card.dark} text-base rounded-full shadow-md cursor-pointer h-5 w-5 flex items-center justify-center`}
					onClick={handleDecrement}
				>
					<span className="-translate-y-px -translate-x-px">{"<"}</span>
				</div>
				<div className="text-2xl px-3 leading-none flex items-center justify-center">
					{number}
				</div>
				<div
					className={`${ComponentColor[color].card.dark} text-base rounded-full shadow-md cursor-pointer h-5 w-5 flex items-center justify-center`}
					onClick={handleIncrement}
				>
					<span className="-translate-y-px translate-x-px">{">"}</span>
				</div>
			</div>
		</div>
	);
};

export default NumberInput;
