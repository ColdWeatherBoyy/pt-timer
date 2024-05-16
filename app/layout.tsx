import type { Metadata } from "next";
import { inter } from "./utilities/fonts";
import "./globals.css";

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
			<body className={inter.className}>{children}</body>
		</html>
	);
}
