import React from "react";

interface MainWrapperProps {
	children: React.ReactNode;
}

const MainWrapper: React.FC<MainWrapperProps> = ({ children }) => {
	return (
		<main className="text-jade-950 bg-jade-100 flex min-h-screen flex-col items-center justify-between p-10">
			{children}
		</main>
	);
};

export default MainWrapper;
