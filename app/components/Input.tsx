"use client";

import React from "react";

interface InputProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onChange }) => {
	return (
		<input type="string" placeholder={placeholder} value={value} onChange={onChange} />
	);
};

export default Input;
