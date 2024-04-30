import React from "react";

interface InputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
	return (
		<input
			className="bg-jade-50 border border-jade-300 rounded-lg shadow-md p-1 focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-100 transition duration-200 ease-in-out"
			type="string"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
