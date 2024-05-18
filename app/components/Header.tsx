"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { ThemeColor } from "../utilities/themeTypes";
import Button from "./Button";

const Header: React.FC = () => {
	const { validated, toggleValidation } = useContext(UserContext);
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		toggleValidation();
	};

	return (
		<div className="flex py-4 shadow-md w-full bg-jade-300 text-center mb-8 justify-between px-4">
			<span>Welcome to Physical Therapy Interval Timers!</span>
			{validated ? (
				<Button buttonColor={ThemeColor.horizon} onClick={handleSignOut}>
					Sign Out
				</Button>
			) : (
				<Button
					buttonColor={ThemeColor.horizon}
					onClick={() => router.push("/account/signin")}
				>
					Sign In
				</Button>
			)}
		</div>
	);
};

export default Header;
