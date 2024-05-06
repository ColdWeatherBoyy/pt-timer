import React from "react";

interface InputProps {
	type: string;
	placeholder: string;
	value: string;
	centered?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	type,
	placeholder,
	value,
	centered = false,
	onChange,
}) => {
	return (
		<input
			className={` text-3xl bg-jade-50 border border-jade-300 rounded-lg shadow-md p-2 ${
				centered
					? "w-2/5 md:w-1/4 text-center placeholder:text-lg placeholder:-translate-y-1"
					: "text-lg"
			} focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-100 transition duration-200 ease-in-out`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
		/>
	);
};

export default Input;
