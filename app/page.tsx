"use client";
import { useState } from "react";
import DeletableListItem from "./components/DeletableListItem";

export default function Home() {
	const [timers, setTimers] = useState([5, 10, 15]);

	const removeTimer = (index: number) => {
		const newTimers = [...timers];
		newTimers.splice(index, 1);
		setTimers(newTimers);
	};

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="flex w-4/5 justify-between bg-zinc-300 rounded-lg shadow-md p-10">
				<div className="text-4xl font-bold">Timers</div>
				<div className="flex flex-col py-4 px-1 bg-zinc-200 rounded-lg shadow-md">
					<div className="text-2xl font-bold text-center">Active Timers</div>
					<div className="flex justify-between p-4">
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
				</div>
			</div>
			{timers.map((timer) => (
				<div className="flex justify-center bg-zinc-300 rounded-lg shadow-md p-10">
					<div>
						<span className="font-bold">Length:</span> {timer}
					</div>
				</div>
			))}
		</main>
	);
}
