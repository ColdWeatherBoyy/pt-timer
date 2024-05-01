"use client";
import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import TopCard from "./sections/TopCard";
import TimersSection from "./sections/TimersSection";
import { Timers } from "./utilities/interfaces";

export default function Home() {
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });

	return (
		<MainWrapper>
			<TopCard timers={timers} setTimers={setTimers} />
			<TimersSection timers={timers} />
		</MainWrapper>
	);
}
