"use client";
import { useState, useEffect } from "react";
import DeletableListItem from "./components/DeletableListItem";
import MainWrapper from "./components/MainWrapper";
import Card from "./components/Card";
import { ButtonColor, CardColor, CardSize } from "./components/ComponentTypings";
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
		} else if (timers.length === 6) {
			alert("You can only save 6 timers at once.");
		} else {
			const newTimers = [...timers, timer];
			newTimers.sort((a: number, b: number) => a - b);
			setTimers(newTimers);
		}
		setNewTimer("");
	};

	return (
		<MainWrapper>
			<Card color={CardColor.mediumJade} size={CardSize.large} className="min-h-64">
				<div className="flex flex-col items-center">
					<div className="text-4xl font-bold self-start mb-4">PT Timers</div>
					<Input
						placeholder="Enter a value in minutes"
						value={newTimer}
						onChange={(event) => setNewTimer(event.target.value)}
					/>
					<Button buttonColor={ButtonColor.jade} onClick={addNewTimer} animate>
						Add Timer
					</Button>
				</div>
				<Card color={CardColor.lightJade} size={CardSize.medium} column className="h-fit">
					<div
						className={`text-2xl font-bold text-center mx-10 ${
							timers.length > 0 ? "mb-2" : "mb-0"
						}`}
					>
						Active Timers
					</div>
					<div
						className={`grid ${
							timers.length > 3
								? "grid-rows-2"
								: timers.length > 0
								? "grid-rows-1"
								: "grid-rows-0"
						} grid-cols-3 gap-2`}
					>
						{timers.map((timer, index) => {
							return (
								<DeletableListItem
									key={`dlt-${timer}-${index}`}
									index={index}
									length={timer.toString()}
									unit="min"
									deleteItem={removeTimer}
								/>
							);
						})}
					</div>
				</Card>
			</Card>
			<div className="grid grid-cols-3 grid-rows-2 gap-10">
				{timers.map((timer, index) => {
					return <Timer key={`t-${timer}-${index}`} timerLength={timer} />;
				})}
			</div>
		</MainWrapper>
	);
}
