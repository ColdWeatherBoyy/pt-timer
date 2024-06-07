"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { useRouter } from "next/navigation";
import React, { FC, useContext, useEffect, useState } from "react";
import UserForm from "../components/UserForm";
import { handleSignIn } from "../../utilities/amplify/amplify.auth";
import { ThemeColor } from "../../utilities/types/theme.types";

const SignIn: FC = () => {
	const router = useRouter();
	const { handleLogInChange, userId, loadingUser } = useContext(UserContext);
	const [userData, setUserData] = useState({
		email: "",
		password: "",
	});
	const SignInFormInputs = [
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
	];

	const handleSignInSubmit = async () => {
		const res = await handleSignIn(userData.email, userData.password);
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

	return (
		<UserForm
			formInputs={SignInFormInputs}
			formColor={ThemeColor.horizon}
			formText={{
				title: "User Sign In",
				subtitle: "Please sign in to access your saved timers.",
				button: "Sign In",
				redirect: "Don't have an account?",
				redirectPath: "/account/signup",
			}}
			handleSubmit={handleSignInSubmit}
		/>
	);
};
export default SignIn;
