"use client";
import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import TopCard from "./sections/TopCard";
import TimersSection from "./sections/TimersSection";
import { Timers } from "./utilities/interfaces";
import { Units } from "./utilities/componentTypings";

export default function Home() {
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [newTimer, setNewTimer] = useState<string>("");

	return (
		<MainWrapper>
			<TopCard
				timers={timers}
				newTimer={newTimer}
				setTimers={setTimers}
				setNewTimer={setNewTimer}
			/>
			<TimersSection timers={timers} />
		</MainWrapper>
	);
}
