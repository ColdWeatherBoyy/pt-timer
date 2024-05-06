"use client";
import MainWrapper from "./components/MainWrapper";
import Login from "./pages/Login";
import TimerHomepage from "./pages/TimerHomepage";

export default function Home() {
	// return <MainWrapper>
	// 	<TimerHomepage />
	// </MainWrapper>
	return (
		<MainWrapper>
			<Login />
		</MainWrapper>
	);
}
