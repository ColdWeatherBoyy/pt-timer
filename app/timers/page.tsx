"use client";

import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { useRouter } from "next/navigation";
import { useCallback, useContext, useEffect, useState } from "react";
import { type Schema } from "../../amplify/data/resource";
import outputs from "../../amplify_outputs.json";
import TimersSection from "../components/sections/TimersSection";
import TopCard from "../components/sections/TopCard";
import { UserContext } from "../providers/UserProvider";
import { Unit } from "../utilities/enums";
import { TimerSettings, Timers } from "../utilities/interfaces";

// Needed?
Amplify.configure(outputs);

const TimerHomepage = () => {
	const [loaded, setLoaded] = useState(false);
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);
	const router = useRouter();
	const { validated, setValidated, userId } = useContext(UserContext);
	const client = generateClient<Schema>();

	const saveDBTimer = async (userId: string, type: Unit, length: number) => {
		try {
			const { errors, data: newTimer } = await client.models.Timer.create({
				userId,
				type,
				length,
				interval: 1,
			});
			if (errors) {
				throw new Error(errors.toString());
			}
		} catch (error) {
			console.error("Error saving to db", error);
		}
	};

	const getDBTimers = useCallback(async () => {
		try {
			const { data: Timers, errors } = await client.models.Timer.list();
			if (errors) {
				throw new Error(errors.toString());
			}
			return Timers;
		} catch (error) {
			console.error("Error getting from db", error);
		}
	}, [client.models.Timer]);

	const formatDBTimers = useCallback(async (storedTimers: Schema["Timer"]["type"][]) => {
		const formatTimers: Timers = { secondTimers: [], minuteTimers: [] };
		storedTimers.map((storedTimer) => {
			const newTimer: TimerSettings = {
				length: storedTimer.length,
				interval: storedTimer.interval,
			};
			if (storedTimer.type === Unit.minutes) {
				formatTimers.minuteTimers.push(newTimer);
			} else {
				formatTimers.secondTimers.push(newTimer);
			}
		});
		return formatTimers;
	}, []);

	const initializeTimers = useCallback(async () => {
		const dbTimers = await getDBTimers();
		if (!dbTimers) {
			console.error("Trouble accessing dbtimers");
			return;
		}
		const formattedTimers = await formatDBTimers(dbTimers);

		setTimers(formattedTimers);
		setLoaded(true);
	}, []);

	useEffect(() => {
		// let storedTimers = window.localStorage.getItem("timers")

		if (!validated) {
			router.push("/account/signin");
		} else {
			initializeTimers();
		}
	}, [validated, router]);

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
			<button onClick={() => saveDBTimer(userId, Unit.seconds, 5)}>create</button>
		</>
	);
};

export default TimerHomepage;
