"use client";
import MainWrapper from "./components/MainWrapper";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";

import TimerHomepage from "./pages/TimerHomepage";

export default function Home() {
	// return <MainWrapper>
	// 	<TimerHomepage />
	// </MainWrapper>
	return (
		<>
			<MainWrapper>
				<SignUp />
			</MainWrapper>
			<MainWrapper>
				<LogIn />
			</MainWrapper>
		</>
	);
}
