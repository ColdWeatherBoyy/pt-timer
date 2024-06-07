import type { Metadata } from "next";
import MainWrapper from "./components/layout/MainWrapper";
import "./globals.css";
import ActiveTimerProvider from "./providers/ActiveTimerProvider";
import UserProvider from "./providers/UserProvider";
import { inter } from "./utilities/style/fonts";
import Header from "./components/layout/Header";

export const metadata: Metadata = {
	title: "PT Timers",
	description: "Interval Timers for Physical Therapy",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<UserProvider>
					<ActiveTimerProvider>
						<MainWrapper>{children}</MainWrapper>
					</ActiveTimerProvider>
				</UserProvider>
			</body>
		</html>
	);
}
