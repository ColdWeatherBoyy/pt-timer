"use client";
import { useState } from "react";
import MainWrapper from "./components/MainWrapper";
import MainSection from "./sections/TopCard";
import TimersSection from "./sections/TimersSection";

export default function Home() {
	const [timers, setTimers] = useState<number[]>([]);
	const [newTimer, setNewTimer] = useState<string>("");

	return (
		<MainWrapper>
			<MainSection
				timers={timers}
				newTimer={newTimer}
				setTimers={setTimers}
				setNewTimer={setNewTimer}
			/>
			<TimersSection timers={timers} />
		</MainWrapper>
	);
}
