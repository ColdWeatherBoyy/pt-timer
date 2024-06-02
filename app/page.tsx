"use client";

import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { UserContext } from "./providers/UserProvider";

export default function Home() {
	const router = useRouter();
	const { userId } = useContext(UserContext);

	useEffect(() => {
		if (userId) {
			router.push("/timers");
		} else {
			router.push("/account/signin");
		}
	}, [router, userId]);
}
