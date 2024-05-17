"use client";

import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import outputs from "../amplify_outputs.json";
import { validateUserSession } from "./utilities/amplifyFunctions";
import { useEffect } from "react";

Amplify.configure(outputs);

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		const validate = async () => {
			const res = await validateUserSession();
			if (res) {
				console.log("timers");
				router.push("/timers");
			} else {
				console.log("signin");
				router.push("/account/signin");
			}
		};
		validate();
	}, []);

	return <div>Loading</div>;
}
