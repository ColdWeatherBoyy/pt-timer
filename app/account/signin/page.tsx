"use client";

import React, { useState } from "react";
import UserForm from "../../components/UserForm";
import { handleSignIn } from "../../utilities/amplifyFunctions";
import { ThemeColor } from "../../utilities/themeTypes";
import { useRouter } from "next/navigation";

const SignIn: React.FC = () => {
	const router = useRouter();
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const SignInFormInputs = [
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
	];

	const handleSignInSubmit = async () => {
		const res = await handleSignIn(userData.email, userData.password);
		if (res) router.push("/timers");
	};

	return (
		<>
			<UserForm
				formInputs={SignInFormInputs}
				formColor={ThemeColor.horizon}
				formText={{
					title: "User Sign In",
					subtitle: "Please sign in to access your saved timers.",
					button: "Sign In",
					redirect: "Don't have an account?",
				}}
				handleSubmit={handleSignInSubmit}
			/>
		</>
	);
};
export default SignIn;
