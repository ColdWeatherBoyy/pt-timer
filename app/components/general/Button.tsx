import { ComponentColor } from "@/app/utilities/style/componentColor.styles";
import { ThemeColor } from "@/app/utilities/types/theme.types";
import React, { FC } from "react";

interface ButtonProps {
	buttonColor: ThemeColor;
	onClick: () => void;
	animate?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Button: FC<ButtonProps> = ({
	buttonColor,
	onClick,
	animate,
	className,
	children,
}) => {
	return (
		<button
			onClick={() => onClick()}
			className={`w-fit px-1.5 py-1 text-lg rounded-lg shadow-md hover:shadow-lg ${
				ComponentColor[buttonColor].button
			}  ${
				animate
					? "hover:animate-trembleHover active:animate-trembleActive"
					: "hover:scale-105 hover:-translate-y-0.5 hover:translate-x-0.5 active:translate-y-0 active:translate-x-0 active:scale-95"
			} active:shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:outline-none focus-visible:ring-jade-100
       transition-all duration-50 ease-in-out ${className}`}
		>
			{children}
		</button>
	);
};

export default Button;
