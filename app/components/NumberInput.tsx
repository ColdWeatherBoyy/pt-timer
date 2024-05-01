import React, { Component, Dispatch, SetStateAction, useEffect, useState } from "react";
import { ComponentColor, ThemeColor } from "../utilities/themeTypes";

interface InputProps {
	title: string;
	color: ThemeColor;
	// number: number;
	// onChange: Dispatch<SetStateAction<number>>;
}

const NumberInput: React.FC<InputProps> = ({ title, color }) => {
	const [count, setCount] = useState<number>(1);

	const handleDecrement = () => {
		if (count === 1) {
			alert("Cannot go below 1");
			return;
		}
		setCount((prev) => prev - 1);
	};

	const handleIncrement = () => {
		if (count === 5) {
			alert("Cannot go above 5");
			return;
		}
		setCount((prev) => prev + 1);
	};

	return (
		<div className="flex flex-col rounded-lg h-full shadow-md">
			<div
				className={`px-7 border border-jade-800 border-b-0 rounded-lg rounded-b-none text-sm text-center ${ComponentColor[color].card.dark}`}
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
					{count}
				</div>
				<div
					className={`${
						ComponentColor[color].card.dark
					} text-base rounded-full shadow-md cursor-pointer h-5 w-5 flex items-center justify-center ${ComponentColor[
						color
					].card.light
						.split(" ")
						.map((color) => `hover:${color}`)
						.join(" ")}`}
					onClick={handleIncrement}
				>
					<span className="-translate-y-px translate-x-px">{">"}</span>
				</div>
			</div>
		</div>
	);
};

export default NumberInput;
