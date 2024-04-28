import React from "react";
import { CardColor, CardSize } from "./ComponentTypings";

interface CardProps {
	color: CardColor;
	size?: CardSize;
	column?: boolean;
	children: React.ReactNode;
}
const Card: React.FC<CardProps> = ({ color, size, column = false, children }) => {
	return (
		<div
			className={`${color} ${size} flex ${
				column ? "flex-col" : "flex-row"
			} justify-between rounded-lg shadow-lg border`}
		>
			{children}
		</div>
	);
};

export default Card;
