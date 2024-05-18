import React from "react";
import { ComponentColor, ThemeColor } from "../utilities/themeTypes";

interface InputProps {
	type: string;
	placeholder: string;
	value: string;
	inputColor: ThemeColor;
	centered?: boolean;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
	type,
	placeholder,
	value,
	inputColor,
	centered = false,
	onChange,
	onKeyDown,
}) => {
	return (
		<input
			className={`border ${ComponentColor[inputColor].input} rounded-lg shadow-md p-2 ${
				centered
					? "text-3xl w-2/5 md:w-1/4 text-center placeholder:text-lg placeholder:-translate-y-1"
					: "text-lg"
			} focus-visible:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-jade-100 transition duration-200 ease-in-out`}
			type={type}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};

export default Input;
