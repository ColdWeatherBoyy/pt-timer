import React, { useState } from "react";
import UserForm from "../components/UserForm";
import { ThemeColor } from "../utilities/themeTypes";

const LogIn: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");

	return (
		<UserForm
			email={email}
			setEmail={setEmail}
			password={password}
			setPassword={setPassword}
			formColor={ThemeColor.jade}
			formText={{
				purpose: "Log In",
				subtitle: "Please log in to access your saved timer",
			}}
		/>
	);
};
export default LogIn;
