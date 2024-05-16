"use client";

import MainWrapper from "./components/MainWrapper";
import SignIn from "./pages/SignInPage";
import SignUp from "./pages/SignUpPage";

import TimerHomepage from "./pages/TimerHomepage";

export default function Home() {
	return (
		<MainWrapper>
			<TimerHomepage />
			<SignUp />
			<SignIn />
		</MainWrapper>
	);
}
