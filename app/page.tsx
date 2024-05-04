"use client";
import { useEffect, useState } from "react";
import MainWrapper from "./components/MainWrapper";
import TopCard from "./sections/TopCard";
import TimersSection from "./sections/TimersSection";
import { Timers } from "./utilities/interfaces";

export default function Home() {
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);

	useEffect(() => {
		const storedTimers = window.localStorage.getItem("timers");
		if (storedTimers) {
			setTimers(JSON.parse(storedTimers));
		}
	}, []);

	useEffect(() => {
		if (timers.minuteTimers.length === 0 && timers.secondTimers.length === 0) return;
		localStorage.setItem("timers", JSON.stringify(timers));
	}, [timers]);

	return (
		<MainWrapper>
			<TopCard timers={timers} setTimers={setTimers} activeTimer={activeTimer} />
			<TimersSection
				timers={timers}
				activeTimer={activeTimer}
				setActiveTimer={setActiveTimer}
				setTimers={setTimers}
			/>
		</MainWrapper>
	);
}
