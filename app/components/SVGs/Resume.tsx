import { SVGProps } from "@/app/utilities/types/svg.types";
import React from "react";

// Thanks to https://flowbite.com/ for the SVG path

const Resume: React.FC<SVGProps> = ({ size }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="none"
			viewBox="0 0 24 24"
		>
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeLinejoin="round"
				strokeWidth="2"
				d="M8 18V6l8 6-8 6Z"
			/>
		</svg>
	);
};

export default Resume;
