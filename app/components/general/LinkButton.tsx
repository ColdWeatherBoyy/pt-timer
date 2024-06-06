import { ThemeColor } from "@/app/utilities/types/theme.types";
import { FC } from "react";

interface LinkButtonProps {
	text: string;
	textColor: ThemeColor;
	onClick: () => void;
	marginLeft?: boolean;
	marginRight?: boolean;
}

const LinkButton: FC<LinkButtonProps> = ({
	text,
	textColor,
	onClick,
	marginLeft = false,
	marginRight = false,
}) => {
	const textColorClass =
		textColor === ThemeColor.jade ? "text-jade-600" : "text-horizon-600";
	return (
		<div
			className={`${marginLeft && "ml-1"} ${
				marginRight && "mr-1"
			} ${textColorClass} cursor-pointer underline hover:tracking-wide hover:-translate-y-0.5 transition-all ease`}
			onClick={onClick}
		>
			{text}
		</div>
	);
};

export default LinkButton;
