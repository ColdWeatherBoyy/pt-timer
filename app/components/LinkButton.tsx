import React from "react";

interface LinkButtonProps {
	text: string;
	onClick: () => void;
	marginLeft?: boolean;
	marginRight?: boolean;
}

const LinkButton: React.FC<LinkButtonProps> = ({
	text,
	onClick,
	marginLeft = false,
	marginRight = false,
}) => {
	return (
		<div
			className={`${marginLeft && "ml-1"} ${
				marginRight && "mr-1"
			} text-horizon-800 cursor-pointer underline hover:tracking-wide hover:-translate-y-0.5 transition-all ease`}
			onClick={onClick}
		>
			{text}
		</div>
	);
};

export default LinkButton;
