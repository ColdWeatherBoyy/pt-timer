"use client";

import React, { useEffect, useState } from "react";
import { Timers } from "../utilities/interfaces";
import MainWrapper from "../components/MainWrapper";
import TopCard from "../sections/TopCard";
import TimersSection from "../sections/TimersSection";

const TimerHomepage = () => {
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
		<>
			<TopCard timers={timers} setTimers={setTimers} activeTimer={activeTimer} />
			<TimersSection
				timers={timers}
				activeTimer={activeTimer}
				setActiveTimer={setActiveTimer}
				setTimers={setTimers}
			/>
		</>
	);
};

export default TimerHomepage;
