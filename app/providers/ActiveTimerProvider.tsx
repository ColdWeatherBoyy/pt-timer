"use client";

import { createContext, useCallback, useEffect, useState } from "react";

interface ActiveTimerContextInterface {
	assignActiveTimer: (index: number) => void;
	unassignActiveTimer: () => void;
	activeTimer: number | null;
}

export const ActiveTimerContext = createContext<ActiveTimerContextInterface>({
	assignActiveTimer: (index: number) =>
		console.error("Internal Error: assignActiveTimer not defined"),
	unassignActiveTimer: () =>
		console.error("Internal Error: unassignActiveTimer not defined"),
	activeTimer: null,
});

export default function ActiveTimerProvider({ children }: { children: React.ReactNode }) {
	const [activeTimer, setActiveTimer] = useState<number | null>(null);

	const assignActiveTimer = useCallback((index: number) => {
		setActiveTimer(index);
	}, []);

	const unassignActiveTimer = useCallback(() => {
		setActiveTimer(null);
	}, []);

	return (
		<ActiveTimerContext.Provider
			value={{ assignActiveTimer, unassignActiveTimer, activeTimer }}
		>
			{children}
		</ActiveTimerContext.Provider>
	);
}
