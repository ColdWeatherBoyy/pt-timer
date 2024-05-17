"use client";

import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import outputs from "../amplify_outputs.json";
import { validateUserSession } from "./utilities/amplifyFunctions";

Amplify.configure(outputs);

export default function Home() {
	const router = useRouter();

	useEffect(() => {
		const validate = async () => {
			const res = await validateUserSession();
			if (res) {
				router.push("/timers");
			} else {
				router.push("/account/signin");
			}
		};
		validate();
	}, [router]);
}
