"use client";
import { useState, useEffect } from "react";
import DeletableListItem from "./components/DeletableListItem";
import MainWrapper from "./components/MainWrapper";
import Card from "./components/Card";
import { CardColor, CardSize } from "./components/ComponentTypings";
import Input from "./components/Input";
import Button from "./components/Button";
import Timer from "./components/Timer";

export default function Home() {
	const [timers, setTimers] = useState<number[]>([]);
	const [newTimer, setNewTimer] = useState<string>("");

	const removeTimer = (index: number) => {
		const newTimers = [...timers];
		newTimers.splice(index, 1);
		setTimers(newTimers);
	};

	const addNewTimer = () => {
		const timer = parseInt(newTimer);
		if (typeof timer !== "number" || isNaN(timer)) {
			alert("That is not a valid number. Please try again.");
		} else if (timer < 0) {
			alert("Positive values only, please.");
		} else if (timer > 120) {
			alert("Only values 2 hours and below, please.");
		} else if (timers.includes(timer)) {
			alert("That timer already exists.");
		} else {
			const newTimers = [...timers, timer];
			newTimers.sort((a: number, b: number) => a - b);
			setTimers(newTimers);
		}
		setNewTimer("");
	};

	return (
		<MainWrapper>
			<Card color={CardColor.medium} size={CardSize.large}>
				<div className="flex flex-col items-center">
					<div className="text-4xl font-bold self-start mb-4">PT Timers</div>
					<Input
						placeholder="Enter a value in minutes"
						value={newTimer}
						onChange={(event) => setNewTimer(event.target.value)}
					/>
					<Button onClick={addNewTimer} animate>
						Add Timer
					</Button>
				</div>
				<Card color={CardColor.light} size={CardSize.medium} column className="min-h-36">
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
			{timers.map((timer, index) => {
				console.log(timer);
				return (
					<Timer key={index} timerLength={timer} />
					// <div
					// 	key={index}
					// 	className="flex justify-center bg-jade-300 rounded-lg shadow-md p-10"
					// >
					// 	<div>
					// 		<span className="font-bold">Length:</span> {timer}
					// 	</div>
					// </div>
				);
			})}
		</MainWrapper>
	);
}
