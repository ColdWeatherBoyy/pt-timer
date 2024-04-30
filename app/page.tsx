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
	const [toggled, setToggled] = useState(false);
	// toggled = false means seconds, toggled = true means minutes
	const units = toggled ? Units.minutes : Units.seconds;

	return (
		<MainWrapper>
			<TopCard
				timers={timers}
				newTimer={newTimer}
				setTimers={setTimers}
				setNewTimer={setNewTimer}
				toggled={toggled}
				setToggled={setToggled}
				units={units}
			/>
			<TimersSection timers={timers} />
		</MainWrapper>
	);
}
