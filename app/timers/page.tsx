"use client";

import { UserContext } from "@/app/providers/UserProvider";
import TimersSection from "@/app/timers/components/TimersSection";
import TopCard from "@/app/timers/components/TopCard";
import { getDBTimers } from "@/app/utilities/amplify/amplify.db";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import LoadingSection from "../components/general/LoadingSection";
import { sortTimers } from "../utilities/helperFunctions";

const TimerHomepage = () => {
	const [timers, setTimers] = useState<TimerConfig[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const router = useRouter();
	const { userId, loadingUser } = useContext(UserContext);

	const initializeTimers = useCallback(async () => {
		const dbTimers = await getDBTimers();
		if (!dbTimers) {
			console.error("Trouble accessing dbtimers");
			return;
		}
		setTimers(sortTimers(dbTimers));
		setLoading(false);
	}, []);

	useEffect(() => {
		// let storedTimers = window.localStorage.getItem("timers")
		if (!loadingUser && !userId) {
			router.push("/account/signin");
		} else {
			initializeTimers();
		}
	}, [userId, loadingUser, router, initializeTimers]);

	// useEffect(() => {
	// 	if (!loaded) return;
	// 	// localStorage.setItem("timers", JSON.stringify(timers));
	// }, [timers, loaded]);

	return (
		<>
			<TopCard timers={timers} setTimers={setTimers} />
			{loading ? (
				<div className="w-20 h-20">
					<LoadingSection />
				</div>
			) : (
				<TimersSection timers={timers} setTimers={setTimers} />
			)}
		</>
	);
};

export default TimerHomepage;
