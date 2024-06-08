"use client";

import { ActiveTimerContext } from "@/app/providers/ActiveTimerProvider";
import { UserContext } from "@/app/providers/UserProvider";
import { TimerStatus } from "@/app/utilities/types/timers.types";
import React, { FC, useContext } from "react";
import LoadingSpinner from "../general/LoadingSpinner";
import Header from "./Header";

interface MainWrapperProps {
	children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
	const { activeTimer } = useContext(ActiveTimerContext);
	const { loadingUser } = useContext(UserContext);
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
		<>
			{loadingUser && (
				<div className="absolute h-full w-full z-30 flex items-center justify-center">
					<div className="h-60 w-60">
						<LoadingSpinner />
					</div>
				</div>
			)}
			<main
				className={`text-jade-950 pb-3 ${bgColor} flex min-h-screen flex-col items-center ${
					loadingUser && "opacity-30 pointer-events-none"
				}`}
			>
				<Header />

				{children}
			</main>
		</>
	);
};

export default MainWrapper;
