"use client";
import { useState } from "react";

export default function Home() {
	const [timers, setTimers] = useState([5, 10, 15]);

	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			{timers.map((timers) => (
				<div className="flex w-3/4 justify-content bg-zinc-200 rounded-lg shadow-md p-10">
					{timers}
				</div>
			))}
		</main>
	);
}
