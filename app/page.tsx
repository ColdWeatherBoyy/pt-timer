"use client";
import MainWrapper from "./components/MainWrapper";
import Login from "./pages/Login";
import SignUp from "./pages/Signup";
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
				<Login />
			</MainWrapper>
		</>
	);
}
