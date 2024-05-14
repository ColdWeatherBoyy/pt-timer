"use client";

import MainWrapper from "./components/MainWrapper";
import LogIn from "./pages/LogInPage";
import SignUp from "./pages/SignUpPage";

import TimerHomepage from "./pages/TimerHomepage";

export default function Home() {
	return (
		<MainWrapper>
			<TimerHomepage />
			<SignUp />
			<LogIn />
		</MainWrapper>
	);
}
