"use client";

import { createContext, useCallback, useEffect, useState } from "react";
import { TimerStatus } from "../utilities/types/timers.types";

interface ActiveTimerContextInterface {
	assignActiveTimer: (index: number, timerStatus: TimerStatus) => void;
	unassignActiveTimer: () => void;
	activeTimer: { index: number | null; timerStatus: TimerStatus };
}

interface ActiveTimerInterface {
	index: number | null;
	timerStatus: TimerStatus;
}

export const ActiveTimerContext = createContext<ActiveTimerContextInterface>({
	assignActiveTimer: (index: number, timerStatus: TimerStatus) =>
		console.error("Internal Error: assignActiveTimer not defined"),
	unassignActiveTimer: () =>
		console.error("Internal Error: unassignActiveTimer not defined"),
	activeTimer: { index: null, timerStatus: TimerStatus.stopped },
});

export default function ActiveTimerProvider({ children }: { children: React.ReactNode }) {
	const [activeTimer, setActiveTimer] = useState<ActiveTimerInterface>({
		index: null,
		timerStatus: TimerStatus.stopped,
	});

	const assignActiveTimer = useCallback((index: number, timerStatus: TimerStatus) => {
		setActiveTimer({ index, timerStatus });
	}, []);

	const unassignActiveTimer = useCallback(() => {
		setActiveTimer({ index: null, timerStatus: TimerStatus.stopped });
	}, []);

	useEffect(() => {
		console.log(activeTimer);
	}, [activeTimer]);

	return (
		<ActiveTimerContext.Provider
			value={{ assignActiveTimer, unassignActiveTimer, activeTimer }}
		>
			{children}
		</ActiveTimerContext.Provider>
	);
}
