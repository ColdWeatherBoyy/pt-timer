"use client";

import { useEffect, useState } from "react";
import TimersSection from "../components/sections/TimersSection";
import TopCard from "../components/sections/TopCard";
import { Timers } from "../utilities/interfaces";
import { useRouter } from "next/navigation";
import { validateUserSession } from "../utilities/amplifyFunctions";
import { Amplify } from "aws-amplify";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

const TimerHomepage = () => {
	const [loaded, setLoaded] = useState(false);
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);
	const router = useRouter();

	useEffect(() => {
		const storedTimers = window.localStorage.getItem("timers");

		const validate = async () => {
			const res = await validateUserSession();

			if (!res) {
				router.push("/account/signin");
			} else {
				if (storedTimers) {
					setTimers(JSON.parse(storedTimers));
				}
				setLoaded(true);
			}
		};

		validate();
	}, [router]);

	useEffect(() => {}, []);

	useEffect(() => {
		if (!loaded) return;
		localStorage.setItem("timers", JSON.stringify(timers));
	}, [timers, loaded]);

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
