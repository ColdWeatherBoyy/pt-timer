import React from "react";
import {
	ComponentColor,
	CardSize,
	ThemeColor,
	ThemeShade,
} from "../utilities/themeTypes";

interface CardProps {
	cardColor: ThemeColor;
	cardShade: ThemeShade;
	size?: CardSize;
	column?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	cardColor,
	cardShade,
	size,
	column = false,
	className,
	children,
}) => {
	return (
		<div
			className={`${ComponentColor[cardColor].card[cardShade]} ${size} flex ${
				column ? "flex-col justify-between" : "flex-row justify-around"
			} rounded-lg shadow-lg border ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
