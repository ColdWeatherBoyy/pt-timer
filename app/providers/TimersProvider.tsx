"use client";

import { Dispatch, SetStateAction, createContext, useState } from "react";
import { TimerConfig } from "../utilities/types/timers.types";

interface TimerContextInterface {
	setTimers: Dispatch<SetStateAction<TimerConfig[]>>;
	timers: TimerConfig[];
}

export const TimerContext = createContext<TimerContextInterface>({
	setTimers: () => console.error("Internal Error: setTimers not defined"),
	timers: [],
});

export default function TimerProvider({ children }: { children: React.ReactNode }) {
	const [timers, setTimers] = useState<TimerConfig[]>([]);

	return (
		<TimerContext.Provider value={{ setTimers, timers }}>
			{children}
		</TimerContext.Provider>
	);
}
