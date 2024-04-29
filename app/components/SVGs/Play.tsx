import React from "react";

interface PlayProps extends React.SVGProps<SVGSVGElement> {
	size: string;
}

const Play: React.FC<PlayProps> = ({ size }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path
				fillRule="evenodd"
				d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export default Play;
