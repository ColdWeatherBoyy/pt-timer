"use client";
import MainWrapper from "./components/MainWrapper";
import LogIn from "./pages/Login";
import SignUp from "./pages/Signup";

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
