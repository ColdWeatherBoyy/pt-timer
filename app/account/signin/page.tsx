"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { useRouter } from "next/navigation";
import { FC, useContext, useEffect, useState } from "react";
import { handleSignIn } from "../../utilities/amplify/amplify.auth";
import { ThemeColor } from "../../utilities/types/theme.types";
import UserForm from "../components/UserForm";
import LoadingSpinner from "@/app/components/general/LoadingSpinner";

const SignIn: FC = () => {
	const router = useRouter();
	const { handleLogInChange, userId, loadingUser } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
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
		setLoading(true);
		const res = await handleSignIn(userData.email, userData.password);
		if (res) {
			handleLogInChange(true);
			router.push("/timers");
		}
		setLoading(false);
	};

	useEffect(() => {
		if (!loadingUser && userId) {
			router.push("/timers");
		}
	}, [userId, router]);

	return (
		<>
			{loading && (
				<div className="absolute w-full h-full flex items-end justify-end p-6">
					<div className="w-20 h-20">
						<LoadingSpinner />
					</div>
				</div>
			)}
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
				loading={loading}
			/>
		</>
	);
};
export default SignIn;
