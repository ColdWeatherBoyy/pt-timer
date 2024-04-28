"use client";
import { useState, useEffect, use } from "react";
import DeletableListItem from "./components/DeletableListItem";
import MainWrapper from "./components/MainWrapper";
import Card from "./components/Card";
import { CardColor, CardSize } from "./components/ComponentTypings";
import Input from "./components/Input";

export default function Home() {
	const [timers, setTimers] = useState<number[]>([]);
	const [newTimer, setNewTimer] = useState<string>("");

	const removeTimer = (index: number) => {
		const newTimers = [...timers];
		newTimers.splice(index, 1);
		setTimers(newTimers);
	};

	const addNewTimer = (value: number) => {
		if (typeof value !== "number" || isNaN(value)) {
			alert("That is not a valid number. Please try again.");
		} else if (value < 0) {
			alert("Positive values only, please.");
		} else if (value > 120) {
			alert("Only values 2 hours and below, please.");
		} else {
			const newTimers = [...timers, value];
			newTimers.sort((a: number, b: number) => a - b);
			setTimers(newTimers);
		}
		setNewTimer("");
	};

	return (
		<MainWrapper>
			<Card color={CardColor.medium} size={CardSize.large}>
				<div className="flex flex-col">
					<div className="text-4xl font-bold">Timers</div>
					<Input
						placeholder="Enter a value in minutes"
						value={newTimer}
						onChange={(event) => setNewTimer(event.target.value)}
					/>
					<button onClick={() => addNewTimer(parseInt(newTimer))}>Add Timer</button>
				</div>
				<Card color={CardColor.light} size={CardSize.medium} column>
					<div className="text-2xl font-bold text-center">Active Timers</div>
					<div className="flex justify-center p-4">
						{timers.map((timer, index) => {
							return (
								<DeletableListItem
									key={index}
									index={index}
									text={timer.toString() + ` min`}
									deleteItem={removeTimer}
								/>
							);
						})}
					</div>
				</Card>
			</Card>
			{timers.map((timer, index) => (
				<div
					key={index}
					className="flex justify-center bg-jade-300 rounded-lg shadow-md p-10"
				>
					<div>
						<span className="font-bold">Length:</span> {timer}
					</div>
				</div>
			))}
		</MainWrapper>
	);
}
