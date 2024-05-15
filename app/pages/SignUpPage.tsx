import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { ThemeColor } from "../utilities/themeTypes";
import { handleSignUp, handleConfirmSignUp } from "../utilities/amplifyFunctions";

const SignUp: React.FC = () => {
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		confirmationPassword: "",
		confirmationCode: "",
	});
	const SignUpFormInputs = [
		{
			value: userData.email,
			setValue: (value: string) => setUserData({ ...userData, email: value }),
			type: "email",
			placeholder: "Enter email",
		},
		{
			value: userData.password,
			setValue: (value: string) => setUserData({ ...userData, password: value }),
			type: "password",
			placeholder: "Enter password",
		},
		{
			value: userData.confirmationPassword,
			setValue: (value: string) =>
				setUserData({ ...userData, confirmationPassword: value }),
			type: "password",
			placeholder: "Confirm password",
		},
	];
	const ConfirmationFormInputs = [
		{
			value: userData.confirmationCode,
			setValue: (value: string) => setUserData({ ...userData, confirmationCode: value }),
			type: "confirmation code",
			placeholder: "Enter confirmation code",
		},
	];

	const handleSignUpSubmit = async () => {
		await handleSignUp(userData.email, userData.password);
	};

	const handleConfirmationSubmit = async () => {
		await handleConfirmSignUp(userData.email, userData.confirmationCode);
	};

	return (
		<>
			<UserForm
				formInputs={SignUpFormInputs}
				formColor={ThemeColor.horizon}
				formText={{
					title: "New Account Sign Up",
					subtitle: "Please create an account to use PT Timers.",
					button: "Create Account",
				}}
				handleSubmit={handleSignUpSubmit}
			/>
			<UserForm
				formInputs={ConfirmationFormInputs}
				formColor={ThemeColor.jade}
				formText={{
					title: "Account Confirmation",
					subtitle: "Please enter the code sent to your email",
					button: "Confirm Account",
				}}
				handleSubmit={handleConfirmationSubmit}
			/>
		</>
	);
};
export default SignUp;
