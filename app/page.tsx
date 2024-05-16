"use client";

import { getCurrentUser } from "aws-amplify/auth";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
	const [loggedIn, setLoggedIn] = useState(false);
	const validateUserSession = async () => {
		try {
			const { username, userId, signInDetails } = await getCurrentUser();
			setLoggedIn(true);
		} catch (error) {
			// To-Do: Handle Error
			console.log(error);
		}
	};

	useEffect(() => {
		validateUserSession();
	}, []);

	return <Link href="/timers">Click Here For Timers</Link>;
}
