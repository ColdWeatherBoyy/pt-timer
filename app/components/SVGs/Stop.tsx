import { SVGProps } from "@/app/utilities/types/svg.types";
import React, { FC } from "react";

// Thanks to https://flowbite.com/ for the SVG path

const Stop: FC<SVGProps> = ({ size }) => {
	return (
		<svg
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			width={size}
			height={size}
			fill="currentColor"
			viewBox="0 0 24 24"
		>
			<path d="M7 5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7Z" />
		</svg>
	);
};

export default Stop;
