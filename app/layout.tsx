import type { Metadata } from "next";
import Header from "./components/layout/Header";
import MainWrapper from "./components/layout/MainWrapper";
import "./globals.css";
import UserProvider from "./providers/UserProvider";
import { inter } from "./utilities/style/fonts";

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
					<MainWrapper>
						<Header />
						{children}
					</MainWrapper>
				</UserProvider>
			</body>
		</html>
	);
}
