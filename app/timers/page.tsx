"use client";

import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import outputs from "../../amplify_outputs.json";
import TimersSection from "../components/sections/TimersSection";
import TopCard from "../components/sections/TopCard";
import { UserContext } from "../providers/UserProvider";
import { getDBTimers } from "../utilities/databaseFunctions";
import { formatDBTimers } from "../utilities/helperFunctions";
import { Timers } from "../utilities/interfaces";

// Needed?
Amplify.configure(outputs);

const TimerHomepage = () => {
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);
	const router = useRouter();
	const { validated, setValidated, userId } = useContext(UserContext);

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
