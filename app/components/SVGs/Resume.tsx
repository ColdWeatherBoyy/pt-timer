import React from "react";

interface ResumeProps extends React.SVGProps<SVGSVGElement> {
	size: string;
}

const Resume: React.FC<ResumeProps> = ({ size }) => {
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
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="2"
				d="M8 18V6l8 6-8 6Z"
			/>
		</svg>
	);
};

export default Resume;
