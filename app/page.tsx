"use client";

import { getCurrentUser } from "aws-amplify/auth";
import { useEffect, useState } from "react";
import MainWrapper from "./components/MainWrapper";
import SignUp from "./pages/SignUpPage";
import TimerHomepage from "./pages/TimerHomepage";

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

	return (
		<MainWrapper>
			{loggedIn ? (
				<TimerHomepage />
			) : (
				<>
					<SignUp />
				</>
			)}
		</MainWrapper>
	);
}
