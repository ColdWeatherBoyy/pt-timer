import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { ThemeColor } from "../utilities/themeTypes";

const SignUp: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const SignUpFormInputs = [
		{ value: email, setValue: setEmail, type: "email", placeholder: "Enter email" },
		{
			value: password,
			setValue: setPassword,
			type: "password",
			placeholder: "Enter password",
		},
		{
			value: confirmPassword,
			setValue: setConfirmPassword,
			type: "password",
			placeholder: "Confirm password",
		},
	];
	return (
		<>
			<UserForm
				formInputs={SignUpFormInputs}
				formColor={ThemeColor.horizon}
				formText={{
					title: "Sign Up",
					subtitle: "Please create an account to use PT Timers.",
					button: "Create Account",
				}}
			/>
		</>
	);
};
export default SignUp;
