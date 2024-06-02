"use client";

import { UserContext } from "@/app/providers/UserProvider";
import TopCard from "@/app/timers/components/TopCard";
import TimersSection from "@/app/timers/components/TimersSection";
import { getDBTimers } from "@/app/utilities/amplify/amplify.db";
import { formatDBTimers } from "@/app/utilities/helperFunctions";
import { TimersCollection } from "@/app/utilities/types/timers.types";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";

const TimerHomepage = () => {
	const [timers, setTimers] = useState<TimersCollection>({
		secondTimers: [],
		minuteTimers: [],
	});
	const [activeTimer, setActiveTimer] = useState<number | null>(null);
	const router = useRouter();
	const { validated, externalSetValidated, userId } = useContext(UserContext);

	const initializeTimers = useCallback(async () => {
		const dbTimers = await getDBTimers();
		if (!dbTimers) {
			console.error("Trouble accessing dbtimers");
			return;
		}
		const formattedTimers = await formatDBTimers(dbTimers);

		setTimers(formattedTimers);
	}, []);

	useEffect(() => {
		// let storedTimers = window.localStorage.getItem("timers")
		if (!validated) {
			router.push("/account/signin");
		} else {
			initializeTimers();
		}
	}, [validated, router, initializeTimers]);

	// useEffect(() => {
	// 	if (!loaded) return;
	// 	// localStorage.setItem("timers", JSON.stringify(timers));
	// }, [timers, loaded]);

	return (
		<>
			<TopCard timers={timers} setTimers={setTimers} activeTimer={activeTimer} />
			<TimersSection
				timers={timers}
				activeTimer={activeTimer}
				setActiveTimer={setActiveTimer}
				setTimers={setTimers}
			/>
		</>
	);
};

export default TimerHomepage;
