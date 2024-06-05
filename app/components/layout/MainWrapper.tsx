"use client";

import { ActiveTimerContext } from "@/app/providers/ActiveTimerProvider";
import { TimerStatus } from "@/app/utilities/types/timers.types";
import React, { FC, useContext } from "react";

interface MainWrapperProps {
	children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
	const { activeTimer } = useContext(ActiveTimerContext);
	let bgColor;
	switch (activeTimer.timerStatus) {
		case TimerStatus.running:
			bgColor = "bg-timerStatus-started";
			break;
		case TimerStatus.paused:
			bgColor = "bg-timerStatus-paused";
			break;
		case TimerStatus.betweenReps:
			bgColor = "bg-timerStatus-betweenReps";
			break;
		case TimerStatus.stopping:
			bgColor = "bg-timerStatus-stopping";
			break;
		default:
			bgColor = "bg-jade-50";
	}

	return (
		<main
			className={`text-jade-950 pb-3 ${bgColor} flex min-h-screen flex-col items-center`}
		>
			{children}
		</main>
	);
};

export default MainWrapper;
