"use client";

import React, { useContext } from "react";
import { UserContext } from "../providers/UserProvider";

const Header: React.FC = () => {
	const { validated, toggleValidation } = useContext(UserContext);
	return (
		<div className="flex py-4 shadow-md w-full bg-jade-300 text-center mb-8 justify-between px-4">
			<span>Welcome to Physical Therapy Interval Timers!</span>
			{validated ? <div>Sign Out</div> : <div>Sign In</div>}
		</div>
	);
};

export default Header;
