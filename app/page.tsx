"use client";

import { Amplify } from "aws-amplify";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import outputs from "../amplify_outputs.json";
import { UserContext } from "./providers/UserProvider";

Amplify.configure(outputs);

export default function Home() {
	const router = useRouter();
	const { validated, toggleValidation } = useContext(UserContext);

	useEffect(() => {
		if (validated) {
			router.push("/timers");
		} else {
			router.push("/account/signin");
		}
	}, [validated, router]);
}
