"use client";

import { UserContext } from "@/app/providers/UserProvider";
import TopCard from "@/app/timers/components/TopCard";
import TimersSection from "@/app/timers/components/TimersSection";
import { getDBTimers } from "@/app/utilities/amplify/amplify.db";
import { TimerConfig } from "@/app/utilities/types/timers.types";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { sortTimers } from "../utilities/helperFunctions";

const TimerHomepage = () => {
	const [timers, setTimers] = useState<TimerConfig[]>([]);
	const router = useRouter();
	const { userId } = useContext(UserContext);

	const initializeTimers = useCallback(async () => {
		const dbTimers = await getDBTimers();
		if (!dbTimers) {
			console.error("Trouble accessing dbtimers");
			return;
		}
		setTimers(sortTimers(dbTimers));
	}, []);

	useEffect(() => {
		// let storedTimers = window.localStorage.getItem("timers")
		if (!userId) {
			router.push("/account/signin");
		} else {
			initializeTimers();
		}
	}, [userId, router, initializeTimers]);

	// useEffect(() => {
	// 	if (!loaded) return;
	// 	// localStorage.setItem("timers", JSON.stringify(timers));
	// }, [timers, loaded]);

	return (
		<>
			<TopCard timers={timers} setTimers={setTimers} />
			<TimersSection timers={timers} setTimers={setTimers} />
		</>
	);
};

export default TimerHomepage;
