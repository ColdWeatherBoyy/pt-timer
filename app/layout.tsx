import type { Metadata } from "next";
import MainWrapper from "./components/general/MainWrapper";
import "./globals.css";
import { inter } from "./utilities/style/fonts";
import UserProvider from "./providers/UserProvider";
import Header from "./components/general/Header";

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
