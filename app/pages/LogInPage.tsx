import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { ThemeColor } from "../utilities/themeTypes";

const LogIn: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const LogInFormInputs = [
		{ value: email, setValue: setEmail, type: "email", placeholder: "Enter email" },
		{
			value: password,
			setValue: setPassword,
			type: "password",
			placeholder: "Enter password",
		},
	];

	return (
		<UserForm
			formInputs={LogInFormInputs}
			formColor={ThemeColor.jade}
			formText={{
				title: "Log In",
				subtitle: "Please log in to access your saved timer",
				button: "Log In",
			}}
		/>
	);
};
export default LogIn;
