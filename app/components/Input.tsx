import React from "react";

interface InputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
	return (
		<input
			className="bg-jade-50 border-2 border-jade-300 rounded-lg shadow-sm p-1 my-3 focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-jade-200 transition duration-200 ease-in-out"
			type="string"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
