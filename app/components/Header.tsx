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
		<div className="flex py-4 shadow-md w-full bg-jade-200 text-center mb-8 justify-between px-4">
			<span>Welcome to Physical Therapy Interval Timers!</span>
			{validated ? (
				<div
					className="text-horizon-800 cursor-pointer underline underline-offset-2 hover:tracking-wide hover:-translate-y-0.5 transition-all ease"
					onClick={handleSignOut}
				>
					Sign Out
				</div>
			) : (
				<div
					className="text-horizon-800 cursor-pointer underline underline-offset-2 hover:tracking-wide hover:-translate-y-0.5 transition-all ease"
					onClick={() => router.push("/account/signin")}
				>
					Sign In
				</div>
			)}
		</div>
	);
};

export default Header;
