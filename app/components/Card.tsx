import React from "react";
import { CardColor, CardSize } from "../utilities/componentTypings";

interface CardProps {
	color: CardColor;
	size?: CardSize;
	column?: boolean;
	className?: string;
	children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
	color,
	size,
	column = false,
	className,
	children,
}) => {
	return (
		<div
			className={`${color} ${size} flex ${
				column ? "flex-col justify-between" : "flex-row justify-around"
			} rounded-lg shadow-lg border ${className}`}
		>
			{children}
		</div>
	);
};

export default Card;
