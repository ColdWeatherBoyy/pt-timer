import { ComponentColor } from "@/app/utilities/style/componentColor.styles";
import { ThemeColor } from "@/app/utilities/types/theme.types";
import { ChangeEvent, FC, KeyboardEvent } from "react";

interface InputProps {
	inputType: string;
	placeholder: string;
	value: string;
	inputColor: ThemeColor;
	centered?: boolean;
	onChange: (event: ChangeEvent<HTMLInputElement>) => void;
	onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
}

const Input: FC<InputProps> = ({
	inputType,
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
			type={inputType}
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			onKeyDown={onKeyDown}
		/>
	);
};

export default Input;
