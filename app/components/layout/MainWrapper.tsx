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
			bgColor = "animate-animateGradientRunning";
			break;
		case TimerStatus.paused:
			bgColor = "animate-animateGradientPaused";
			break;
		case TimerStatus.betweenReps:
			bgColor = "animate-animateGradientBetweenReps";
			break;
		case TimerStatus.stopping:
			bgColor = "animate-animateGradientStopping";
			break;
		default:
			bgColor = "bg-gradient-to-r from-jade-100 to-horizon-100";
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
