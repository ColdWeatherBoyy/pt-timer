"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";
import { FC, useContext } from "react";
import { UserContext } from "../../providers/UserProvider";
import LinkButton from "../general/LinkButton";

//To-Do Not clear why this doesn't need to configure Amplify

const Header: FC = () => {
	const { validated, setValidated, userId } = useContext(UserContext);
	const router = useRouter();

	const handleSignOut = async () => {
		await signOut();
		setValidated(false);
	};

	return (
		<div className="flex py-4 shadow-md w-full bg-jade-200 mb-8 justify-between px-10 items-center">
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
