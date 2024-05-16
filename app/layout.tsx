import type { Metadata } from "next";
import { inter } from "./utilities/fonts";
import "./globals.css";
import MainWrapper from "./components/MainWrapper";

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
				<main>
					<MainWrapper>{children}</MainWrapper>
				</main>
			</body>
		</html>
	);
}
