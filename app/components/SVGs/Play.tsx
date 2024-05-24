import { SVGProps } from "@/app/utilities/types/svg.types";
import React from "react";

// Thanks to https://flowbite.com/ for the SVG path

const Play: React.FC<SVGProps> = ({ size }) => {
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
