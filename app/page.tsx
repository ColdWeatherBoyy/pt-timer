"use client";
import { useState } from "react";

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
					<div className="flex justify-between p-6">
						{timers.map((timer, index) => {
							return (
								<div
									key={index}
									className="flex text-md bg-slate-400 py-2 pl-4 pr-2 mx-3 rounded-lg shadow-lg"
								>
									{timer} min
									<div
										className="ml-3 flex items-center justify-center bg-slate-100 rounded-full text-center text-xs w-fit h-fit px-1 py-0.5 leading-none select-none cursor-pointer hover:bg-slate-200 hover:shadow-2xl active:bg-slate-300 active:shadow-inner active:text-white"
										onClick={() => removeTimer(index)}
									>
										x
									</div>
								</div>
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
