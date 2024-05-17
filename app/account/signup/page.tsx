"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import UserForm from "../../components/UserForm";
import {
	handleAutoSignIn,
	handleConfirmSignUp,
	handleSignUp,
} from "../../utilities/amplifyFunctions";
import { SignUpStep } from "../../utilities/enums";
import { ThemeColor } from "../../utilities/themeTypes";

const SignUp: React.FC = () => {
	const router = useRouter();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
		confirmationPassword: "",
		confirmationCode: "",
	});
	const [signUpStep, setSignUpStep] = useState<SignUpStep>(SignUpStep.NOT_SIGNED_UP);
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
		const res = await handleSignUp(userData.email, userData.password);
		if (res) setSignUpStep(SignUpStep.CONFIRM_SIGN_UP);
	};

	const handleConfirmationSubmit = async () => {
		const res = await handleConfirmSignUp(userData.email, userData.confirmationCode);
		if (res) completeAutoSignIn();
	};

	const completeAutoSignIn = async () => {
		const res = await handleAutoSignIn();
		if (res) router.push("/timers");
	};

	return (
		<>
			{signUpStep === SignUpStep.NOT_SIGNED_UP && (
				<UserForm
					formInputs={SignUpFormInputs}
					formColor={ThemeColor.horizon}
					formText={{
						title: "New Account Sign Up",
						subtitle: "Please create an account to use PT Timers.",
						button: "Create Account",
						redirect: "Already have an account?",
						redirectPath: "/account/signin",
					}}
					handleSubmit={handleSignUpSubmit}
				/>
			)}
			{signUpStep === SignUpStep.CONFIRM_SIGN_UP && (
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
			)}
		</>
	);
};
export default SignUp;
