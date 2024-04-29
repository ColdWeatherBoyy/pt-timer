import React from "react";
import { ButtonColor } from "./ComponentTypings";

interface ButtonProps {
	buttonColor: ButtonColor;
	onClick: () => void;
	animate?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
	buttonColor,
	onClick,
	animate,
	className,
	children,
}) => {
	return (
		<button
			onClick={onClick}
			className={`w-fit p-2 rounded-lg shadow-lg hover:shadow-xl ${buttonColor}  ${
				animate
					? "hover:animate-trembleHover active:animate-trembleActive"
					: "hover:scale-105 hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-y-0 active:translate-x-0 active:scale-95"
			} active:shadow-inner transition-all duration-50 ease-in-out ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
