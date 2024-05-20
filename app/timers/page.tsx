"use client";

import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import outputs from "../../amplify_outputs.json";
import TimersSection from "../components/sections/TimersSection";
import TopCard from "../components/sections/TopCard";
import { UserContext } from "../providers/UserProvider";
import { Timers } from "../utilities/interfaces";
import { generateClient } from "aws-amplify/data";
import { type Schema } from "../../amplify/data/resource";

Amplify.configure(outputs);

const TimerHomepage = () => {
	const [loaded, setLoaded] = useState(false);
	const [timers, setTimers] = useState<Timers>({ secondTimers: [], minuteTimers: [] });
	const [activeTimer, setActiveTimer] = useState<number | null>(null);
	const router = useRouter();
	const { validated, setValidated, userId } = useContext(UserContext);

	const client = generateClient<Schema>();

	// const handleCreate = async () => {
	// 	const { errors, data: newTimer } = await client.models.Timer.create({
	//     userId,

	// 		length: 5,
	// 	});
	// 	console.log(errors, newTimer);
	// };

	// const handleGet = async () => {
	// 	const { data: secondTimers, errors } = await client.models.SecondTimer.list();

	// 	console.log(secondTimers, errors);
	// };

	useEffect(() => {
		const storedTimers = window.localStorage.getItem("timers");

		if (!validated) {
			router.push("/account/signin");
		} else {
			if (storedTimers) {
				setTimers(JSON.parse(storedTimers));
			}
			setLoaded(true);
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
			{/* <button onClick={handleCreate}>create</button>
			<button onClick={handleGet}>get</button> */}
		</>
	);
};

export default TimerHomepage;
