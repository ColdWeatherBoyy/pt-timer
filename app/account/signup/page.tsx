"use client";

import UserForm from "@/app/account/components/UserForm";
import { UserContext } from "@/app/providers/UserProvider";
import {
	handleAutoSignIn,
	handleConfirmSignUp,
	handleSignUp,
} from "@/app/utilities/amplify/amplify.auth";
import { ThemeColor } from "@/app/utilities/types/theme.types";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";

const enum SignUpStep {
	NOT_SIGNED_UP,
	CONFIRM_SIGN_UP,
}

const SignUp: FC = () => {
	const router = useRouter();
	const { handleLogInChange, userId, loadingUser } = useContext(UserContext);
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
			inputType: "email",
			placeholder: "Enter email",
		},
		{
			value: userData.password,
			setValue: (value: string) => setUserData({ ...userData, password: value }),
			inputType: "password",
			placeholder: "Enter password",
		},
		{
			value: userData.confirmationPassword,
			setValue: (value: string) =>
				setUserData({ ...userData, confirmationPassword: value }),
			inputType: "password",
			placeholder: "Confirm password",
		},
	];
	const ConfirmationFormInputs = [
		{
			value: userData.confirmationCode,
			setValue: (value: string) => setUserData({ ...userData, confirmationCode: value }),
			inputType: "confirmation code",
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
		if (res) {
			handleLogInChange(true);
			router.push("/timers");
		}
	};

	useEffect(() => {
		if (!loadingUser && userId) {
			router.push("/timers");
		}
	}, [userId, router]);

	// TO-DO: Consider using this format
	// const SignUpForm = (
	// 	<UserForm
	// 		formInputs={SignUpFormInputs}
	// 		formColor={ThemeColor.horizon}
	// 		formText={{
	// 			title: "User Sign Up",
	// 			subtitle: "Please create an account to use PT Timers.",
	// 			button: "Create Account",
	// 			redirect: "Already have an account?",
	// 			redirectPath: "/account/signin",
	// 		}}
	// 		handleSubmit={handleSignUpSubmit}
	// 	/>
	// );

	return (
		<>
			{signUpStep === SignUpStep.NOT_SIGNED_UP && (
				<UserForm
					formInputs={SignUpFormInputs}
					formColor={ThemeColor.horizon}
					formText={{
						title: "User Sign Up",
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
