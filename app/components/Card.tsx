import React from "react";
import { ComponentColor, ThemeColor, ThemeShade } from "../utilities/themeTypes";

interface CardProps {
	cardColor: ThemeColor;
	cardShade: ThemeShade;
	column?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	cardColor,
	cardShade,
	column = false,
	className,
	children,
}) => {
	return (
		<div
			className={`min-w-fit p-4 ${ComponentColor[cardColor].card[cardShade]} flex ${
				column ? "flex-col justify-between" : "flex-row justify-around"
			} items-center rounded-lg shadow-lg border ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
