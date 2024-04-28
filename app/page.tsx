"use client";
import { useState } from "react";
import DeletableListItem from "./components/DeletableListItem";
import MainWrapper from "./components/MainWrapper";
import Card from "./components/Card";
import { CardColor, CardSize } from "./components/ComponentTypings";

export default function Home() {
	const [timers, setTimers] = useState([5, 10, 15]);

	const removeTimer = (index: number) => {
		const newTimers = [...timers];
		newTimers.splice(index, 1);
		setTimers(newTimers);
	};

	return (
		<MainWrapper>
			<Card color={CardColor.medium} size={CardSize.large}>
				<div className="text-4xl font-bold">Timers</div>
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
			{timers.map((timer) => (
				<div className="flex justify-center bg-jade-300 rounded-lg shadow-md p-10">
					<div>
						<span className="font-bold">Length:</span> {timer}
					</div>
				</div>
			))}
		</MainWrapper>
	);
}
