"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import outputs from "../../../amplify_outputs.json";
import LinkButton from "../general/LinkButton";
import { ThemeColor } from "@/app/utilities/types/theme.types";

Amplify.configure(outputs);

const Header: FC = () => {
	const { handleLogInChange, userId } = useContext(UserContext);
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		handleLogInChange(false);
	};

	return (
		<div className="flex py-4 shadow-md w-full bg-jade-200 mb-8 justify-between px-10 items-center">
			<div className="flex flex-col">
				<span>Welcome to Physical</span>
				<span>Therapy Interval Timers!</span>
			</div>
			{userId ? (
				<LinkButton text="Sign Out" textColor={ThemeColor.jade} onClick={handleSignOut} />
			) : (
				<LinkButton
					text="Sign In"
					textColor={ThemeColor.jade}
					onClick={() => router.push("/account/signin")}
				/>
			)}
		</div>
	);
};

export default Header;
