import React from "react";

interface ButtonProps {
	onClick?: () => void;
	animate?: boolean;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ onClick, animate, children }) => {
	return (
		<button
			onClick={onClick}
			className={`w-fit px-2 py-1 bg-gradient-to-r from-jade-500 to-jade-800 text-jade-50 border border-jade-500 rounded-lg shadow-lg hover:shadow-xl ${
				animate ? "hover:animate-tremble" : "hover:scale-105"
			} hover:border-jade-200 transition-all duration-200 ease-in-out`}
		>
			{children}
		</button>
	);
};

export default Button;
