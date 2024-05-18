"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";
import { ThemeColor } from "../utilities/themeTypes";
import Button from "./Button";
import LinkButton from "./LinkButton";

const Header: React.FC = () => {
	const { validated, toggleValidation } = useContext(UserContext);
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		toggleValidation();
	};

	return (
		<div className="flex py-4 shadow-md w-full bg-jade-200 mb-8 justify-between px-4 items-center">
			<div className="flex flex-col">
				<span>Welcome to Physical</span>
				<span>Therapy Interval Timers!</span>
			</div>
			{validated ? (
				<LinkButton text="Sign Out" onClick={handleSignOut} />
			) : (
				<LinkButton text="Sign In" onClick={() => router.push("/account/signin")} />
			)}
		</div>
	);
};

export default Header;
