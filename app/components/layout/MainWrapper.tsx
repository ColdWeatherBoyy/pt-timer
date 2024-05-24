import React, { FC } from "react";

interface MainWrapperProps {
	children: React.ReactNode;
}

const MainWrapper: FC<MainWrapperProps> = ({ children }) => {
	return (
		<main className="text-jade-950 bg-jade-50 flex min-h-screen flex-col items-center">
			{children}
		</main>
	);
};

export default MainWrapper;