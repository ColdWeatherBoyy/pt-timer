import React from "react";

export default function LoadingSection() {
	return (
		<div className="animate-spinPulse">
			<svg
				className="animate-spin"
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
			>
				<circle
					className="text-jade-600"
					cx="12"
					cy="12"
					r="10"
					stroke="currentColor"
					strokeWidth="4"
				></circle>
				<circle
					fill="none"
					strokeWidth="4"
					stroke="currentColor"
					className="text-horizon-400 animate-heavyPulse"
					strokeDasharray="23"
					strokeDashoffset="23"
					cx="12"
					cy="12"
					r="10"
				/>
			</svg>
		</div>
	);
}
