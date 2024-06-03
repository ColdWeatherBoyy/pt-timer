"use client";

import { createContext, useEffect, useState } from "react";

interface ActiveTimerContextInterface {
	activateTimer: (index: number) => void;
	deactivateTimer: () => void;
	activeTimer: number | null;
}

export const ActiveTimerContext = createContext<ActiveTimerContextInterface>({
	activateTimer: (index: number) =>
		console.error("Internal Error: activateTimer not defined"),
	deactivateTimer: () => console.error("Internal Error: deactivateTimer not defined"),
	activeTimer: null,
});

export default function ActiveTimerProvider({ children }: { children: React.ReactNode }) {
	const [activeTimer, setActiveTimer] = useState<number | null>(null);

	const activateTimer = (index: number) => {
		console.log("activate");
		setActiveTimer(index);
	};

	const deactivateTimer = () => {
		console.log("deactivate");
		setActiveTimer(null);
	};

	return (
		<ActiveTimerContext.Provider value={{ activateTimer, deactivateTimer, activeTimer }}>
			{children}
		</ActiveTimerContext.Provider>
	);
}
