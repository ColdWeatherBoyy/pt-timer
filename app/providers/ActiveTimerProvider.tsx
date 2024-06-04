"use client";

import {
	Dispatch,
	SetStateAction,
	createContext,
	useCallback,
	useEffect,
	useState,
} from "react";
import { TimerStatus } from "../utilities/types/timers.types";

interface ActiveTimerInterface {
	index: number | null;
	timerStatus: TimerStatus;
}
interface ActiveTimerContextInterface {
	setActiveTimer: Dispatch<SetStateAction<ActiveTimerInterface>>;
	activeTimer: { index: number | null; timerStatus: TimerStatus };
}

export const ActiveTimerContext = createContext<ActiveTimerContextInterface>({
	setActiveTimer: () => console.error("Internal Error: setActiveTimer not defined"),
	activeTimer: { index: null, timerStatus: TimerStatus.null },
});

export default function ActiveTimerProvider({ children }: { children: React.ReactNode }) {
	const [activeTimer, setActiveTimer] = useState<ActiveTimerInterface>({
		index: null,
		timerStatus: TimerStatus.null,
	});

	useEffect(() => {
		console.log(activeTimer);
	}, [activeTimer]);

	return (
		<ActiveTimerContext.Provider value={{ setActiveTimer, activeTimer }}>
			{children}
		</ActiveTimerContext.Provider>
	);
}
