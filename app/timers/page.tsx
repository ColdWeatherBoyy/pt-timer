"use client";

import { UserContext } from "@/app/providers/UserProvider";
import TimersSection from "@/app/timers/components/TimersSection";
import TopCard from "@/app/timers/components/TopCard";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import LoadingSpinner from "../components/general/LoadingSpinner";

const TimerHomepage = () => {
	const [timers, setTimers] = useState<TimerConfig[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();
	const { userId, loadingUser } = useContext(UserContext);

	// useEffect(() => {
	// 	if (!loaded) return;
	// 	// localStorage.setItem("timers", JSON.stringify(timers));
	// }, [timers, loaded]);

	useEffect(() => {
		// let storedTimers = window.localStorage.getItem("timers")
		if (!loadingUser && !userId) {
			router.push("/account/signin");
		}
	}, [userId, loadingUser, router]);

	return (
		<>
			<TopCard />
			<TimersSection />
		</>
	);
};

export default TimerHomepage;
