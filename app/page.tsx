"use client";
import { useEffect, useState } from "react";
import MainWrapper from "./components/MainWrapper";
import TimersSection from "./sections/TimersSection";
import TopCard from "./sections/TopCard";
import { Timers } from "./utilities/interfaces";

export default function Home() {
	// set initial load tracker
	const [loaded, setLoaded] = useState(false);
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);

	useEffect(() => {
		const storedTimers = window.localStorage.getItem("timers");
		if (storedTimers) {
			setTimers(JSON.parse(storedTimers));
		}
		setLoaded(true);
	}, []);

	useEffect(() => {
		if (!loaded) return;
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
