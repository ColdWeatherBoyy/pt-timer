"use client";

import { UserContext } from "@/app/providers/UserProvider";
import { ThemeColor } from "@/app/utilities/types/theme.types";
import { Amplify } from "aws-amplify";
import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { FC, useContext, useState } from "react";
import outputs from "../../../amplify_outputs.json";
import LinkButton from "../general/LinkButton";
import LoadingSpinner from "../general/LoadingSpinner";

Amplify.configure(outputs);

const Header: FC = () => {
	const { handleLogInChange, userId } = useContext(UserContext);
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleSignOut = async () => {
		setLoading(true);
		await signOut();
		handleLogInChange(false);
		setLoading(false);
	};

	return (
		<div className="flex py-4 shadow-md w-full bg-gradient-to-r from-jade-400 to-horizon-400 mb-3 justify-between px-10 items-center">
			<div className="flex w-3/5">Welcome to Physical Therapy Interval Timers!</div>
			{loading ? (
				<div className="h-6 w-6 bg-white bg-opacity-30 rounded-full flex items-center justify-center">
					<div className="h-5 w-5">
						<LoadingSpinner />
					</div>
				</div>
			) : userId ? (
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
